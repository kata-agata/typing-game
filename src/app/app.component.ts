import { Component } from '@angular/core';
import { lorem } from "faker";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing-game';
  randomSentence = lorem.sentence();
  inputSentence = '';

  onInputChange(value: string){
    this.inputSentence = value;
  }

  compareLetters(randomLetter: string, inputLetter: string){
    if(!inputLetter){ // if inputLetter is undefined
      return '';
    }
    // if(randomLetter === inputLetter){
    //   return "correct"
    // }
    // else {
    //   return "wrong"
    // }
    return randomLetter === inputLetter ? 'correct' : 'wrong';
  }
}
