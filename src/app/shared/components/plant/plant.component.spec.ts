import { NO_ERRORS_SCHEMA } from '@angular/compiler'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PlantComponent } from './plant.component'

describe('PlantComponent', () => {
  let component: PlantComponent
  let fixture: ComponentFixture<PlantComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantComponent],
      imports: [BrowserAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
