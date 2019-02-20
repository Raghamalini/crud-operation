import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.css']
})
export class DepartmentsComponent implements OnInit {
departments=[
{"id":1,"name":"c-sharp","lecturer":"lata"},
{"id":2,"name":"software-enginering","lecturer":"vani"},
{"id":3,"name":"mobile-application","lecturer":"sneha"},
{"id":4,"name":"java","lecturer":"vasantha"},
{"id":5,"name":"computer-networks","lecturer":"sharath"}
];
  constructor(private router:Router) {   //router is variable and Router is class/object (package)  Router imports al the packages reqyired to route

   }
  onSelect(department){
    console.log(department);
    this.router.navigate(['/departments',department.id]);
  }
  ngOnInit() {
  }

}
