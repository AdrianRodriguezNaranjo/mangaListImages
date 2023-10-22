import { Component, OnInit } from '@angular/core';
import { MymangasServiceService } from '../services/mymangas.service';
import { Route, Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-my-mangas',
  templateUrl: './my-mangas.page.html',
  styleUrls: ['./my-mangas.page.scss'],
})
export class MyMangasPage implements OnInit {

  mangas: any = []
  mangaName!: String;
  mangaSynopsis!: String;
  mangaChapter!: number;
  isSubmitted: boolean = false;
  capturedPhoto: string = "";

  constructor(private router: Router,private mymangasService: MymangasServiceService, private photoService: PhotoService) { }

  ionViewWillEnter() {
    this.isSubmitted = false;
    this.capturedPhoto = "";
    this.getAllMangas();
  }

  ngOnInit() {
    if (this.getAllMangas() != null) {
      this.getAllMangas()
    }
  }

  getAllMangas() {
    this.mymangasService.getAll().subscribe(response => {
      this.mangas = response;
    });
  }

  async postManga() {
    let blob = null;
    if (this.capturedPhoto != "") {
      const response = await fetch(this.capturedPhoto);
      blob = await response.blob();
    }
    this.mymangasService.post(this.mangaName, this.mangaSynopsis, this.mangaChapter, blob).subscribe(response => {
      this.getAllMangas();
    });
  }

  deleteManga(idManga: any) {
    this.mymangasService.delete(idManga).subscribe(response => {
      this.getAllMangas();
    });
  }

  pickImage() {
    this.photoService.pickImage().then(data => {
      this.capturedPhoto = data.webPath;
    });
  }

  discardImage() {
    this.capturedPhoto = "";
  }

  gotoUpdate(id:any){
    localStorage.setItem("id",id);
    this.router.navigateByUrl("/update-manga");
  }
}
