import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterComponent } from './search-filter.component';
import { By } from '@angular/platform-browser';

describe('SearchFilterComponent', () => {
  let component: SearchFilterComponent;
  let fixture: ComponentFixture<SearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFilterComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Search Component', () => {
    expect(component).toBeTruthy();
  });

  it('should have search textbox', () => {
    const searchTextbox = fixture.debugElement.query(By.css('#search-field'));
    expect(searchTextbox).toBeTruthy();
  });

  it('should have search button', () => {
    const searchButton = fixture.debugElement.query(By.css('#search-btn'));
    expect(searchButton).toBeTruthy();
  });

  it('should have clear button', () => {
    const clearButton = fixture.debugElement.query(By.css('#clear-btn'));
    expect(clearButton).toBeTruthy();
  });

  it('should call search function when button is clicked', () => {
    const searchButton = fixture.debugElement.query(By.css('#search-btn'));
    searchButton.triggerEventHandler('click', null); // Simulate button click
    fixture.detectChanges(); // Update the view

    expect(component.search.call).toBeTruthy();
  });


});
