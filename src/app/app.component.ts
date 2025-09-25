import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OdinToken, OdinUser } from 'odin-connect';
import { OdinConnectService } from './services/odin-connect.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'connect-external-demo';
  user: OdinUser | null = null;
  tokens: ReadonlyArray<OdinToken> = [];
  loading = false;

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
    this.loading = true;
    const result = await this.odinService
      .getInstance()
      .getTokens({ pagination: { page: 1, limit: 10 } });
    this.tokens = result.data;
    this.loading = false;
  }
}
