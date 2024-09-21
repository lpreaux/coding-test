import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPage } from './editor.page';

describe('EditorComponent', () => {
  let component: EditorPage;
  let fixture: ComponentFixture<EditorPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditorPage],
    }).compileComponents();

    fixture = TestBed.createComponent(EditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
