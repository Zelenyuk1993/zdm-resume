import {AfterViewInit, Component} from "@angular/core";
import { environment } from '../../environments/environment';

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css", "./welcome-component.responsivity.css"],
})

export class WelcomeComponent implements AfterViewInit {

  public imageUrls: string[] = [
    './assets/template/welcome/dmytro-illustration-deff.png',
    './assets/template/welcome/dmytro-illustration-active.png',
  ];
  constructor() {}


  ngAfterViewInit(): void {
    document.addEventListener('DOMContentLoaded', () => {
      const image = document.getElementById('animatedImage') as HTMLImageElement;
        image.classList.add('fade-in');
        image.src = this.imageUrls[1];
    });
  }
  get characterName(): string {
    return environment.personal.name;
  }

}
