import { Component, OnInit } from '@angular/core';
import{Article} from '../../Entities/article'
import {ArticleService} from '../../Service/article.service'
@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
Articles:Article[];
article:Article= new Article()

  constructor(private articleService:ArticleService) { }

  ngOnInit(): void {
    this.articleService.getArticles().subscribe((res:any)=>{this.Articles=res})
    console.log(this.Articles)
  }
  delete(id:number){
    this.articleService.deleteArticle(id).subscribe((res)=>{
      console.log(res)})
      this.Articles= this.Articles.filter((ar:any) => {
        return ar.id != id;
      }
      );}

    postArticle() {
     this.articleService.createArticle(this.article).subscribe((res)=>{
      console.log(res)});
        this.article=new Article(); 
        console.log(this.article)
     }

}
