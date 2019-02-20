import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transform',
  templateUrl: './transform.component.html',
  styleUrls: ['./transform.component.css']
})
export class TransformComponent implements OnInit {
hero="Dhanush Aishwarya";
film={
  "movie":"maari2",
  "hero":"sai pallavi",
  "director":"prabhu deva"
}
date=new Date();
  constructor() { }

  ngOnInit() {
  }

}
