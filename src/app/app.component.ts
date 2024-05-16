import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  ReplaySubject,
  Subject,
  connectable,
  delay,
  interval,
  of,
  takeUntil,
} from 'rxjs';
import { CommonModule } from '@angular/common';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  observable$ = interval(1000);

  subject = new ReplaySubject<number>(1);
  //ERA O QUE QUERIA, CONECTAR UM OBSERVABLE NUM SUBJECT- MOSTRAR ISSO PRO GIL DEPOIS
  multicasted = connectable(this.observable$.pipe(takeUntilDestroyed()), {
    connector: () => this.subject,
  }).connect();

  ngOnInit(): void {
    this.subject.subscribe((value) => console.log(value));
  }


}
