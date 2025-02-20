import { Component } from '@angular/core';
import {TuiScrollbar} from '@taiga-ui/core';
import { HeaderDirective } from '../../../../../shared/directives/header/header.directive';
import { TitleDirective } from '../../../../../shared/directives/title/title.directive';

@Component({
  selector: 'df-sidebar-content',
  imports: [
    TuiScrollbar,
    HeaderDirective,
    TitleDirective
  ],
  templateUrl: './sidebar-content.component.html',
  styleUrl: './sidebar-content.component.scss'
})
export class SidebarContentComponent {

}
