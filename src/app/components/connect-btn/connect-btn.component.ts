import {Component, Input, OnInit} from '@angular/core';
import {WalletState} from "@b-ee/web3-connect";
import {AppService} from "../../app.service";
import {Destroyable} from "../../utils/destroyable.base";
import {Observable, share, takeUntil} from "rxjs";

@Component({
  selector: 'app-connect-btn',
  templateUrl: './connect-btn.component.html',
  styleUrls: ['./connect-btn.component.scss']
})
export class ConnectBtnComponent extends Destroyable implements OnInit {

  // @ts-ignore
  public wallets$: Observable<any> = this.appService.web3Connect.state.select('wallets').pipe(share());
  public wallets: WalletState[] = [];
  @Input() btnText: string = "Connect Wallet";

  constructor(public appService: AppService) {
    super();
  }
  ngOnInit(): void {
    this.wallets$.pipe(takeUntil(this.unsubscribe$)).subscribe(wallets => {
      this.wallets = wallets;
    })
  }

  async connect(): Promise<void> {
    await this.appService.web3Connect.connectWallet();
  }
}
