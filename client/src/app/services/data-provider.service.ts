import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SlotsService {
  constructor(private http: HttpClient) { }
  baseUrl = '/api/v1/slots';
  getSlots() {
    return this.http.get(this.baseUrl);
  }
   scheduleSlot() {
      console.log(this.http.put(this.baseUrl,
        { 'fullName': 'Royzipuff', 'email': 'royzipuff@shtudel', 'phone': '0545124566', 'quantity': '1'}));
  }
}




