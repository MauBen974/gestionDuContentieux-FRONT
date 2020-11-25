import { TribunalService } from './../service/tribunal.service';
import { Tribunal } from './../model/tribunal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tribunal',
  templateUrl: './tribunal.component.html',
  styleUrls: ['./tribunal.component.scss']
})
export class TribunalComponent implements OnInit {

  tribunal: Tribunal = new Tribunal();
  tribunals: Tribunal[];

  constructor(private tribunalService: TribunalService) { }

  ngOnInit(): void {
    this.findAllTribunalNotArchive();
  }

  findAllTribunalNotArchive() {
    this.tribunalService.findAllTribunalNotArchive().subscribe(data => { 
      this.tribunals = data; 
      console.log(this.tribunals)
     });
  }

}
