import { TUI_DARK_MODE, TuiRoot } from "@taiga-ui/core";
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  SidebarContainerComponent
} from './core/layout/sidebar/containers/sidebar-container/sidebar-container.component';
import { SidebarComponent } from './core/layout/sidebar/components/sidebar/sidebar.component';
import { SidebarContentComponent } from './core/layout/sidebar/components/sidebar-content/sidebar-content.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MainNavComponent } from './core/layout/components/main-nav/main-nav.component';

@Component({
  selector: 'df-root',
  imports: [
    RouterOutlet,
    TuiRoot,
    SidebarContainerComponent,
    SidebarComponent,
    SidebarContentComponent,
    ScrollingModule,
    MainNavComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  public title = 'dictionaries-frontend';

  constructor() {}

  protected readonly darkMode = inject(TUI_DARK_MODE);
}
