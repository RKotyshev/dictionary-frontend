import { Component, inject } from '@angular/core';
import { TUI_DARK_MODE, TuiButton } from '@taiga-ui/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'df-main-nav',
  imports: [
    TuiButton,
    FormsModule
  ],
  templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.scss'
})
export class MainNavComponent {
  protected readonly darkMode = inject(TUI_DARK_MODE);
}
