import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.page.html',
  styleUrls: ['./trivia.page.scss'],
})
export class TriviaPage implements OnInit {

  public question: any;

  constructor(private http: HttpClient, public api: ApiService) { }

  ngOnInit() {
    this.trivia()
  }

  trivia(){
    this.api.apiConnect().subscribe(result=>{
      this.question=result['results'];
    })
  }

}