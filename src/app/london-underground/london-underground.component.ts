import { Component, OnInit } from '@angular/core';

import { LineService } from '../services/line.service';
import { Line } from '../models/line';

@Component({
  selector: 'app-london-underground',
  templateUrl: './london-underground.component.html',
  styleUrls: ['./london-underground.component.css']
})
export class LondonUndergroundComponent implements OnInit {

  constructor(
    private lineService: LineService
  ) {
  }


  lines!: Line[];

  ngOnInit(): void {
    this.lineService.getAll().subscribe((data: any)=>{
      console.log(data);

      this.lines = data;
      
    })  

  }

}
