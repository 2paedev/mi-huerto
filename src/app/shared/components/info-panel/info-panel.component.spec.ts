import { NO_ERRORS_SCHEMA } from '@angular/compiler'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatCardModule } from '@angular/material/card'
import { MatIconModule } from '@angular/material/icon'
import { By } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { InfoPanelComponent } from './info-panel.component'

describe('InfoPanelComponent', () => {
  let component: InfoPanelComponent
  let fixture: ComponentFixture<InfoPanelComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoPanelComponent],
      imports: [BrowserAnimationsModule, MatCardModule, MatIconModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoPanelComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render the component when text exists', () => {
    let element = fixture.debugElement.query(By.css('.info-panel'))
    expect(element).toBeNull()
    component.text = 'Sample text'
    fixture.detectChanges()
    expect(element).toBeDefined()
  })
})
