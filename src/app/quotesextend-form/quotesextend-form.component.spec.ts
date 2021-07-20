import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesextendFormComponent } from './quotesextend-form.component';

describe('QuotesextendFormComponent', () => {
  let component: QuotesextendFormComponent;
  let fixture: ComponentFixture<QuotesextendFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuotesextendFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesextendFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
