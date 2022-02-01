import { HeroesComponent } from './heroes/heroes.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormHeroComponent } from './form-hero/form-hero.component';
import { HttpClientModule } from '@angular/common/http';
import { ListActiveHerosComponent } from './list-active-heros/list-active-heros.component';
import { ListInactiveHerosComponent } from './list-inactive-heros/list-inactive-heros.component';
import { ListAllHerosComponent } from './list-all-heros/list-all-heros.component';
import {ButtonModule} from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    FormHeroComponent,
    ListActiveHerosComponent,
    ListInactiveHerosComponent,
    ListAllHerosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
