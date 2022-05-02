import { NO_ERRORS_SCHEMA } from '@angular/compiler'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatDividerModule } from '@angular/material/divider'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { MockStore, provideMockStore } from '@ngrx/store/testing'
import { COMPONENT_MOCKS } from '../../mocks-tests/component.mocks'
import { STORE_MOCKS } from '../../mocks-tests/store.mocks'
import { PlantComponent } from './../plant/plant.component'
import { PlantsGroupComponent } from './plants-group.component'

describe('PlantsGroupComponent', () => {
  let component: PlantsGroupComponent
  let fixture: ComponentFixture<PlantsGroupComponent>
  let store: MockStore
  const initialState = { plants: [] }

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantsGroupComponent, PlantComponent],
      imports: [BrowserAnimationsModule, MatDividerModule],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [provideMockStore({ initialState })]
    }).compileComponents()
  })

  beforeEach(() => {
    store = TestBed.inject(MockStore)
    fixture = TestBed.createComponent(PlantsGroupComponent)
    component = fixture.componentInstance
    store.setState(STORE_MOCKS.PLANTS)
    fixture.detectChanges()
  })

  it('should create', () => {
    component.plants = COMPONENT_MOCKS.PLANTS_BY_ID
    fixture.detectChanges()
    expect(component).toBeTruthy()
  })
})
