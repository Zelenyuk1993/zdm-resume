import {AfterViewInit, Component} from "@angular/core";
import { environment } from '../../environments/environment';

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.css", "./welcome-component.responsivity.css"],
})

export class WelcomeComponent implements AfterViewInit{

  public illustration:string = './assets/template/welcome/dmytro-illustration-crop.gif';
  public sound:string = 'assets/sounds/illustration.mp3';

  constructor() {}

  ngAfterViewInit() {
    const imgElement = document.getElementById('illustration');
    const audio = new Audio(this.sound);
    audio.play();
    audio.addEventListener('ended', () => {
      imgElement.classList.add('image-fade-out');
      setTimeout(() => {
        this.illustration = './assets/template/welcome/dmytro-illustration-active.png';
        imgElement.classList.remove('image-fade-out');
      }, 2000);

    });
  }

  get characterName(): string {
    return environment.personal.name;
  }

}
