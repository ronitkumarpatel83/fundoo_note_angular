import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createnote',
  templateUrl: './createnote.component.html',
  styleUrls: ['./createnote.component.scss']
})
export class CreatenoteComponent implements OnInit {
  flag=false
  constructor() { }

  ngOnInit(): void {
  }
  open(){
    this.flag=true
  }
}
