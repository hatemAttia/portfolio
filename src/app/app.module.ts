import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './shared/services/interceptor.service';
import { AboutComponent } from './modules/about/about.component';
import { SkillsComponent } from './modules/skills/skills.component';
import { EducationComponent } from './modules/education/education.component';
import { WorkExperienceComponent } from './modules/work-experience/work-experience.component';
import { RecentWorkComponent } from './modules/recent-work/recent-work.component';
import { ContactComponent } from './modules/contact/contact.component';
import { FacebookModule } from 'ngx-facebook';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TruncatePipe } from './shared/pipes/truncate.pipe';
//import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
 import { HttpClientModule } from '@angular/common/http'; 
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { BarRatingModule } from 'ngx-bar-rating';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    EducationComponent,
    WorkExperienceComponent,
    RecentWorkComponent,
    ContactComponent,
    TruncatePipe
  ],
  imports: [
    BarRatingModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
   FacebookModule.forRoot(),
   NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // JwSocialButtonsModule,

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
