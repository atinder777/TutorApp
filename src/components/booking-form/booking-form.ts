import { Component } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "../../../node_modules/@angular/forms";
import { NavController, NavParams } from "../../../node_modules/ionic-angular";
import { EmailComposer } from "../../../node_modules/@ionic-native/email-composer";

/**
 * Generated class for the BookingFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
	selector: "booking-form",
	templateUrl: "booking-form.html"
})
export class BookingFormComponent {
	image: any;
	myForm: FormGroup;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private email: EmailComposer,
		private fb: FormBuilder
	) {
		this.myForm = this.fb.group({
			name: [null, Validators.compose([Validators.required])],
			phone: [null, Validators.compose([Validators.required])]
			// message: [null, Validators.compose([Validators.required])]
		});
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad FormPicturePage");
	}

	sendEmail(val) {
		console.log(val);
		let email = {
			app: "gmail",
			to: "contact@tutor.com",
			subject: "Tutor App Course",
			body: `Name: ${val.name}<br> Phone: ${val.phone}`,
			isHtml: true
		};
		this.email.open(email);
	}
}
