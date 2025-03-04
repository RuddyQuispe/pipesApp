import {Pipe, PipeTransform} from "@angular/core";

// fernando | toggleCase = 'FERNANDO'

@Pipe({
  name: 'toggleCase'
})
export class ToggleCasePipe implements PipeTransform {

  public transform(value: string, toUpper: boolean = false): string {
    return toUpper ? value.toUpperCase() : value.toLowerCase();
  }

}
