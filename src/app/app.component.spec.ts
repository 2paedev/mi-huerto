import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        RouterTestingModule,
        MatToolbarModule,
        MatIconModule,
        MatSidenavModule,
        MatButtonToggleModule,
      ],
      declarations: [AppComponent],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should open sidenav when click on menu icon', () => {
    component.sidenavOpened = false;
    expect(component.sidenavOpened).toBeFalsy();

    const buttonElement = fixture.debugElement.query(
      By.css('.app--toolbar__menu')
    );
    buttonElement.triggerEventHandler('click', null);
    expect(component.sidenavOpened).toBeTruthy();
  });

  it('should toggle theme when click on themes buttons', () => {
    component.isDarkTheme = false;
    expect(component.isDarkTheme).toBeFalsy();

    const darkButtonElement = fixture.debugElement.query(
      By.css('.dark-theme-btn')
    );
    darkButtonElement.triggerEventHandler('click', null);
    expect(component.isDarkTheme).toBeTruthy();

    const lightButtonElement = fixture.debugElement.query(
      By.css('.light-theme-btn')
    );
    lightButtonElement.triggerEventHandler('click', null);
    expect(component.isDarkTheme).toBeFalsy();
  });
});
