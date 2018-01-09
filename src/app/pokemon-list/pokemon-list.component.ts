import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemonData:any = [];
  @Output() onPokemonSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onPokemonSelectedOnList(id:string){
    /*Doble trabajo de esta función, por una parte es la que se enlaza a la función click
    y por otra enmite hacia el componente madre a través de @Output el id seleccionado
    emit nos permite enviar el id a la función que enlace el componente madre con este componente */
    this.onPokemonSelected.emit(id);
  }

}
