import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appPlaySoundAndVibrate]'
})
export class PlaySoundAndVibrateDirective {
  @Input() appPlaySoundAndVibrate: { sound: string, vibrate: boolean };

  constructor(private el: ElementRef) {}

  @HostListener('click') onClick() {
    // Відтворення звуку
    const audio = new Audio(this.appPlaySoundAndVibrate.sound);
    audio.play();

    // Вібрація, якщо це мобільний пристрій
    if ('vibrate' in navigator && this.appPlaySoundAndVibrate.vibrate) {
      navigator.vibrate(200); // 200 мс вібрації
    }
  }
}
