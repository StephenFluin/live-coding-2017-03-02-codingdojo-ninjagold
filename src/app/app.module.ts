import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAv6Qy-7K1YyGlg17-JAK2xZqpD1Q5BHAc",
      authDomain: "ninja-gold.firebaseapp.com",
      databaseURL: "https://ninja-gold.firebaseio.com",
      storageBucket: "ninja-gold.appspot.com",
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
