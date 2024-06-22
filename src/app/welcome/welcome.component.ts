import {AfterViewInit, Component} from "@angular/core";
import { environment } from '../../environments/environment';

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css", "./welcome-component.responsivity.css"],
})

export class WelcomeComponent implements AfterViewInit{

  constructor() {}

  ngAfterViewInit() {
    const audio = new Audio('assets/sounds/illustration.mp3');
    audio.play();
  }

  get characterName(): string {
    return environment.personal.name;
  }

}
