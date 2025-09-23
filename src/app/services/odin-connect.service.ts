import { Injectable } from '@angular/core';
import { OdinConnect } from 'inescri-connect'; // Adjust the import path as needed

@Injectable({
    providedIn: 'root'
})
export class OdinConnectService {
    private odinConnect: OdinConnect;

    constructor() {
        this.odinConnect = new OdinConnect({ name: "Angular Demo", env: 'preview' });
    }

    getInstance(): OdinConnect {
        return this.odinConnect;
    }
}