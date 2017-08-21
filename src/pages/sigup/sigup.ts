import { Component } from "@angular/core";
import { IonicPage, NavController } from "ionic-angular";
import { TabsPage } from "../tabs/tabs";
import { LoginPage } from "./../login/login";
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

/**
 * Generated class for the SigupPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-sigup",
  templateUrl: "sigup.html"
})
export class SigupPage {
  responseData: any;
  userData = { username: "", password: "", email: "", name: "" };
  constructor(
    public navCtrl: NavController,
    public authServiceProvider: AuthServiceProvider
  ) {}

  ionViewDidLoad() {
    console.log("ionViewDidLoad SigupPage");
  }

  signup() {
    // Api de coneção
    this.authServiceProvider.postData(this.userData, "signup").then(result => {
      this.responseData = result;
      console.log(this.responseData);
      localStorage.setItem('userData', JSON.stringify(this.responseData));
      this.navCtrl.push(TabsPage);
    }, (err) => {
      // Menssagem de erro de coneção
    });
  }

  login() {
    this.navCtrl.push(LoginPage);
  }
}
