import { Component, computed, effect, inject, Signal } from '@angular/core';
import { TuiScrollbar } from '@taiga-ui/core';
import { ActivationEnd, Data, Router, Event } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { filter, map } from 'rxjs';
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
  public caption = computed(() => this.routeData()['caption'] ?? '')

  private routeData: Signal<Data>;

  private router = inject(Router);

  constructor() {
    this.routeData = toSignal(this.router.events.pipe(
      filter((routerEvent: Event) => routerEvent instanceof ActivationEnd),
      map((routerEvent: ActivationEnd): Data => {
        const routeData = routerEvent.snapshot.data;

        return routeData ?? {};
      })
    ), { initialValue: {} });

    effect(() => {
      console.log('routeData: ', this.routeData());
    })
  }
}
