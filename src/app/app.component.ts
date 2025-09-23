import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OdinConnect, OdinUser } from 'inescri-connect';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private odin: OdinConnect;
  
  title = 'connect-external-demo';
  user: OdinUser | null = null;


  constructor() {
    this.odin = new OdinConnect({ name: "External Demo", env: 'preview' });
  }

  async connect() {
   this.user = await this.odin.connect({
      open: {
        settings: 'height=700,width=500',
        target: '_blank',
      }
    });
  }
}
