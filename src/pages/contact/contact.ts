import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";

/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-contact",
	templateUrl: "contact.html"
})
export class ContactPage {
	data: any = {};

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.data = {
			location: `2015 Rue Drummond #650, Montréal, QC H3G 1W7, Canada`,
			icon: "checkmark-circle",
			email: "parv@mechtutoring.com",
			map: {
				lat: 45.4998216,
				lng: -73.5762167,
				mapTypeControl: true,
				streetViewControl: true,
				zoom: 15
			},
			phone: "+1(514)574-2161 ",
			title: "Contact Us",
			webSite: "https://mechtutoring.com"
		};
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad ContactPage");
	}
}
