import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {pokemonMasters} from '../data-model';

@Component({
  selector: 'app-pokemon-master-form',
  templateUrl: './pokemon-master-form.component.html',
  styleUrls: ['./pokemon-master-form.component.css']
})
export class PokemonMasterFormComponent implements OnInit {
  pokemonMasterForm:FormGroup;

  constructor(private fb:FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(){
    this.pokemonMasterForm = this.fb.group({
      name:["", Validators.required],
      gym:["", Validators.required],
      pokemon : this.fb.group({
        id : 0,
        name : "",
        type: ""
      })
    });
  }
}
