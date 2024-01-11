import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DockerizedComponent } from './dockerized.component';

describe('DockerizedComponent', () => {
  let component: DockerizedComponent;
  let fixture: ComponentFixture<DockerizedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DockerizedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DockerizedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
