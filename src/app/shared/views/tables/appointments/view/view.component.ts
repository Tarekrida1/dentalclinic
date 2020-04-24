import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {

  events: any[];

  options: any;

  constructor() { }

  ngOnInit() {
    this.events = [
      {
          "title": "All Day Event",
          "start": "2020-01-01"
      },
      {
          "title": "Long Event",
          "start": "2020-01-07",
          "end": "2020-01-10"
      },
      {
          "title": "Repeating Event",
          "start": "2020-01-09T16:00:00"
      },
      {
          "title": "Repeating Event",
          "start": "2020-01-16T16:00:00"
      },
      {
          "title": "Conference",
          "start": "2020-01-11",
          "end": "2020-01-13"
      }
  ];


  this.options = {
    plugins: [dayGridPlugin, timeGridPlugin, interactionPlugin],
    defaultDate: '2020-03-24',
    defaultView: 'dayGridMonth',
    header: {
        left: 'prev,next, today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
    },
    editable: true
};

}

}
