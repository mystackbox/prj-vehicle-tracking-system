import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFilterComponent } from './search-filter.component';
import { By } from '@angular/platform-browser';

describe('Search Component', () => {
  let component: SearchFilterComponent;
  let fixture: ComponentFixture<SearchFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchFilterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create search component', () => {
    expect(component).toBeTruthy();
  });

  it('should contain search textbox', () => {
    const searchTextbox = fixture.debugElement.query(By.css('#search-field'));
    expect(searchTextbox).toBeTruthy();
  });

  it('should contain search button', () => {
    const searchButton = fixture.debugElement.query(By.css('#search-btn'));
    expect(searchButton).toBeTruthy();
  });

  it('should contain clear button', () => {
    const clearButton = fixture.debugElement.query(By.css('#clear-btn'));
    expect(clearButton).toBeTruthy();
  });

  it('should call search function when search-btn is clicked', () => {
    const searchButton = fixture.debugElement.query(By.css('#search-btn'));
    searchButton.triggerEventHandler('click', null); 
    fixture.detectChanges(); // Update the view
    expect(component.search.call).toBeTruthy();
  });

  it('should emit event when search-btn is clicked', () => {
    spyOn(component.searchStringEvent, 'emit');
    const button = fixture.debugElement.query(By.css('#search-btn'));
    button.triggerEventHandler('click', null);
    expect(component.searchStringEvent.emit).toHaveBeenCalled();
  });

  it('should clear search textbox when clear-btn is clicked', () => {

    const clearButton = fixture.debugElement.query(By.css('#clear-btn'));
    clearButton.triggerEventHandler('click', null);
    fixture.detectChanges();
    const inputElement = fixture.debugElement.query(By.css('#search-field')).nativeElement;
    expect(inputElement.value).toBe('');

  });
});
