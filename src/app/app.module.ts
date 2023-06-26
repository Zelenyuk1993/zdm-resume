import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {MainComponent} from "./components/main/main.component";
import {FormsModule} from "@angular/forms";
import { ServiceWorkerModule } from '@angular/service-worker';
import {Web3ConnectModule} from "@b-ee/web3-connect";
import {ConnectBtnModule} from "./components/connect-btn/connect-btn.module";
import {AppService} from "./app.service";
import {DonateModule} from "./components/donate/donate.module";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    Web3ConnectModule,
    ConnectBtnModule,
    DonateModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
