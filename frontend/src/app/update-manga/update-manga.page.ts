import { Component, OnInit } from '@angular/core';
import { MymangasServiceService } from '../services/mymangas.service';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-manga',
  templateUrl: './update-manga.page.html',
  styleUrls: ['./update-manga.page.scss'],
})
export class UpdateMangaPage implements OnInit {

  mangaName!: String;
  mangaSynopsis!: String;
  mangaChapter!: number;
  capturedPhoto: string = "";
  imagePicked: boolean = false;

  constructor(private router: Router, private mymangasService: MymangasServiceService, private photoService: PhotoService) { }

  ionViewWillEnter() {
    this.imagePicked = false;
    this.getMangaById();
  }

  ngOnInit() {
    this.imagePicked = false;
    this.getMangaById();
  }

  getMangaById() {
    this.mymangasService.getMangaById(localStorage.getItem("id")).subscribe((response: any) => {
      this.mangaName = response.name;
      this.mangaSynopsis = response.synopsis;
      this.mangaChapter = response.chapter;
      this.capturedPhoto = "http://localhost:8080/images/" + response.filename;
    });
  }

  async updateManga() {
    let blob = null;
    if (this.imagePicked == true) {
      if (this.capturedPhoto != "") {
        const response = await fetch(this.capturedPhoto);
        blob = await response.blob();
      }
      console.log(blob)
      this.mymangasService.put(localStorage.getItem("id"), this.mangaName, this.mangaSynopsis, this.mangaChapter, blob).subscribe(response => {
        this.gotoList();
      });
    } else {
      this.mymangasService.put2(localStorage.getItem("id"), this.mangaName, this.mangaSynopsis, this.mangaChapter).subscribe(response => {
        this.gotoList();
      });
    }
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
      this.imagePicked = true;
    });
  }

  discardImage() {
    this.capturedPhoto = "";
    this.imagePicked = true;
  }

  gotoList() {
    this.router.navigateByUrl("/my-mangas");
  }
}
