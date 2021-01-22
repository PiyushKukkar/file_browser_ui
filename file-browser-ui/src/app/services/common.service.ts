import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http : HttpClient) { }

  getfilesnfolders(){
    return this.http.get('assets/filesnfolders1.json')
  }
}
