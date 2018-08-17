import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, Events, Nav } from "ionic-angular";
import { ServiceProvider } from "../../providers/service/service";
import { IMAGE_PLACEHOLDER } from "../../conts/main";

/**
 * Generated class for the CoursesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-courses",
	templateUrl: "courses.html"
})
export class CoursesPage {
	bookings: any = [];
	category: any = "16";
	morePagesAvailable: boolean = true;

	constructor(
		public navCtrl: Nav,
		private serviceProvider: ServiceProvider,
		private loadingController: LoadingController,
		private event: Events
	) {
		this.openPosts();
		this.event.subscribe("push:handle", post => {
			console.log(post);

			this.navCtrl.push("PostPage", { post: post });
		});
	}

	private openPosts() {
		let loader = this.loadingController.create({ content: "Loading...", duration: 15000 });
		loader.present();
		let that = this;
		this.bookings = [];
		this.serviceProvider.getPostByCategory(8, 0, this.category).subscribe(res => {
			loader.dismiss();
			let tmpArray: any = [];
			tmpArray = res;
			tmpArray.forEach((val, i) => {
				setTimeout(function() {
					that.bookings.push(val);
					if (val.better_featured_image != null) {
						val.backgroundImage = val.better_featured_image.source_url;
					} else {
						val.backgroundImage = IMAGE_PLACEHOLDER;
					}
					that.bookings[i].animateClass = { "fade-in-left-item": true };
				}, 200 * i);
			});
		});
	}

	refresh(refresh) {
		this.morePagesAvailable = true;
		this.bookings = [];
		let loader = this.loadingController.create({ content: "Loading...", duration: 10000 });
		loader.present();
		let that = this;
		this.serviceProvider.getPostByCategory(8, 0, this.category).subscribe(
			res => {
				refresh.complete();
				console.log(res);
				loader.dismiss();
				let tmpArray: any = [];
				tmpArray = res;
				tmpArray.forEach((val, i) => {
					setTimeout(function() {
						that.bookings.push(val);
						if (val.better_featured_image != null) {
							val.backgroundImage = val.better_featured_image.source_url;
						} else {
							val.backgroundImage = IMAGE_PLACEHOLDER;
						}
						that.bookings[i].animateClass = { "fade-in-left-item": true };
					}, 200 * i);
				});
			},
			err => {
				refresh.complete();
			}
		);
	}

	doInfinite(infiniteScroll) {
		console.log(infiniteScroll.state);

		if (infiniteScroll.state === "loading") {
			let that = this;
			let offset = this.bookings.length;
			console.log(offset);

			// 2 = categoria
			this.serviceProvider.getPostByCategory(2, offset, this.category).subscribe(
				res => {
					console.log(res);

					let tmpArray: any = [];
					tmpArray = res;
					console.log(tmpArray);

					tmpArray.forEach((val, i) => {
						console.log(i, val);

						if (val.better_featured_image != null) {
							val.backgroundImage = val.better_featured_image.source_url;
						} else {
							val.backgroundImage = IMAGE_PLACEHOLDER;
						}
						that.bookings.push(val);
						that.bookings[i].animateClass = { "fade-in-left-item": true };
					});
					infiniteScroll.complete();
				},
				err => {
					console.log(err);

					infiniteScroll.complete();
					this.morePagesAvailable = false;
				}
			);
		}
	}

	openDetails(data) {
		this.navCtrl.push("BookingPage", { data: data });
	}

	changeSegment(event) {
		this.openPosts();
	}
}
