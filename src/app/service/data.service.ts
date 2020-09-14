import { Injectable } from '@angular/core';
import { Repo } from '../model/repo';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  repositories: Repo[] = [];
  constructor(private http: HttpClient) { }
  getRepositoriesData(page: number): Observable<any> {
    const getRequest = `https://api.github.com/search/repositories?q=created:>${this.getCurrentDate()}
       &sort=stars&order=desc&page=${page}`;
    return this.http.get<any>(getRequest);
  }
  getRepositoriesArray(page: number): Repo[] {
      this.getRepositoriesData(page).subscribe((resp: any) => {
        this.repositories.length = 0;
        for (const elem of resp.items) {
        this.repositories.push(new Repo( elem.name, elem.description,
          elem.owner.login, elem.owner.avatar_url,
          elem.stargazers_count, elem.open_issues_count, elem.created_at));
      }
        return this.repositories;
    });
      return this.repositories;
  }
  getCurrentDate(): string {
    const date = new Date();
    date.setDate(date.getDate() - 30);
    const day =  String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    return date.getFullYear() + '-' + month + '-' + day;
  }
}
