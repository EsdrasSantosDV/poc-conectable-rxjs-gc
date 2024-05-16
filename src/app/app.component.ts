import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ReplaySubject, Subject, connectable, delay, interval, of } from 'rxjs';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  observable$ = interval(1000);

  subject = new ReplaySubject<number>(1);
  //ERA O QUE QUERIA, CONECTAR UM OBSERVABLE NUM
  multicasted = connectable(this.observable$, {
    connector: () => this.subject,
  }).connect();

  ngOnInit(): void {
    this.subject.subscribe((value) => console.log(value));
  }
}
