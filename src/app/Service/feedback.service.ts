import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Article } from '../Entities/article';
import { Feedback } from '../Entities/feedback';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  url : string = 'http://localhost:8084/feedback-service/api/';

  constructor(private http:HttpClient) { }
  public getFeedbacks()
  {
    return this.http.get(this.url+"feedbacks")

  }

public deleteFeedback(id:number){
  return this.http.delete(this.url+"feedback/"+id)
}
public createFeedback(feedback:Feedback){
  return this.http.post(this.url+"feedback",Feedback)
}

  
}
