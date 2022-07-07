import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSeleted !: Heroe | undefined;

  constructor( private heroesService : HeroesService) { }

  ngOnInit(): void {
  }

  searching(){
    this.heroesService.getSuggestions(this.termino.trim())
    .subscribe(heroes => this.heroes = heroes);
  }

  optionSelected( event : MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.heroeSeleted = undefined
      return;
    }

    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero

    this.heroesService.getHeroeById(heroe.id!)
    .subscribe (heroe => this.heroeSeleted = heroe);
  }

}
