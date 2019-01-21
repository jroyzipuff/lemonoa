import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class SlotsService {
  constructor(private http: HttpClient) { }

  public availableSlots = new BehaviorSubject<Object>({});
  baseUrl = '/api/v1/slots';
  getSlots() {
    return this.http.get(this.baseUrl).subscribe((data) => {
        this.availableSlots.next(data);
    });
  }
   scheduleSlot(payload) {
      this.http.put(this.baseUrl, payload);
  }
}




