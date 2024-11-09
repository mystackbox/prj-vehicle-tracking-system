import { Injectable } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { TitleStrategy, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class pageTitle extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {

    const title = this.buildTitle(routerState);
    // if (title !== undefined) {
    //   this.title.setTitle(`Monakali .Inc | ${title}`);
    // }

    if (title !== undefined) {
        this.title.setTitle(`Monakali .Inc | ${title}`);
      }

  }
}