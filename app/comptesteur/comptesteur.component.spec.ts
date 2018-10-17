import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComptesteurComponent } from './comptesteur.component';

describe('ComptesteurComponent', () => {
  let component: ComptesteurComponent;
  let fixture: ComponentFixture<ComptesteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComptesteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComptesteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
