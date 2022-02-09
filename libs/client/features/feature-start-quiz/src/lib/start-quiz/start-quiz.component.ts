import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'nx-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss']
})
export class StartQuizComponent {
  nameControl: FormControl = new FormControl('')
}
// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'nx-start-quiz',
//   templateUrl: './start-quiz.component.html',
//   styleUrls: ['./start-quiz.component.css']
// })
// export class StartQuizComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }
