import { Component, OnInit, Input, Output, SimpleChanges } from '@angular/core';
import { Hero } from '../heroes/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero !: Hero;
  prevname!: string;
  user !: string;
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location,
  ) { }

  ngOnInit(): void {
    this.user = this.hero.name;
    this.prevname = this.hero.name;
    console.log( this.hero);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.user = this.hero.name;
    this.prevname = this.hero.name;
  }

  change(): void {
    // console.log(this.hero.name);
    this.prevname = this.hero.name;
    this.hero.name = this.user;
  }
  onClear(): void {
    this.hero.name = this.prevname;
    this.user = this.hero.name;
  }

  onFocus(): void{
    this.hero.name = 'typing...';
  }
  outFocus(): void{
    this.hero.name = this.prevname;
  }
}
