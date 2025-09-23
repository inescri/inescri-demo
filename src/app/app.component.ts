import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OdinConnect, OdinUser } from 'inescri-connect';
import { OdinConnectService } from './services/odin-connect.service';
import { Token } from 'inescri-connect/dist/models/token';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'connect-external-demo';
  user: OdinUser | null = null;
  tokens: ReadonlyArray<Token> = [];

  constructor(private odinService: OdinConnectService) {}

  async connect() {
    this.user = await this.odinService.getInstance().connect({
      open: {
        settings: 'height=700,width=500',
        target: '_blank',
      },
    });
  }

  async getTokens() {
    this.tokens = await this.odinService.getInstance().getTokens({ page: 1, limit: 10 });
  }
}
