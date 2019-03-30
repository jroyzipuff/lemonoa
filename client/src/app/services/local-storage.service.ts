
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {
    constructor() { }
    afuocoInfoKey = 'afuocoinfo';
    saveInfo(fullName: string, email: string, phone: number) {
        const info = JSON.stringify({'fullName': fullName, 'email': email, 'phone': phone});
        localStorage.setItem(this.afuocoInfoKey, info);
    }

    getInfo() {
        const info = localStorage.getItem(this.afuocoInfoKey);
        return JSON.parse(info);
    }
}
