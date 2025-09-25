import { Injectable } from '@angular/core';
import { OdinConnect } from 'odin-connect'; // Adjust the import path as needed

@Injectable({
  providedIn: 'root',
})
export class OdinConnectService {
  private odinConnect: OdinConnect;

  constructor() {
    this.odinConnect = new OdinConnect({
      name: 'Angular Demo',
      env: '_deployment_preview',
    });
  }

  getInstance(): OdinConnect {
    return this.odinConnect;
  }
}
