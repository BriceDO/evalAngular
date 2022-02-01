import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Hero } from '../models/Hero';

@Component({
  selector: 'app-list-all-heros',
  templateUrl: './list-all-heros.component.html',
  styleUrls: ['./list-all-heros.component.css'],
})
export class ListAllHerosComponent implements OnInit {
  savedHeros: Hero[] = [];

  constructor(private heroService: HeroesService) {}

  ngOnInit(): void {}

  getAll(): void {
    this.heroService.getAll().subscribe({
      next: (data) => (this.savedHeros = data),
      error: (err) => console.error(err),
      complete: () => {
        console.log('liste des héros affichée');
      },
    });
  }

  deleteOne(hero: Hero): void {
    this.heroService.delete(hero.id).subscribe({
      next: () => null,
      error: (err) => console.error(err),
      complete: () => {
        console.log(`suppression de ${hero.id}`);
        this.getAll();
      },
    });
  }

  modifyOne(hero: Hero){
    hero.active = !hero.active;
    console.log(hero.active);
  }
}
