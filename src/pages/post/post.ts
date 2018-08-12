import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { ServiceProvider } from "../../providers/service/service";

/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-post",
	templateUrl: "post.html"
})
export class PostPage {
	post: any; //Post that will be shown in the post.
	category: any; //Category that will be shown in the post page.
	headerImage: string; //Image that will be shown in the post page.

	constructor(public navCtrl: NavController, public navParams: NavParams, private serviceProvider: ServiceProvider) {
		this.post = this.navParams.get("post"); //Gets the post by parameter.
	}

	ionViewWillEnter() {
		if (this.post.categories != null) {
			this.serviceProvider.getCategory(this.post.categories[0]).subscribe(res => {
				//Gets the category from the first item
				this.category = res;
			});
		}

		if (this.post.better_featured_image === null) {
			this.post.backgroundImage = "https://images7.alphacoders.com/856/856246.png";
		} else {
			this.post.backgroundImage = this.post.better_featured_image.source_url;
		}

		console.log("ionViewDidLoad PostPage");
	}
}
