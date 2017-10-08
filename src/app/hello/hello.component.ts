import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {

  constructor() { }

  private name: string;
  public isHidden: boolean = false;
  public customers : string[] = [
    'Rodrigo',
    'Rebekah'
  ];
  public cities : { name: string, population: number}[] = [
      {"name": "Camarillo", "population" : 70000},
      {"name": "Oxnard", "population" : 300000}
  ]

  public selectedName : string = 'Rebekah One';
  public selectedColor: string = 'gray'


  ngOnInit() {
    // this.name = 'Rodrigo';
    this.setName("Rodrigo");
  }

  setName(name: string){
    this.name = name;
  }

  getName(){
    return this.name;
  }

  clickMe(){
      this.isHidden = !this.isHidden;
  }

}
