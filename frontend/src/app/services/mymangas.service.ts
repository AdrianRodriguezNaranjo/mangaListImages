import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const endPoint = "http://localhost:8080/api/mangas";
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/form-data'
  })
};

@Injectable({
  providedIn: 'root'
})
export class MymangasServiceService {

  constructor(private httpClient: HttpClient) { }

  getAll() {
    return this.httpClient.get(endPoint);
  }

  getMangaById(id:any) {
    return this.httpClient.get(endPoint+"/"+id);
  }

  post(mangaName: any, mangaSynopsis: any, mangaChapter: any, blob: any) {
    let formData = new FormData();
    formData.append("name", mangaName);
    formData.append("synopsis", mangaSynopsis);
    formData.append("chapter", mangaChapter);
    formData.append("file", blob);
    return this.httpClient.post(endPoint, formData);
  }

  delete(idManga: any) {
    return this.httpClient.delete(endPoint + "/" + idManga, httpOptions);
  }

  put(idManga: any, mangaName: any, mangaSynopsis: any, mangaChapter: any, blob: any) {
    let formData = new FormData();
    formData.append("name", mangaName);
    formData.append("synopsis", mangaSynopsis);
    formData.append("chapter", mangaChapter);
    formData.append("file", blob);
    return this.httpClient.put(endPoint + "/" + idManga, formData)
  }

  put2(idManga: any, mangaName: any, mangaSynopsis: any, mangaChapter: any) {
    let formData = new FormData();
    formData.append("name", mangaName);
    formData.append("synopsis", mangaSynopsis);
    formData.append("chapter", mangaChapter);
    return this.httpClient.put(endPoint + "/" + idManga, formData)
  }
}
