import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  constructor(private route:ActivatedRoute, private router:Router) { }
departmentId;
  ngOnInit() {
    this.route.paramMap.subscribe(data=>{
      //let id=parseInt(data.get('id')); //or use the below line instead of parsing
      this.departmentId=data.get('id'); 
      //this.departmentId=id;
    })
  }
  onBackClick(){
    //this.router.navigate(['../'],{relativeTo:this.route}); or the below way but this is best practice
    this.router.navigate(['/departments']);
  }

}
