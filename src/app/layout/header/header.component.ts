import { Component } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { filter, map, mergeMap } from 'rxjs';
import { MetaTagService } from '../../shared/services/mata-tags/meta-tags';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  title: string = '';
  description: any;

  constructor(
    //setting page-title dynamically
    private titleService: Title,
    private _meta: Meta,
    private _metaTagService: MetaTagService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    //setting meta-data dynamically
    private meta: Meta
  ) {

     /* 
      Dynamically updating 
       - Title
       - Meta-data 
       - og:meta
     */

    this.router.events.pipe(
      filter((activeRoute: any) => activeRoute instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data)

     ).subscribe((activeRoute) => {

      //update meta tags
      this._metaTagService.updateTitle(activeRoute['title']);
      this._metaTagService.updateDescription(activeRoute['description']);

       //display current page title and description in the page content
       this.title = this.titleService.getTitle().split('-')[2];
       this.description = this._meta.getTag('name=description')?.content;
     });

  }

}
