import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { registerLocaleData } from "@angular/common";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ResumeModule } from "./resume/resume.module";
import { PageNotFoundRoutingModule } from "./404/page-not-found-routing.module";
import { PageNotFoundModule } from "./404/page-not-found.module";
import { CoreModule } from "./core/core.module";
import { Injectable, isDevMode } from "@angular/core";

import localeEn from "@angular/common/locales/en";
import localePt from "@angular/common/locales/pt";
import localePtExtra from "@angular/common/locales/extra/pt";

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from "@angular/fire/compat/database";
import { AngularFireAnalyticsModule } from "@angular/fire/compat/analytics";
import { environment } from "../environments/environment";

import { HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from "@angular/platform-browser";
import { DIRECTION_ALL } from "hammerjs";
import { ServiceWorkerModule } from '@angular/service-worker';

@Injectable()
export class HammerConfig  extends HammerGestureConfig {
    overrides = <any> {
        swipe: { direction: DIRECTION_ALL },
    };
}

registerLocaleData(localeEn, "en");
registerLocaleData(localePt, "pt-BR", localePtExtra);
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    ResumeModule,
    PageNotFoundModule,
    PageNotFoundRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAnalyticsModule,
    HammerModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig,
    },
  ]
})

export class AppModule {}
