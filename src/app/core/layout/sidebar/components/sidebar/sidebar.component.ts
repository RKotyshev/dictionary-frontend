import { Component } from '@angular/core';
import {TuiScrollbar, tuiScrollbarOptionsProvider} from '@taiga-ui/core';

@Component({
  selector: 'app-sidebar',
  imports: [
    TuiScrollbar
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
  providers: [
    tuiScrollbarOptionsProvider({
      mode: 'hover',
    }),
  ],
})
export class SidebarComponent {

}
