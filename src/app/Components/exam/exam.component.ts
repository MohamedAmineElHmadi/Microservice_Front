import { Component, OnInit } from '@angular/core';
import {Exam}from '../../Entities/exam'
import{ExamService}from '../../Service/exam.service'
@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {
exams:Exam[]
exam:Exam=new Exam();
  constructor(private examService:ExamService) { }

  ngOnInit(): void {
  this.examService.getExams().subscribe((res:any)=>{this.exams=res})
  console.log(this.exams)  }
  delete(id:number){
    this.examService.deleteExam(id).subscribe((res)=>{
      console.log(res)})
      this.exams= this.exams.filter((ar:any) => {
        return ar.id != id;
      }
      );}

    postExam() {
     this.examService.createExam(this.exam).subscribe((res)=>{
      console.log(res)});
        this.exam=new Exam(); 
        console.log(this.exam)
     }


}
