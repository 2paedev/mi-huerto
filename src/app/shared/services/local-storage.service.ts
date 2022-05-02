import { Injectable } from '@angular/core'

@Injectable()
export class LocalStorageService {
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value)
  }

  getItem(key: string): string {
    const value = localStorage.getItem(key)
    return value ? value : ''
  }
}
