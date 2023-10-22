import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMangaPage } from './update-manga.page';

describe('UpdateMangaPage', () => {
  let component: UpdateMangaPage;
  let fixture: ComponentFixture<UpdateMangaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateMangaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
