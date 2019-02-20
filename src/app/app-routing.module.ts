import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { InsertMovieComponent } from './insert-movie/insert-movie.component';
import { MoviesComponent } from './movies/movies.component';
import { TransformComponent } from './transform/transform.component';
import { NewformComponent } from './newform/newform.component';

const routes: Routes = [
{path:'employees',component:EmployeesComponent},
{path:'departments',component:DepartmentsComponent},
{path:'departments/:id',component:DepartmentDetailComponent},
{path:'home',component:HomeComponent},
{path:'insert',component:InsertMovieComponent},
{path:'movies',component:MoviesComponent},
{path:'transform',component:TransformComponent},
{path:'newform',component:NewformComponent},

{path:'',redirectTo:'/home',pathMatch:'full'},
{path:'**',component:PageNotFoundComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
