import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursesService } from './course.service';
import { CoursesComponent } from './courses/courses.component';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { TitleCaseEditComponent } from './title-case-edit/title-case-edit.component';
import { TitleCaseConverterPipe } from './title-case-converter.pipe';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CourseAssignmentComponent } from './course-assignment/course-assignment.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { FormBuilderDemoComponent } from './form-builder-demo/form-builder-demo.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    SummaryPipe,
    FavoriteComponent,
    TitleCaseEditComponent,
    TitleCaseConverterPipe,
    BootstrapPanelComponent,
    LikeComponent,
    ZippyComponent,
    ContactFormComponent,
    CourseAssignmentComponent,
    SignupFormComponent,
    FormArrayComponent,
    FormBuilderDemoComponent,
    ChangePasswordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    CoursesService  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
