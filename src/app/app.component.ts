import {TUI_DARK_MODE, TuiButton, TuiRoot} from "@taiga-ui/core";
import {Component, inject, signal} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  SidebarContainerComponent
} from './core/layout/sidebar/containers/sidebar-container/sidebar-container.component';
import {SidebarComponent} from './core/layout/sidebar/components/sidebar/sidebar.component';
import {SidebarContentComponent} from './core/layout/sidebar/components/sidebar-content/sidebar-content.component';
import {ScrollingModule} from '@angular/cdk/scrolling';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, TuiRoot, SidebarContainerComponent, SidebarComponent, SidebarContentComponent, ScrollingModule, TuiButton],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dictionary-frontend';

  protected readonly darkMode = inject(TUI_DARK_MODE);
}
