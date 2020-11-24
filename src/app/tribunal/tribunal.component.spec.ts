/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TribunalComponent } from './tribunal.component';

describe('TribunalComponent', () => {
  let component: TribunalComponent;
  let fixture: ComponentFixture<TribunalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TribunalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TribunalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
