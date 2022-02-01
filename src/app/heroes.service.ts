import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from './models/Hero';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http: HttpClient) { }

  create(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(`${environment.URL}/characters`, hero)
  }

  getAll(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${environment.URL}/characters?_sort=id&_order=desc`);
  }

  getActiveHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${environment.URL}/characters?active=true&_sort=id&_order=asc`);
  }

  getInactiveHeros(): Observable<Hero[]> {
    return this.http.get<Hero[]>(`${environment.URL}/characters?active=false&_sort=id&_order=asc`);
  }

  delete(id: number): Observable<Hero> {
    return this.http.delete<Hero>(`${environment.URL}/characters/${id}`);
  }

  getById(id: number): Observable<Hero> {
    return this.http.get<Hero>(`${environment.URL}/characters/${id}`);
  }

  modify(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${environment.URL}/characters/${hero.id}`, hero);
  }
}