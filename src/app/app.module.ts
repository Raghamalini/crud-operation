import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesComponent } from './employees/employees.component';
import { DepartmentsComponent } from './departments/departments.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';
import { InsertMovieComponent } from './insert-movie/insert-movie.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesComponent } from './movies/movies.component';
import { TransformComponent } from './transform/transform.component';
import { NewformComponent } from './newform/newform.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeesComponent,
    DepartmentsComponent,
    HomeComponent,
    PageNotFoundComponent,
    DepartmentDetailComponent,
    InsertMovieComponent,
    MoviesComponent,
    TransformComponent,
    NewformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
