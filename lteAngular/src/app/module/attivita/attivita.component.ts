import { Component, OnInit } from '@angular/core';
import { WebApiObservableService } from '../../services/web-api-observable.service';
import { EmitterService, MessageCustom } from '../../services/emitter.service';
@Component({
  selector: 'app-attivita',
  templateUrl: './attivita.component.html',
  styleUrls: ['./attivita.component.css']
})
export class AttivitaComponent implements OnInit {


    calendarOptions:Object = {
          //height: 'parent',
          fixedWeekCount : false,
          defaultDate: '2016-09-12',
          editable: true,
          eventLimit: true, // allow "more" link when too many events
          events: [
            {
              title: 'All Day Event',
              start: '2016-09-01'
            },
            {
              title: 'Long Event',
              start: '2016-09-07',
              end: '2016-09-10'
            },
            {
              id: 999,
              title: 'Repeating Event',
              start: '2016-09-09T16:00:00'
            },
            {
              id: 999,
              title: 'Repeating Event',
              start: '2016-09-16T16:00:00'
            },
            {
              title: 'Conference',
              start: '2016-09-11',
              end: '2016-09-13'
            },
            {
              title: 'Meeting',
              start: '2016-09-12T10:30:00',
              end: '2016-09-12T12:30:00'
            },
            {
              title: 'Lunch',
              start: '2016-09-12T12:00:00'
            },
            {
              title: 'Meeting',
              start: '2016-09-12T14:30:00'
            },
            {
              title: 'Happy Hour',
              start: '2016-09-12T17:30:00'
            },
            {
              title: 'Dinner',
              start: '2016-09-12T20:00:00'
            },
            {
              title: 'Birthday Party',
              start: '2016-09-13T07:00:00'
            },
            {
              title: 'Click for Google',
              url: 'http://google.com/',
              start: '2016-09-28'
            }
          ],
          eventClick: function(calEvent, jsEvent, view) {

        alert('Event: ' + calEvent.title);
        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);
        alert('View: ' + view.name);

        // change the border color just for fun
        $(this).css('border-color', 'red');

    },
    dayClick: function(date, jsEvent, view) {

        alert('Clicked on: ' + date.format());

        alert('Coordinates: ' + jsEvent.pageX + ',' + jsEvent.pageY);

        alert('Current view: ' + view.name);

        // change the day's background color just for fun
        $(this).css('background-color', 'red');

    }
        };

  constructor(private api: WebApiObservableService) { }

  ngOnInit() {
  }

  message:string;
  private url = EmitterService.urlapi + "/dipendente";
  getDipendente(search: string) {
  // Get all Documenti
  this.api.getService(this.url.concat('/' + search))
    .subscribe(
    res =>{
      this.parseWebService(res);
      //EmitterService.get(this.AUTOMEZZO_COLLAUDO_ID).emit(this.model.id);
    }, //Bind to view
    err => {
      // Log errors if any
      console.log(err);
    });
}

parseWebService(res) {
   if(res.data==null){
   EmitterService.get(EmitterService.MESSAGETOAST).emit(new MessageCustom('Automezzo non trovata!','Messagio di Confirmazione!','.green'));
     //this.onNuovo();
   }
   else
     //this.model=res.data;
     //alert();
  // this.searchElement.fillData = res.data;
   /*this.dataModel = res.data.data;
   this.paginacion.to = res.data.to;*/
   console.log('');
 }

}
