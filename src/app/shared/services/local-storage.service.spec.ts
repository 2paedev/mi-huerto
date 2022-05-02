import { TestBed } from '@angular/core/testing'
import { LOCAL_STORAGE_MOCK } from '../mocks-tests/store.mocks'
import { LocalStorageService } from './local-storage.service'

describe('LocalStorageService', () => {
  let service: LocalStorageService

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocalStorageService]
    })
    service = TestBed.inject(LocalStorageService)

    spyOn(localStorage, 'getItem').and.callFake(LOCAL_STORAGE_MOCK.getItem)
    spyOn(localStorage, 'setItem').and.callFake(LOCAL_STORAGE_MOCK.setItem)
  })

  it('should create the service', () => {
    expect(service).toBeTruthy()
  })

  it('should store the item in localStorage', () => {
    service.setItem('somekey', 'somevalue')
    expect(localStorage.getItem('somekey')).toEqual('somevalue')
  })

  it('should return stored item from localStorage', () => {
    localStorage.setItem('somekey', 'anothervalue')
    expect(service.getItem('somekey')).toEqual('anothervalue')
  })

  it('should return empty string if stored item from localStorage not exists', () => {
    expect(service.getItem('somekeynotexists')).toEqual('')
  })
})
