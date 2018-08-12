import { Component } from "@angular/core";
import { NavController, LoadingController } from "ionic-angular";
import { ServiceProvider } from "../../providers/service/service";

@Component({
	selector: "page-home",
	templateUrl: "home.html"
})
export class HomePage {
	bookings: any = [];
	category: any = "16";
	morePagesAvailable: boolean = true;

	constructor(
		public navCtrl: NavController,
		private serviceProvider: ServiceProvider,
		private loadingController: LoadingController
	) {
		this.openPosts();
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
					// val.backgroundImage = val.better_featured_image.source_url;
					val.backgroundImage = "https://images7.alphacoders.com/856/856246.png";
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
						val.backgroundImage = "https://images7.alphacoders.com/856/856246.png";
						// val.backgroundImage = val.better_featured_image.source_url;
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

						that.bookings.push(val);
						val.backgroundImage = val.better_featured_image.source_url;
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
		console.log(event);

		console.log(this.category);

		this.openPosts();
	}
}
