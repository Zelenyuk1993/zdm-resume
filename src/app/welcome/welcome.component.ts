import {Component} from "@angular/core";
import { environment } from '../../environments/environment';

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css", "./welcome-component.responsivity.css"],
})

export class WelcomeComponent{

  // public illustration:string = './assets/template/welcome/dmytro-illustration-crop.gif';
  public illustration:string = './assets/template/welcome/dmytro-illustration-active.png';
  public sound:string = 'assets/sounds/illustration.mp3';

  constructor() {}

  public playIllustration(): void {
    const btnElement = document.getElementById('play-illustration');
    const illustrationElement = document.getElementById('illustration');
    this.illustration = './assets/template/welcome/dmytro-illustration-crop.gif';
    const audio = new Audio(this.sound);
    audio.play();
    btnElement.classList.add('hide-play-btn');

    audio.addEventListener('ended', () => {
      illustrationElement.classList.add('image-fade-out');
      setTimeout(() => {
        this.illustration = './assets/template/welcome/dmytro-illustration-active.png';
        illustrationElement.classList.remove('image-fade-out');
        btnElement.classList.remove('hide-play-btn');
      }, 100);

    });
  }

  get characterName(): string {
    return environment.personal.name;
  }

}
