import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationError, Router, TitleStrategy } from '@angular/router';
import { pageTitle } from '../../shared/services/page-title/pageTitle';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-master-page',
  templateUrl: './master-page.component.html',
  styleUrl: './master-page.component.scss',
  providers: [
    {
      provide: TitleStrategy,
      useClass: pageTitle,
    },
  ],
})
export class MasterPageComponent {
  title: any;
  currentTitle: any;

  constructor(
    //setting page-title dynamically
    private titleService: Title,

    //router change detection
    private router: Router,
    private activatedRoute: ActivatedRoute,
  ) {
  }
}
