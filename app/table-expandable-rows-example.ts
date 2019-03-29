import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'table-expandable-rows-example',
  styleUrls: ['table-expandable-rows-example.css'],
  templateUrl: 'table-expandable-rows-example.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TableExpandableRowsExample {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['name', 'weight', 'symbol', 'position'];
  expandedElement: PeriodicElement;
}

// export interface Item {
//     sn: string;
//     nam: string;
// }
// export interface PeriodicElement {
//   name:{
//       [key: string]: Item
//       };
//   position: number;
//   weight: number;
//   symbol: string;
//   description: string;
// }

export interface Body_Size{
  wrist_circ: number;
  forearm_circ: number;
  bicep_circ: number;
  volume: number;
  length: number;
  
}
  
export interface Biometric{
  name: string;
  value: number;
}

export interface myJsonData {
  Body_Size_Measurements:{
       [key: string]: Body_Size
      };
  Biometric_Data: {
       [key: string]: Biometric
      };
 
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     position: 1,
//     name: [`h2`,`Hydrogen`],
//     weight: 1.0079,
//     symbol: 'H',
//     description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
//         atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`
//   }, {
//     position: 2,
//     name: ['h','Helium'],
//     weight: 4.0026,
//     symbol: 'He',
//     description: `Helium is a chemical element with symbol He and atomic number 2. It is a
//         colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
//         group in the periodic table. Its boiling point is the lowest among all the elements.`

//   },
// ];

const ELEMENT_DATA: myJsonData[] = [
  {
    Body_Size_Measurements: 
    [
    {Right_Arm:[
        wrist_circ: 10,
        forearm_circ: 10,
        bicep_circ: 11,
        volume: 11,
        length: 12]
    },
    {Left_Arm:[
       wrist_circ: 10,
        forearm_circ: 10,
        bicep_circ: 11,
        volume: 11,
        length: 12]
    }],
    
    Biometric_Data:[
    { name: "Glucose Level", value: 100 },
    { name: "HDL Cholesterol", value: 100 },
    { name: "LDL Cholesterol", value: 200 }]
   
  }
];


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */