import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { CharacterComponent } from './character/character.component';

//personajes
//personajes/:id

const routes: Routes = [
  {
    path: 'home', // No '/home'
    component: LandingComponent
  },
  {
    path: 'character/:id',
    component: CharacterComponent
  },
  {
    path: '',
    redirectTo: 'home', // No '/home'
    pathMatch: 'full'
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
