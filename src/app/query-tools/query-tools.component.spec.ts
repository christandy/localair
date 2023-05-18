import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryToolsComponent } from './query-tools.component';

describe('QueryToolsComponent', () => {
  let component: QueryToolsComponent;
  let fixture: ComponentFixture<QueryToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QueryToolsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QueryToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
