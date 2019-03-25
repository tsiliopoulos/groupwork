import { Pipe, PipeTransform } from '@angular/core';

import { Room } from '../models/room';

@Pipe({
  name: 'building'
})
export class BuildingPipe implements PipeTransform {

  transform(roomData: Room[], building: string): any {
    return roomData.filter(eachRoom => {
      return(
        eachRoom.Building.includes(building)
      )
    });
  }

}
