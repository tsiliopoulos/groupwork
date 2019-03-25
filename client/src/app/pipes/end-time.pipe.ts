import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../models/room';

@Pipe({
  name: 'endTime'
})
export class EndTimePipe implements PipeTransform {

  transform(roomData: Room[], endTime: string): any {
    return roomData.filter(eachRoom => {
      return(
        eachRoom.TimeEnd.includes(endTime)
      )
    });
  }

}
