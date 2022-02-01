import { HeroesService } from './../heroes.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Hero } from '../models/Hero';

@Component({
  selector: 'app-form-hero',
  templateUrl: './form-hero.component.html',
  styleUrls: ['./form-hero.component.css']
})
export class FormHeroComponent implements OnInit {

  formHero: FormGroup;

  constructor(private heroService: HeroesService) { 
    this.formHero = new FormGroup({
      titre: new FormControl(),
      key: new FormControl(),
      nom: new FormControl(),
      active: new FormControl()
    })
  }

  ngOnInit(): void {
  }

  save(): void {
    this.heroService.create(this.formHero.value).subscribe({
      next: () => null,
      error: err => console.error(err),
      complete: () => console.log("héro créé !")
    })
  }

  getAll(): void {
    this.heroService.getAll().subscribe({
      next: () => null,
      error: err => console.error(err),
      complete: () => console.log("liste des héros affichée")
    })
  }
}
