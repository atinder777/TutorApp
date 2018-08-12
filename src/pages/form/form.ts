import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Validators, FormBuilder, FormGroup } from "../../../node_modules/@angular/forms";
import { EmailComposer } from "../../../node_modules/@ionic-native/email-composer";

/**
 * Generated class for the FormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-form",
	templateUrl: "form.html"
})
export class FormPage {
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
