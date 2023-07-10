import {
  AfterContentInit,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';

import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { PokemonComponent } from '../pokemon/pokemon.component';
import { MatSelectModule } from '@angular/material/select';
import { DetailComponent } from '../detail/detail.component';
import { Subscription } from 'rxjs';

type PokemonType = {
  id: number;
  name: string;
  pokemon: { pokemon: Pokemon }[];
};

type Pokemon = {
  name: string;
  url: string;
};

type PokemonSpecies = {
  id: number;
  name: string;
  names: { name: string }[];
};

@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterOutlet,
    MatCardModule,
    MatSelectModule,
    PokemonComponent,
    DetailComponent,
  ],
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent
  implements OnInit, AfterViewInit, AfterContentInit, OnDestroy
{
  title = 'angular-lifecycle';
  baseUrl = 'https://pokeapi.co/api/v2/';
  pokeList: Pokemon[] = [];
  pokemon: Pokemon | undefined;
  jaName: string | undefined;

  @ViewChild('card') card: HTMLDivElement | undefined;

  private sub = new Subscription();

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    console.log('OnInit');
    this.sub.add(
      this.http
        .get<PokemonType>(`${this.baseUrl}type/2/`)
        .subscribe((data: PokemonType) => {
          console.log(data);
          this.pokeList = data.pokemon.map((value) => value.pokemon);
        })
    );
  }
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
    console.log(this.card);
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
    console.log(this.card);
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
    console.log(this.sub);
    this.sub.unsubscribe();
    console.log(this.sub);
  }

  select(value: Pokemon): void {
    this.pokemon = value;

    const selectSub = new Subscription();

    selectSub.add(
      this.http
        .get<PokemonSpecies>(`${this.baseUrl}pokemon-species/${value.name}`)
        .subscribe((data) => (this.jaName = data.names[0].name))
    );

    selectSub.unsubscribe();
  }
}
