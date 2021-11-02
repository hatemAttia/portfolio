import { Component, OnInit } from '@angular/core';
import { FacebookService, InitParams } from 'ngx-facebook';
import { LoaderService } from '../shared/services/loader.service';
declare var require: any
const FileSaver = require('file-saver');
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(public loaderServ:LoaderService,private facebookService: FacebookService) { }

  
  ngOnInit() {
     setTimeout(() => {
       this.initFacebookService();
     }, 3000);
  }
   private initFacebookService(): void {
     console.log("hoooo");
    
    const initParams: InitParams = { xfbml: true, version: "v3.2" };
    this.facebookService.init(initParams);
   }

   downloadPdf() {
    const pdfUrl = './assets/cv-hatem.pdf';
    const pdfName = 'cv-hatem.pdf';
    FileSaver.saveAs(pdfUrl, pdfName);
  }
}

