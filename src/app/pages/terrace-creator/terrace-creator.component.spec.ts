import { ComponentFixture, TestBed } from '@angular/core/testing'
import { TerraceCreatorComponent } from './terrace-creator.component'

describe('TerraceCreatorComponent', () => {
  let component: TerraceCreatorComponent
  let fixture: ComponentFixture<TerraceCreatorComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TerraceCreatorComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(TerraceCreatorComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
