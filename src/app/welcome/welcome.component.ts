import { Component } from "@angular/core";
import { environment } from '../../environments/environment';

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css", "./welcome-component.responsivity.css"],
})

export class WelcomeComponent {

  public imageUrls: string[] = [
    './assets/template/welcome/dmytro-illustration-deff.png',
    './assets/template/welcome/dmytro-illustration-active.png',
  ];

  public currentImageUrl: string = this.imageUrls[0];
  constructor() {}

  changeImage(imageUrl: string): void {
    this.currentImageUrl = imageUrl;
  }
  get characterName(): string {
    return environment.personal.name;
  }

}
