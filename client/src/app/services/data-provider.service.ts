import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
  baseUrl = '/api/v1/slots';
  getSlots() {
    return this.http.get(this.baseUrl);
  }
}




