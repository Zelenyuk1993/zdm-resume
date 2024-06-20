import {
    Directive, OnInit,
    ElementRef, Input,
} from "@angular/core";
import { Typed } from "./typed";

@Directive({
    selector: "[appTypingAnimation]"
})

export class TypingAnimationDirective implements OnInit {

    @Input() phrasePeriod: number;
    @Input() typeSpeed: number;
    @Input() startDelay: number;
    @Input() data: string[] = [ "My name is Dmytro.", "Be welcome to my Web Resume.", "Down below, you will know me better... :)" ];

    typed: Typed;
    phrases: string[];

    constructor (
        private elRef: ElementRef,
        // @Inject(LOCALE_ID) public locale: string
    ) {}


    ngOnInit () {
       this.phrases = this.data;
        if(this.checkContent()) {
            this.createTyped();
        }
    }

    private checkContent() {
        return this.phrases.length > 0;
    }

    private createTyped () {
       this.typed = new Typed(
            this.elRef.nativeElement,
            {
                typeSpeed: this.typeSpeed,
                startDelay: this.startDelay,
                phrasePeriod: this.phrasePeriod
            },
            this.phrases
        );

        this.typed.begin();
    }
}
