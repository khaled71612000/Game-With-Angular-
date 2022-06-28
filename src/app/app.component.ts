import { Component } from "@angular/core";
import { lorem } from "faker";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  randomText= lorem.sentence();
  enteredText = '';

  onInput(value:string) {
    this.enteredText = value;
  }

  compare(randomLetter: string, enteredLetter: string) {
    // return of this function will be class name of span elemnt
    if (!enteredLetter){
      return 'pending';
    }

    if (enteredLetter === randomLetter) {
      return 'correct';
    }
    else {
      return 'incorrect'
    }

  }

}
