import { Injectable } from "@angular/core";

/*
  Generated class for the MenuProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MenuProvider {
	constructor() {
		console.log("Hello MenuProvider Provider");
	}

	getdataSideMenu() {
		return {
			// background: "assets/images/training_for_farmers.jpg",
			background: "assets/imgs/class_holder.jpg",
			image: "assets/icon/icon.png",
			title: "Tutor App",
			description: "Here you can find knowledge"
		};
	}
}
