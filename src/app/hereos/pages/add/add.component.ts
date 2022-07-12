import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styles: [
  ]
})
export class AddComponent implements OnInit {

  publishers =[
    {id: 'DC Comics',
    desc:'DC - Comics'},
    {id:'Marvel Comics',
    desc:'Marvel - Comics'}
  ];

  heroe : Heroe={
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher: Publisher.DCComics,
    alt_img:''
  }

     
  constructor( private heroeService : HeroesService) { }

  ngOnInit(): void {
  }

  save(){
    if( this.heroe.superhero.trim().length === 0){
      return;
    }
    this.heroeService.addHero(this.heroe)
    .subscribe(resp => {console.log('respuesta', resp)})
  }

}
