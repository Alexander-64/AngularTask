import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../app/shared/components/header/header.component';
import { FooterComponent } from '../app/shared/components/footer/footer.component';
import { LogoComponent } from '../app/shared/components/logo/logo.component';
import { BreadcrumbsComponent } from '../app/shared/components/breadcrumbs/breadcrumbs.component';
import { CoursesComponent } from './courses/courses.component';
import { SearchComponent } from './courses/search/search.component';
import { CourseComponent } from './courses/course/course.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesComponent,
    BreadcrumbsComponent,
    SearchComponent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
