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
  pageInfo: Information;  // Add this line to store page information
  page: number = 1;

  constructor(private characterService:CharacterService , private router: Router) {}

  ngOnInit(): void {
    this.llenarData();
  }
  

  llenarData(){
    this.characterService.getData().subscribe( data => {
      console.log(data);  // Log the response to the console
      const { info, results } = data;
      this.data = results;
      this.pageInfo = info;
    });
  }
  

  // Function to load next page
  loadNextPage(): void {
    this.characterService.nextPage();
    this.llenarData();
  }

  // Function to load previous page
  loadPrevPage(): void {
    this.characterService.prevPage();
    this.llenarData();
  }

  showCharacterDetails(characterId: number): void {
    this.router.navigate(['character', characterId]);
  }

 
}
