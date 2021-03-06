/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TacheComponent } from './tache.component';

describe('TacheComponent', () => {
  let component: TacheComponent;
  let fixture: ComponentFixture<TacheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TacheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TacheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
