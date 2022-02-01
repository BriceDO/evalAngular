import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/Hero';

@Component({
  selector: 'app-list-inactive-heros',
  templateUrl: './list-inactive-heros.component.html',
  styleUrls: ['./list-inactive-heros.component.css']
})
export class ListInactiveHerosComponent implements OnInit {

  inactivesHeros: Hero[] =[];

  constructor(private heroService: HeroesService) { }

  ngOnInit(): void {}

  getInactiveHeros(): void {
    this.heroService.getInactiveHeros().subscribe({
      next: data => this.inactivesHeros = data,
      error: err => console.error(err),
      complete: () => console.log("Récupération des champions inactifs")
    })
  }

}
