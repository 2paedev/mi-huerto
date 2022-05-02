import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { DebugElement } from '@angular/core'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { SelectComponent } from '../../shared/components/select/select.component'
import { COMPONENT_MOCKS } from '../../shared/mocks-tests/component.mocks'
import { STORE_MOCKS } from '../../shared/mocks-tests/store.mocks'
import { SharedModule } from '../../shared/shared-components.module'
import { CompanionPlantingComponent } from './companion-planting.component'
import { CompanionPlantingService } from './companion-planting.service'

describe('CompanionPlantingComponent', () => {
  let component: CompanionPlantingComponent
  let fixture: ComponentFixture<CompanionPlantingComponent>

  let store: MockStore
  const initialState = { plants: [] }

  let httpController: HttpTestingController
  let de: DebugElement
  let service: CompanionPlantingService
  let url = 'assets/data/plants.json'

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanionPlantingComponent],
      imports: [NoopAnimationsModule, HttpClientTestingModule, SharedModule],
      providers: [provideMockStore({ initialState }), CompanionPlantingService]
    }).compileComponents()
  })

  beforeEach(() => {
    store = TestBed.inject(MockStore)
    fixture = TestBed.createComponent(CompanionPlantingComponent)
    component = fixture.componentInstance
    store.setState(STORE_MOCKS.PLANTS)
    de = fixture.debugElement
    service = TestBed.inject(CompanionPlantingService)
    httpController = TestBed.inject(HttpTestingController)
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should be called with whatever the selectedPlant event emits', () => {
    spyOn(component, 'setSelectedPlant')
    const select = de.query(By.directive(SelectComponent))
    const cmp = select.componentInstance
    cmp.selected.emit(COMPONENT_MOCKS.PLANTS[0])
    expect(component.setSelectedPlant).toHaveBeenCalledWith(COMPONENT_MOCKS.PLANTS[0])
  })

  it('should save the selected value provided', () => {
    component.setSelectedPlant(COMPONENT_MOCKS.PLANTS[0])
    expect(component.selectedPlant).toEqual(COMPONENT_MOCKS.PLANTS[0])
  })

  it('should call loadPlants and return an array of Plants', () => {
    service.loadPlants().subscribe(res => {
      expect(res).toEqual(COMPONENT_MOCKS.PLANTS)
    })

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}`
    })

    req.flush(COMPONENT_MOCKS.PLANTS)
  })

  it('should call loadPlants and return an empty array if object is null', () => {
    service.loadPlants().subscribe(res => {
      expect(res).toEqual([])
    })

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}`
    })

    req.flush(null)
  })
})
