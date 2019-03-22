import { Component, ViewChild, AfterViewInit } from '@angular/core';

import { jqxSchedulerComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxscheduler.ts';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements AfterViewInit {
   @ViewChild('scheduler') scheduler: jqxSchedulerComponent;

  date: any = new jqx.date(2018, 10, 23);
  source: any;
  resources: any;
  dataAdapter: any;
  schedulerHeight = 150;
  appointments = new Array();
  views: any[] =
    [
      { type: 'timelineDayView', appointmentHeight: 30 },
    ];

  appointmentDataFields: any =
    {
      from: 'start',
      to: 'end',
      id: 'id',
      description: 'description',
      location: 'place',
      subject: 'subject',
      resourceId: 'calendar'
    };

  constructor() {
  }

  ngAfterViewInit() {
    this.scheduler.ensureAppointmentVisible('id1');
  }

  getWidth(): any {
    if (document.body.offsetWidth < 850) {
      return '90%';
    }

    return 850;
  }

  ngOnInit() {
    this.generateAppointments();
    this.createSource();
  }

  generateAppointments() {
    const appointments = new Array();
    const appointment1 = {
      id: 'id1',
      description: 'George brings projector for presentations.',
      location: '',
      subject: 'Quarterly Project Review Meeting',
      calendar: 'Room 1',
      start: new Date(),
      end: new Date()
    }
    const appointment2 = {
      id: 'id2',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 2',
      start: new Date(),
      end: new Date()
    }
    const appointment3 = {
      id: 'id3',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 3',
      start: new Date(),
      end: new Date()
    }
    const appointment4 = {
      id: 'id4',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 4',
      start: new Date(),
      end: new Date()
    }
    const appointment5 = {
      id: 'id5',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 5',
      start: new Date(),
      end: new Date()
    }
    const appointment6 = {
      id: 'id6',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 6',
      start: new Date(),
      end: new Date()
    }
    const appointment7 = {
      id: 'id7',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 7',
      start: new Date(),
      end: new Date()
    }
    const appointment8 = {
      id: 'id8',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 8',
      start: new Date(),
      end: new Date()
    }
    const appointment9 = {
      id: 'id9',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 9',
      start: new Date(),
      end: new Date()
    }
    const appointment10 = {
      id: 'id10',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 10',
      start: new Date(),
      end: new Date()
    }
    const appointment11 = {
      id: 'id11',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 11',
      start: new Date(),
      end: new Date()
    }
    const appointment12 = {
      id: 'id12',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 12',
      start: new Date(),
      end: new Date()
    }
    const appointment13 = {
      id: 'id13',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 13',
      start: new Date(),
      end: new Date()
    }
    const appointment14 = {
      id: 'id14',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 14',
      start: new Date(),
      end: new Date()
    }
    const appointment15 = {
      id: 'id15',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 15',
      start: new Date(),
      end: new Date()
    }
    const appointment16 = {
      id: 'id16',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 16',
      start: new Date(),
      end: new Date()
    }
    const appointment17 = {
      id: 'id17',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 17',
      start: new Date(),
      end: new Date()
    }
    const appointment18 = {
      id: 'id18',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 18',
      start: new Date(),
      end: new Date()
    }
    const appointment19 = {
      id: 'id19',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 19',
      start: new Date(),
      end: new Date()
    }
    const appointment20 = {
      id: 'id20',
      description: '',
      location: '',
      subject: 'IT Group Mtg.',
      calendar: 'Room 20',
      start: new Date(),
      end: new Date()
    }

    this.appointments.push(appointment1);
    this.appointments.push(appointment2);
    this.appointments.push(appointment3);
    this.appointments.push(appointment4);
    this.appointments.push(appointment5);
    this.appointments.push(appointment6);
    this.appointments.push(appointment7);
    this.appointments.push(appointment8);
    this.appointments.push(appointment9);
    this.appointments.push(appointment10);
    this.appointments.push(appointment11);
    this.appointments.push(appointment12);
    this.appointments.push(appointment13);
    this.appointments.push(appointment14);
    this.appointments.push(appointment15);
    this.appointments.push(appointment16);
    this.appointments.push(appointment17);
    this.appointments.push(appointment18);
    this.appointments.push(appointment19);
    this.appointments.push(appointment20);

    return this.appointments;
  }

  DateChange(event: any): void {
    console.log('in datechange');
    this.appointments = [];
    this.schedulerHeight = 150;

    if (new Date(event.args.date.year(), event.args.date.month() - 1, event.args.date.day()).setHours(0, 0, 0, 0)
      === new Date().setHours(0, 0, 0, 0)) {
      this.generateAppointments();
    } else {
      const appointment21 = {
        id: 'id21',
        description: '',
        location: '',
        subject: 'IT Group Mtg.',
        calendar: 'Room 21',
        start: new Date(event.args.date.year(), event.args.date.month() - 1, event.args.date.day()),
        end: new Date(event.args.date.year(), event.args.date.month() - 1, event.args.date.day())
      }

      this.appointments.push(appointment21);
    }
    this.createSource();

  }

  createSource() {
    console.log('in create source' + this.appointments.length);
    this.source = {
      dataType: 'array',
      dataFields: [
        { name: 'id', type: 'string' },
        { name: 'description', type: 'string' },
        { name: 'location', type: 'string' },
        { name: 'subject', type: 'string' },
        { name: 'calendar', type: 'string' },
        { name: 'start', type: 'date' },
        { name: 'end', type: 'date' }
      ],
      id: 'id',
      localData: this.appointments
    };

    this.dataAdapter = new jqx.dataAdapter(this.source);
    this.resources = {
      dataField: 'calendar',
      orientation: 'vertical',
      source: new jqx.dataAdapter(this.source)
    };

    this.schedulerHeight = this.schedulerHeight * this.appointments.length;
    console.log('this.schedulerHeight' + this.schedulerHeight);
  }
}