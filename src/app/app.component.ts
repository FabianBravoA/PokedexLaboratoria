import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fullPokemonList:any = [];
  selectedPokemon:any = {}; //Partimos con un pokemon seleccionado vacio, acá después irá el json del seleccionado
  title = 'Pokemon - Pokedex';

  constructor(private http: Http){

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
