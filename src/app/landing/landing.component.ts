import { Component, OnInit } from '@angular/core';
import { Character } from '../model/Character';
import { Router } from '@angular/router';
import { CharacterService } from '../services/character.service';
import { Information } from '../model/Information';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  
  titulo:string = "Data Api Rick - DDP";
  data: Character[] = [];
  pageInfo?: Information;  
  page: number = 1;

  constructor(private characterService:CharacterService , private router: Router) {}

  ngOnInit(): void {
    this.llenarData();
  }
  

  llenarData(){
    this.characterService.getData().subscribe( data => {
      const { info, results } = data;
      this.data = results;
      this.pageInfo = info;
    });
  }
  

  // Funcion boton next
  loadNextPage(): void {
    this.characterService.nextPage();
    this.llenarData();
  }

  // Funcion boton load
  loadPrevPage(): void {
    this.characterService.prevPage();
    this.llenarData();
  }


 
}
