import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'revenue'
})
export class RevenuePipe implements PipeTransform {

  transform(array: Array<any>, ...args: unknown[]): Array<any> {
    array.sort((a: any, b: any) => {
      if (a.revenue < b.revenue) {
        return -1;
      } else if (a.revenue > b.revenue) {
        return 1;
      }

      return 0;
    });
    return array;
  }

}
