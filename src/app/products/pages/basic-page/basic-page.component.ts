import {Component} from '@angular/core';

@Component({
  selector: 'app-basic-page',
  templateUrl: './basic-page.component.html',
  styleUrl: './basic-page.component.scss'
})
export class BasicPageComponent {
  protected nameLower: string = 'ruddy quispe';
  protected nameUpper: string = 'RUDDY QUISPE';
  protected fullname: string = 'RuDdY QuiSpE';

  protected customDate: Date = new Date();
}
