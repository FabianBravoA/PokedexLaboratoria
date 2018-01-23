import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullPokemonList:any = [];
  selectedPokemon:any = {}; //Partimos con un pokemon seleccionado vacio, acá después irá el json del seleccionado
  title = 'Pokemon - Pokedex';

  email:string;
  password:string;

  constructor(private http: Http, public authService:AuthService){

  }

  signup(){
    this.authService.signup(this.email, this.password);
    this.email = this.password = '';
  }

  login(){
    this.authService.login(this.email, this.password);
    this.email = this.password = '';
  }

  logout(){
    this.authService.logout();
  }

  ngOnInit() {
    this.http.get("../assets/pokedex.json").subscribe(pokeData=>{
      this.fullPokemonList = pokeData.json();
    })
  }

  onPokemonSelect(pokemonId:string){
    //Buscamos usando find el pokemon seleccionado, lo guardamos en la propiedad selectedPokemon, enlazada al 
    //componente de detalle del pokemon
    this.selectedPokemon = this.fullPokemonList.find(pokemon => { return pokemon.id == pokemonId;});
  }
}
