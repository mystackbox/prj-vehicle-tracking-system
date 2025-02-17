import { Injectable } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {

  constructor(private title: Title, private meta: Meta) { }

  updateTitle(title: string) {
    this.title.setTitle(`V-Tracker - ${title}`);
    this.meta.updateTag({ name: 'title', content: title })
  }

  updateDescription(desc: string) {
    this.meta.updateTag({ name: 'description', content: desc })
  }
}
