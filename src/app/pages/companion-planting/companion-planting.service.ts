import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { Plant } from '../../shared/models/plant.model'

@Injectable()
export class CompanionPlantingService {
  constructor(private http: HttpClient) {}

  loadPlants(): Observable<Array<Plant>> {
    return this.http.get('assets/data/plants.json').pipe(map(plants => <Array<Plant>>plants || []))
  }
}
