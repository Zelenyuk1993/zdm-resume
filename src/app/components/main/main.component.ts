import {ChangeDetectionStrategy, Component, ElementRef, ViewChild} from '@angular/core';
import {Meta, Title} from "@angular/platform-browser";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainComponent {
  @ViewChild('video') public video!: ElementRef;
  public themeVideoUrl: string = 'assets/video-bg/bg-video-1.mp4';
  public themeImageUrl: string = 'assets/image-bg/bg-image-1.jpeg';

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {name:'description', content:'Dmytro Zeleniuk | Senior Software Developer'},
      {name:'author', content:'Dmytro Zeleniuk'},
      {name:'keywords', content:'Senior Software Developer, B-EE.io, Angular, JavaScript, FrontEnd, Developer, RxJS, Senior, Ionic'}
    ]);
    this.title.setTitle('Dmytro Zeleniuk | Senior Software Developer');
  }

  public changeTheme(index: number): void {
    this.themeVideoUrl = `assets/video-bg/bg-video-${index}.mp4`;
    this.themeImageUrl = `assets/image-bg/bg-image-${index}.jpeg`;
    this.video.nativeElement.src = this.themeVideoUrl;
    this.video.nativeElement.load();
    this.video.nativeElement.play();
  }
}
