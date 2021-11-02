import { Component, OnInit } from "@angular/core";
import { FacebookService, InitParams } from "ngx-facebook";
import { LoaderService } from "./shared/services/loader.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent  {
  title = "portfolio-hatem";

  // constructor(private facebookService: FacebookService) {}
  // ngOnInit() {
  //   setTimeout(() => {
  //     this.initFacebookService();
  //   }, 3000);
  // }
  // private initFacebookService(): void {
  //   console.log("hoooo");
    
  //   const initParams: InitParams = { xfbml: true, version: "v3.2" };
  //   this.facebookService.init(initParams);
  // }
}
