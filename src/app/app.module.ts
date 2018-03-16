import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { AlertModule } from 'ngx-bootstrap';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { ModalModule } from 'ngx-bootstrap/modal';


import { HomeComponent } from './home/home.component';

import { EmbedVideo } from 'ngx-embed-video';

import { ApiService } from './api.service';

import {MapToKeysPipe} from "./map-to-keys.pipe";


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MapToKeysPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    FormsModule,
    ReactiveFormsModule,

    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    BsDropdownModule.forRoot(),
    TypeaheadModule.forRoot(),
    AlertModule.forRoot(),
    EmbedVideo.forRoot(),
    RatingModule.forRoot(),
    CollapseModule.forRoot(),
    ModalModule.forRoot()
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

