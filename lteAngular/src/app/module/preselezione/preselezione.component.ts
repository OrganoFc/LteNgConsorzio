import { Component, OnInit } from '@angular/core';
import * as Handsontable from 'handsontable/dist/handsontable.full.js';

@Component({
  selector: 'app-preselezione',
  templateUrl: './preselezione.component.html',
  styleUrls: ['./preselezione.component.css']
})
export class PreselezioneComponent implements OnInit {
  private data:Array<any>;
   private options:any;

   constructor() {
     this.data = Handsontable.helper['createSpreadsheetData'](100, 12); // tslint:disable-line:no-string-literal
     this.options = {
       height: 396,
       colHeaders: true,
       rowHeaders: true,
       stretchH: 'all',
       columnSorting: true,
       contextMenu: true
     };
   }
public exampleData;
  ngOnInit() {
    this.exampleData = [
      {
        id: 'basic1',
        text: 'Basic 1'
      },
      {
        id: 'basic2',
        disabled: true,
        text: 'Basic 2'
      },
      {
        id: 'basic3',
        text: 'Basic 3'
      },
      {
        id: 'basic4',
        text: 'Basic 4'
      }
    ];
  }

}
