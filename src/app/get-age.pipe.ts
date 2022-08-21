
import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
@Pipe({
  name: 'getAge'
})
export class GetAgePipe implements PipeTransform {

 /* transform(UserDate: Date): number{
    let d =Math.abs(Date.now() - UserDate.getFullYear());
    let age = Math.floor((d / (1000 * 3600 * 24))/365.25);
return age;

  }*/
  transform(value: Date|moment.Moment, ): any {

  	if (!value) return value;

		return moment().diff(value, 'years')+" Years";
  	
  }

}


