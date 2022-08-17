import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveformdemoComponent } from './reactiveformdemo/reactiveformdemo.component';
import { TemplatedrivenformComponent } from './templatedrivenform/templatedrivenform.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveformdemoComponent,
    TemplatedrivenformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule                    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
