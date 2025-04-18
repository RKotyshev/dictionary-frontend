import { Component, inject } from '@angular/core';
import { TUI_DARK_MODE, TuiButton } from '@taiga-ui/core';
import { FormsModule } from '@angular/forms';
import {RouterLink} from '@angular/router';
import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: 'df-main-nav',
  imports: [
    TuiButton,
    FormsModule,
    RouterLink
  ],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'
})
export class MainNavComponent {
  public themeService = inject(ThemeService);
  // protected readonly darkMode = inject(TUI_DARK_MODE);
}
