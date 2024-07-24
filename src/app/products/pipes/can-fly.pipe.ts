import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
  name: 'canFly'
})
export class CanFlyPipe implements PipeTransform {
  public transform = (canFly: boolean): string => canFly ? 'Vuela' : 'No vuela';

}
