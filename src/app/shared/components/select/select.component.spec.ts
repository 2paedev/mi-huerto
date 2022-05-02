import { HarnessLoader } from '@angular/cdk/testing'
import { TestbedHarnessEnvironment } from '@angular/cdk/testing/testbed'
import { NO_ERRORS_SCHEMA } from '@angular/compiler'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatSelectModule } from '@angular/material/select'
import { MatSelectHarness } from '@angular/material/select/testing'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { of } from 'rxjs'
import { COMPONENT_MOCKS } from '../../mocks-tests/component.mocks'
import { PlantComponent } from './../plant/plant.component'
import { SelectComponent } from './select.component'

describe('SelectComponent', () => {
  let component: SelectComponent
  let fixture: ComponentFixture<SelectComponent>
  let loader: HarnessLoader
  //let de: DebugElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectComponent, PlantComponent],
      imports: [BrowserAnimationsModule, MatFormFieldModule, MatSelectModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectComponent)
    component = fixture.componentInstance
    //de = fixture.debugElement
    component.data = of(COMPONENT_MOCKS.PLANTS)
    fixture.detectChanges()
    loader = TestbedHarnessEnvironment.loader(fixture)
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should emit when the button is clicked', async () => {
    spyOn(component.selected, 'emit')

    expect(component.option).not.toBeDefined()

    const select = await loader.getHarness(MatSelectHarness)
    await select.open()

    const options = await select.getOptions()
    await options[0].click()

    expect(component.option).toBeDefined()
    expect(component.selected.emit).toHaveBeenCalled()
  })

  it('should load options the dropdown (method Harness)', async () => {
    //component.data = of(COMPONENT_MOCKS.PLANTS)
    const select = await loader.getHarness(MatSelectHarness)
    await select.open()
    const options = await select.getOptions()

    expect(options.length).toBe(2)
  })

  it('should be able to get the value text from a select', async () => {
    //component.data = of(COMPONENT_MOCKS.PLANTS)

    expect(component.option).not.toBeDefined()

    const select = await loader.getHarness(MatSelectHarness)
    await select.open()

    const options = await select.getOptions()
    await options[0].click()

    expect(component.option).toBeDefined()
    expect(component.option.name).toBe('Ajo')
  })
})
