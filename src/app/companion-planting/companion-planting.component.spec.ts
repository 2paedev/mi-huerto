import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanionPlantingComponent } from './companion-planting.component';

describe('CompanionPlantingComponent', () => {
  let component: CompanionPlantingComponent;
  let fixture: ComponentFixture<CompanionPlantingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanionPlantingComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanionPlantingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
