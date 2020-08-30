import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { common_constants } from '../constants';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonapiService {

  private common_data = new BehaviorSubject('');
  commonmsg = this.common_data.asObservable();

  constructor(private http: HttpClient) { }

  searchFunctionality(val) {
    return this.http.get(`${common_constants.API_URL}v1/gifs/search?q=${val}&api_key=${common_constants.apikey}`)
  }

  onLoadFunctionality() {
    return this.http.get(`${common_constants.API_URL}?api_key=UEFlHeP6924eyl4srKNxnfMn43C1Jst3`)
  }

  passMessage(data: any) {
    this.common_data.next(data);
  }

}
