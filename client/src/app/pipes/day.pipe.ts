import { Pipe, PipeTransform } from '@angular/core';

import { Room } from '../models/room';



@Pipe({
  name: 'day'
})
export class DayPipe implements PipeTransform {

  days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  transform(roomData: Room[], day: string): any {
    return roomData.filter(eachRoom => {
      return(
        eachRoom.Day.includes(day)
      )
    });
  }

}
