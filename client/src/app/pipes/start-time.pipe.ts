import { Pipe, PipeTransform } from '@angular/core';
import { Room } from '../models/room';

@Pipe({
  name: 'startTime'
})
export class StartTimePipe implements PipeTransform {

  transform(roomData: Room[], startTime: string): any {
    return roomData.filter(eachRoom => {
      return(
        eachRoom.TimeStart.includes(startTime)
      )
    });
  }

}
