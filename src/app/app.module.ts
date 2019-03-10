import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { SingleEmplComponent } from './single-empl/single-empl.component';


const routes: Routes = [
  {path: 'empl/:id', component: SingleEmplComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    SingleEmplComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
