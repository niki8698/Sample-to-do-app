import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import {ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {UserServiceService} from './user-service.service';
import { HttpClientModule } from '@angular/common/http';
import { AuthguardGuard } from './authguard.guard';


@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [UserServiceService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
