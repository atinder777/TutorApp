import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { BookingFormComponent } from "../../components/booking-form/booking-form";

/**
 * Generated class for the BookingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-booking",
	templateUrl: "booking.html"
})
export class BookingPage {
	data: any;
	type: any = "1";
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.data = this.navParams.get("data");
		console.log(this.data);
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad BookingPage");
	}

	goForm() {
		this.navCtrl.push("FormPage");
	}

	changeSegment(event) {}
}
