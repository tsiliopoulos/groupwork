// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './partials/header/header.component';
import { FooterComponent } from './partials/footer/footer.component';
import { PageNotFoundComponent } from './partials/page-not-found/page-not-found.component';

// Services
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';

// Pipes
import { DayPipe } from './pipes/day.pipe';
import { BuildingPipe } from './pipes/building.pipe';
import { CourseCodePipe } from './pipes/course-code.pipe';
import { StartTimePipe } from './pipes/start-time.pipe';
import { EndTimePipe } from './pipes/end-time.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PageNotFoundComponent,
    DayPipe,
    BuildingPipe,
    CourseCodePipe,
    StartTimePipe,
    EndTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FlashMessagesModule,
    NgbModule
  ],
  providers: [FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
