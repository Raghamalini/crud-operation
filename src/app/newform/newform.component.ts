import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newform',
  templateUrl: './newform.component.html',
  styleUrls: ['./newform.component.css']
})
export class NewformComponent implements OnInit {
reviews=["worst","bad","average","good","amazing"];
  constructor() { }

  ngOnInit() {
    
  }
  onInsertMovie(movie){
    console.log(movie);
    
      
  }
}
