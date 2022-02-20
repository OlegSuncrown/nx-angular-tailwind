import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { QuizSection } from '@nx/shared/types/api-quiz';

@Injectable({
  providedIn: 'root',
})
export class ApiQuizDataService {
  URL = 'https://levi9-song-quiz.herokuapp.com/api/data';

  constructor(private http: HttpClient) {}

  getQuizData() {
    return this.http.get<QuizSection[]>(this.URL);
  }
}
