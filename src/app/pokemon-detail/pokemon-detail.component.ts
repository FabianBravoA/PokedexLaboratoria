import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { Http, Response} from '@angular/http';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {
  pokemonNumId:number = 0;
  //Recibimos el pokemon a través de un atributo del componente
  //Para eso usamos el decorador @Input
  @Input() pokemon: string = "";
  pokemonData:any = {};

  constructor(
    private http:Http
  ) {

  }

  ngOnInit() {
  }

  //Veremos los cambios de cualquier valor acá,
  //En particular queremos saber cuando pokemon cambia
  ngOnChanges(changes: SimpleChanges) {
    //ponemos el id como número para poder poner el sprite
    this.pokemonNumId = parseInt(this.pokemon);

    if(typeof changes.pokemon !== undefined ){
      this.http.get("http://pokeapi.co/api/v2/pokemon/"+this.pokemon).subscribe(pokeData=>{
        this.pokemonData = pokeData.json();
      });
    }
  }
}
