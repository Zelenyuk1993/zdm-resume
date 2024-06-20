import { Component, OnInit } from "@angular/core";
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {

  title: string = "Dmytro Zeleniuk | Senior Software Developer";

  constructor(
    private titleService: Title,
    private metaTagService: Meta
  ) { }

  ngOnInit(): void {

    this.titleService.setTitle(this.title);

    this.metaTagService.addTags([
      {name:'keywords', content:'Senior Software Developer, B-EE.io, Angular, JavaScript, FrontEnd, Developer, RxJS, Senior, Ionic'},
      { name: "robots", content: "index, follow" },
      {name:'author', content:'Dmytro Zeleniuk'},

      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "date", content: "2024-06-19", scheme: "YYYY-MM-DD" },
      { charset: "UTF-8" }
    ]);

    this.metaTagService.updateTag(
      {name:'description', content:'Dmytro Zeleniuk | Senior Software Developer'},
    );
  }
}
