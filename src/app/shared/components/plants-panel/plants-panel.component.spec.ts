import { NO_ERRORS_SCHEMA } from '@angular/compiler'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { PlantsGroupComponent } from '../plants-group/plants-group.component'
import { PlantsPanelComponent } from './plants-panel.component'

describe('PlantsPanelComponent', () => {
  let component: PlantsPanelComponent
  let fixture: ComponentFixture<PlantsPanelComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlantsPanelComponent, PlantsGroupComponent],
      imports: [BrowserAnimationsModule, MatCardModule, MatDividerModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantsPanelComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
