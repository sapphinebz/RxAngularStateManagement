import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RxState, selectSlice } from '@rx-angular/state';
import { AppService } from './app.service';
import { CoroselComponent } from './shared/corosel/corosel.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [RouterModule, CoroselComponent, CommonModule],
  providers: [AppService],
})
export class AppComponent {
  title = 'NgRxExample';

  stateService = inject(AppService);

  limit$ = this.stateService.limit$;
  offset$ = this.stateService.offset$;

  constructor() {}
}
