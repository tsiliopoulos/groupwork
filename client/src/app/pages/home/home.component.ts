import { Component, OnInit } from '@angular/core';
import { RoomListService } from 'src/app/services/room-list.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';

import { Room } from 'src/app/models/room';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  rooms: Room[] = [];
  page: number;
  pageSize: number;
  collectionSize: number;
  date: Date = new Date();
  day: string;
  days: string[] = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  buildings: string[] = ['ERC', 'SIRC', 'UA', 'UB'];
  building: string;
  startTime: string;
  startTimes: string[] = ['8:10:00 AM', '9:10:00 AM', '10:10:00 AM', '11:10:00 AM', '12:10:00 PM',
                          '1:10:00 PM', '2:10:00 PM', '3:10:00 PM', '4:10:00 PM', '5:10:00 PM',
                          '6:10:00 PM', '7:10:00 PM', '8:10:00 PM', '9:10:00 PM'];
  endTime: string;
  endTimes: string[] = ['9:00:00 AM', '10:00:00 AM', '11:00:00 AM', '12:10:00 PM',
                        '1:00:00 PM', '2:00:00 PM', '3:00:00 PM', '4:00:00 PM', '5:00:00 PM',
                        '6:00:00 PM', '7:00:00 PM', '8:00:00 PM', '9:00:00 PM', '10:00:00 PM'];

  constructor(
    private roomListService: RoomListService,
    private flashMessage: FlashMessagesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.rooms = new Array<Room>();
    this.page = 1;
    this.pageSize = 10;
    this.day = this.days[this.date.getDay()];
    this.startTime = '';
    this.endTime = '';
    this.building = '';
    this.displayRoomList();
  }

  private displayRoomList(): void {
    this.roomListService.getList().subscribe(data => {
      if(data.success) {
        this.rooms = data.roomList;
        this.collectionSize = this.rooms.length;
      }
    })
  }

  onChangeDay(selectedDay: string): void {
    if (selectedDay !== 'RESET') {
      this.day = selectedDay;
    } else {
      this.day = this.days[this.date.getDay()];
    }
    console.log(this.day);
  }

  onChangeBulding(selectedBuilding: string): void {
    if (selectedBuilding !== 'RESET') {
      this.building = selectedBuilding;
    } else {
      this.building = '';
    }
  }

  onChangeStartTime(selectedStartTime: string): void {
    if (selectedStartTime !== 'RESET') {
      this.startTime = selectedStartTime;
    } else {
      this.startTime = '';
    }

  }

  onChangeEndTime(selectedEndTime: string): void {
    if (selectedEndTime !== 'RESET') {
      this.endTime = selectedEndTime;
    } else {
      this.endTime = '';
    }

  }

  onResetClicked(): void {
    this.building = '';
    this.day = '';
    this.startTime = '';
    this.endTime = '';
  }

}
