import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';
import { Hero } from '../models/Hero';

@Component({
  selector: 'app-list-active-heros',
  templateUrl: './list-active-heros.component.html',
  styleUrls: ['./list-active-heros.component.css']
})
export class ListActiveHerosComponent implements OnInit {

  activesHeros: Hero[] = [];

  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {}
  
  getActiveHeros(): void {
    this.heroService.getActiveHeros().subscribe({
      next: data => this.activesHeros = data,
      error: err => console.error(err),
      complete: () => console.log("Récupération des champions actifs")
    })
  }
}
