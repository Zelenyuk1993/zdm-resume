/**
 * TIPS：Donate for Dmytro Zeleniuk
 */
import {ChangeDetectorRef, Component, Input, OnInit} from '@angular/core';
import {CustomNotification, WalletState} from "@b-ee/web3-connect";
import {AppService} from "../../app.service";
import {ethers} from "ethers";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";
import {Observable, share} from "rxjs";
import {Destroyable} from "../../utils/destroyable.base";
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'add-donate-btn',
  templateUrl: './donate.component.html',
  styleUrls: ['donate.component.scss']
})
export class DonateComponent extends Destroyable implements OnInit {

  @Input() btnText: string = "Donate in Crypto for study";

  // @ts-ignore
  public wallets$: Observable<any> = this.appService.web3Connect.state.select('wallets').pipe(share());
  public wallets: WalletState[] = [];
  public selectedWallet!: WalletState | null;
  public transactionForm!: UntypedFormGroup;

  constructor(public appService: AppService,  private fb: UntypedFormBuilder, private cdr: ChangeDetectorRef) {
    super();
  }

  async ngOnInit(): Promise<void> {
    const walletForDonate = '0xcc53695E09295599Bb6eede6690d0974CD7C35d5';
    this.transactionForm = this.fb.group({
      network: [null, [Validators.required]],
      address: [walletForDonate, [Validators.required]]
    });
    this.wallets$.pipe(takeUntil(this.unsubscribe$)).subscribe(wallets => {
      this.wallets = wallets;
      this.selectedWallet =  this.wallets.length ? this.wallets[0] : null;
      if(this.selectedWallet) {
        this.transactionForm.patchValue({
          network: this.selectedWallet.chains[0].id,
        });
        this.cdr.detectChanges();
      }
    })
  }


  public sendTransaction = async () => {
    if (!this.selectedWallet){
      await this.appService.web3Connect.connectWallet();
    }

    if (this.selectedWallet && this.transactionForm.valid) {
      // const balanceValue = Object.values(balance)[0]
      // if using ethers v6 this is:
      // ethersProvider = new ethers.BrowserProvider(wallet.provider, 'any')
      const ethersProvider = new ethers.providers.Web3Provider(this.selectedWallet.provider, 'any')
      const signer = ethersProvider.getSigner()
      const txDetails = {
        to:  this.transactionForm.value.address,
        value: 1000000000000000
      }
      const sendTransaction = () => {
        return signer.sendTransaction(txDetails).then(tx => tx.hash)
      }
      const gasPrice = () => ethersProvider.getGasPrice().then(res => res.toString());
      const estimateGas = () => {return ethersProvider.estimateGas(txDetails).then(res => res.toString())}

      const transactionHash = await this.appService.web3Connect.state.actions.preflightNotifications({
        sendTransaction,
        gasPrice,
        estimateGas,
        balance: '0.1',
        txDetails: txDetails
      })
      if(transactionHash){
        let linkUrl;
        if(this.selectedWallet.chains[0].id === '0x38') {
          linkUrl = `https://bscscan.com/tx/${transactionHash}`
        }if(this.selectedWallet.chains[0].id === '0x1') {
          linkUrl = `https://etherscan.io/tx/${transactionHash}`
        }if(this.selectedWallet.chains[0].id === '0x5') {
          linkUrl = `https://goerli.etherscan.io/tx/${transactionHash}`
        }

        const customNotification: CustomNotification = {
          message: `This is a custom DApp success notification hover to see link`,
          autoDismiss: 0,
          type: 'success',
          link: linkUrl,
        }
        this.appService.web3Connect.state.actions.customNotification(customNotification);
      }
    } else {
      Object.values(this.transactionForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }

}
