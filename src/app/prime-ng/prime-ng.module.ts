import {NgModule} from '@angular/core';
// import {MenuModule} from "primeng/menu";
import {MenubarModule} from 'primeng/menubar';
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {FieldsetModule} from "primeng/fieldset";
import {PanelModule} from "primeng/panel";
import {ToolbarModule} from 'primeng/toolbar';
import {SplitButtonModule} from 'primeng/splitbutton';
import { TableModule } from 'primeng/table';

@NgModule({
  exports: [
    // MenuModule,
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    ToolbarModule,
    SplitButtonModule,
    TableModule
  ]
})
export class PrimeNgModule {
}
