import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailComponent } from './pokemon-detail/pokemon-detail.component';
import { PokemonListItemComponent } from './pokemon-list-item/pokemon-list-item.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatButtonModule} from '@angular/material/button';
import { HttpModule, JsonpModule } from '@angular/http';
import { PokemonMasterFormComponent } from './pokemon-master-form/pokemon-master-form.component';
import {AngularFireModule} from 'angularfire2';
import {environment} from '../environments/environment';
import {AngularFireAuthModule} from 'angularfire2/auth';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AuthService} from './auth.service';
import { PokedexComponent } from './pokedex/pokedex.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes:Routes=[
  {path: 'pokedex', component: PokedexComponent},
  {path: '', redirectTo:'/pokedex', pathMatch:"full"},
  {path: 'pokemonMaster', component: PokemonMasterFormComponent},
  {path: '**', component:PageNotFoundComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent,
    PokemonDetailComponent,
    PokemonListItemComponent,
    PokemonMasterFormComponent,
    PokedexComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    HttpModule,
    JsonpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        enableTracing:true
      })
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
