import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import{Feedback} from '../../Entities/feedback'
import {FeedbackService} from '../../Service/feedback.service'

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  matcher = new MyErrorStateMatcher();

  Feedback:Feedback[];
  feedback:Feedback= new Feedback()
  
    constructor(private feedbackservice:FeedbackService) { }
  
    ngOnInit(): void {
      this.feedbackservice.getFeedbacks().subscribe((res:any)=>{this.Feedback=res})
      console.log(this.Feedback)
    }

    
    postFeedback() {
      // this.feedbackservice.createFeedback(this.feedback).subscribe((res)=>{
      //  console.log(res)});
      //    this.feedback=new Feedback(); 
      //    console.log(this.feedback)
      // }
      alert("feedback added");
    }
}
