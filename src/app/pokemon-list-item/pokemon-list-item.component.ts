import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-pokemon-list-item',
  templateUrl: './pokemon-list-item.component.html',
  styleUrls: ['./pokemon-list-item.component.css']
})
export class PokemonListItemComponent implements OnInit {
  @Input() public pokemon:any = {};
  /*El decorador @Output nos permite definir escuchadores, por ejemplo
  Desde donde el componente madre puede recibir eventos, en este
  caso el pokemon seleccionado*/
  @Output() onPokemonSelected = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onPokemonClick(){
    /* Emit nos sirve para enviar el mensaje a través de la función 
    que se enlaza a través de @Output */
    this.onPokemonSelected.emit(this.pokemon.id);
  }

}
