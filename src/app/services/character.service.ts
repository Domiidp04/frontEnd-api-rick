import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Response } from '../model/Response';
import { Character } from '../model/Character';
@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private baseUrl: string = 'https://rickandmortyapi.com/api/character';
  private currentPage:number = 1;

  constructor(private http: HttpClient) { }

  public getData(): Observable<Response> {
    const url = `${this.baseUrl}?page=${this.currentPage}`;
    return this.http.get<Response>(url);
  }

  public nextPage(): void {
    this.currentPage++;
  }

  public prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }

  public getCharacter(id: number): Observable<Character> {
    const url = this.baseUrl+`/${id}`;
    return this.http.get<Character>(url);
  }
  
  

}
