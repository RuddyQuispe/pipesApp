import {Component, OnInit} from '@angular/core';
import {PrimeNGConfig} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public title: string = 'Ruddy Quispe';


  constructor(private primengConfig: PrimeNGConfig) {
  }

  public ngOnInit(): void {
    this.primengConfig.ripple = true;
  }
}
