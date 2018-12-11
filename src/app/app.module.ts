import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { BreadcrumbsComponent } from './shared/components/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './shared/components/logo/logo.component';
import { CoursesComponent } from './courses/courses.component';
import { SearchComponent } from './courses/search/search.component';
import { CourseComponent } from './courses/course/course.component';
import { LoadMoreComponent } from './courses/load-more/load-more.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent,
    CoursesComponent,
    SearchComponent,
    CourseComponent,
    LoadMoreComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  exports: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LogoComponent,
    CoursesComponent,
    BreadcrumbsComponent,
    SearchComponent,
    CourseComponent,
    LoadMoreComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
