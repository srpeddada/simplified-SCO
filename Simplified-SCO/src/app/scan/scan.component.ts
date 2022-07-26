import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import { Router } from "@angular/router";

 


@Component({
  selector: 'app-scan',
  templateUrl: './scan.component.html',
  styleUrls: ['./scan.component.scss']
})
export class ScanComponent implements OnInit {

   constructor(
    public router: Router,
     public service: ServiceService,
  
  ) {}
  name;
  scan = false;
  scanned = false;
  qrResultString: string;
  qrData;
  scannedCode = null;
  ngOnInit() {
   
  }
  scanCode() {
    console.log("hi");
    this.scan = true;
  }
  onCodeResult(resultString: string) {
    this.qrResultString = resultString;
    console.log(this.qrResultString);

    alert("you are about to add this item to your cart. Product ID:"+this.qrResultString)
     this.router.navigate(["/cart"])
    // this.scan = false;
    // console.log(this.qrResultString);
    // this.CookieService.set("cart", this.qrResultString);
    // this.scanned = true;
    // console.log(this.CookieService.get("phone"));
    // this.registerService
    //   .postcartid(this.qrResultString, this.CookieService.get("phone"))
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
  }
 
  cart() {
    this.router.navigate(["/cart"]);
  }

}
