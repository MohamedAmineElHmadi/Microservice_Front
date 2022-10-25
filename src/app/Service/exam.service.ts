import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Exam } from '../Entities/exam';

@Injectable({
  providedIn: 'root'
})
export class ExamService {

  url : string = 'http://localhost:8762/exam-microservice/Exams/';

  constructor(private http:HttpClient) { }
  public getExams()
  {
    return this.http.get(this.url+"list")

  }

public deleteExam(id:number){
  return this.http.delete(this.url+"delete/"+id)
}
public createExam(exam:Exam){
  return this.http.post(this.url+"save",exam)
}
}
