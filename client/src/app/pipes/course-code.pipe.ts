import { Pipe, PipeTransform } from '@angular/core';

import { Room } from '../models/room';

@Pipe({
  name: 'courseCode'
})
export class CourseCodePipe implements PipeTransform {

  transform(roomData: Room[], courseCode: string): any {
    return roomData.filter(eachRoom => {
      return(
        eachRoom.CourseCode.includes(courseCode)
      )
    });
  }

}
