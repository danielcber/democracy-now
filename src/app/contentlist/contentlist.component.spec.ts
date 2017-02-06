/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ContentlistComponent } from './contentlist.component';

describe('ContentlistComponent', () => {
  let component: ContentlistComponent;
  let fixture: ComponentFixture<ContentlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
