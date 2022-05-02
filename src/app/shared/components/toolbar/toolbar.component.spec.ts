import { NO_ERRORS_SCHEMA } from '@angular/compiler'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatButtonToggleModule } from '@angular/material/button-toggle'
import { MatIconModule } from '@angular/material/icon'
import { MatSidenavModule } from '@angular/material/sidenav'
import { MatToolbarModule } from '@angular/material/toolbar'
import { By } from '@angular/platform-browser'
import { ToolbarComponent } from './toolbar.component'

describe('ToolbarComponent', () => {
  let component: ToolbarComponent
  let fixture: ComponentFixture<ToolbarComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ToolbarComponent],
      imports: [MatToolbarModule, MatIconModule, MatSidenavModule, MatButtonToggleModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should fire sidenav event when click menu btn', () => {
    spyOn(component.sidenav, 'emit')
    const menuBtn = fixture.debugElement.query(By.css('.toolbar__menu'))
    menuBtn.triggerEventHandler('click', null)
    expect(component.sidenav.emit).toHaveBeenCalled()
  })

  it('should fire dark event when click theme btn', () => {
    spyOn(component.dark, 'emit')
    const lightThemeBtn = fixture.debugElement.query(By.css('.light-theme-btn'))
    lightThemeBtn.triggerEventHandler('click', null)
    expect(component.dark.emit).toHaveBeenCalled()
  })
})
