import { NO_ERRORS_SCHEMA } from '@angular/compiler'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
//import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { LOCAL_STORAGE_MOCK } from './shared/mocks-tests/store.mocks'
import { LocalStorageService } from './shared/services/local-storage.service'
import { SharedModule } from './shared/shared-components.module'

describe('AppComponent', () => {
  let component: AppComponent
  let fixture: ComponentFixture<AppComponent>
  let ls: LocalStorageService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrowserAnimationsModule, RouterTestingModule, SharedModule],
      declarations: [AppComponent],
      providers: [LocalStorageService],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
    fixture = TestBed.createComponent(AppComponent)
    component = fixture.componentInstance
    ls = TestBed.inject(LocalStorageService)

    spyOn(localStorage, 'getItem').and.callFake(LOCAL_STORAGE_MOCK.getItem)
    spyOn(localStorage, 'setItem').and.callFake(LOCAL_STORAGE_MOCK.setItem)
  })

  it('should create the app', () => {
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it('should toggle sidenav variable', () => {
    expect(component.sidenavOpened).toBeFalse()
    component.toggleSidenav()
    expect(component.sidenavOpened).toBeTruthy()
  })

  it('should set dark theme variable', () => {
    expect(component.isDarkTheme).toBeFalse()
    component.toggleDarkTheme(true)
    expect(component.isDarkTheme).toBeTruthy()
    component.toggleDarkTheme(false)
    expect(component.isDarkTheme).toBeFalsy()
  })

  it('should set theme with localStorage variable', () => {
    expect(component.isDarkTheme).toBeFalsy()
    ls.setItem('mh-dark', 'true')
    fixture.detectChanges()
    fixture.whenStable().then(() => {
      expect(component.isDarkTheme).toBeTruthy()
    })
  })

  /*it('should open sidenav when click on menu icon', () => {
    component.sidenavOpened = false
    expect(component.sidenavOpened).toBeFalsy()

    const buttonElement = fixture.debugElement.query(
      By.css('.app--toolbar__menu')
    )
    buttonElement.triggerEventHandler('click', null)
    expect(component.sidenavOpened).toBeTruthy()
  })*/

  it('should toggle theme when click on themes buttons', () => {
    component.isDarkTheme = false
    expect(component.isDarkTheme).toBeFalsy()

    const darkButtonElement = fixture.debugElement.query(By.css('.dark-theme-btn'))
    darkButtonElement.triggerEventHandler('click', null)
    expect(component.isDarkTheme).toBeTruthy()

    const lightButtonElement = fixture.debugElement.query(By.css('.light-theme-btn'))
    lightButtonElement.triggerEventHandler('click', null)
    expect(component.isDarkTheme).toBeFalsy()
  })
})
