import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../Entities/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  url : string = 'http://localhost:8762/article-service/api/';

  constructor(private http:HttpClient) { }
  public getArticles()
  {
    return this.http.get(this.url+"articles")

  }

public deleteArticle(id:number){
  return this.http.delete(this.url+"article/"+id)
}
public createArticle(article:Article){
  return this.http.post(this.url+"Article",article)
}
}
