import {Component, OnInit} from "@angular/core";
import { environment } from '../../environments/environment';

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css", "./welcome-component.responsivity.css"],
})

export class WelcomeComponent implements OnInit {

  public imageUrls: string[] = [
    './assets/template/welcome/dmytro-illustration-deff.png',
    './assets/template/welcome/dmytro-illustration-active.png',
  ];
  constructor() {}

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      const image = document.getElementById('animatedImage') as HTMLImageElement;
      setTimeout(() => {
        image.classList.add('fade-in');
        image.src = this.imageUrls[1];
      }, 0);
    });
  }
  get characterName(): string {
    return environment.personal.name;
  }

}
