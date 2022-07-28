import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.page.html',
  styleUrls: ['./trivia.page.scss'],
})
export class TriviaPage implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.trivia()
  }

  trivia(){
    this.http.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple").subscribe((data) => {
      console.log(data);
    })
  }

}