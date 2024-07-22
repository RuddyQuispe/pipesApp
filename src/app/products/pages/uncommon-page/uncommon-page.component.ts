import {Component} from '@angular/core';
import {interval, Observable, tap} from 'rxjs';


@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.scss'
})
export class UncommonPageComponent {
  protected name: string = 'Ruddy Quispe';
  protected gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  protected changeClient(): void {
    if (this.name == 'Melissa') {
      this.name = 'Ruddy Quispe';
      this.gender = 'male';
      return;
    }
    this.name = 'Melissa';
    this.gender = 'female';
  }

  // i18plural
  protected clients: string[] = ['Melisa', 'Pablo', 'Hernan', 'Florinda'];
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  protected deleteClient(): void {
    this.clients.pop();
  }

  // keyValuePipe
  public person = {
    name: 'Ruddy',
    age: 36,
    address: 'Warnes - Santa cruz, Bolivia'
  }

  // async pipe
  public myObservableTimer = interval(2000)
    .pipe(
      tap(value => console.log(value)));

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Tenemos data en la promesa'), 3500);
  })

}
