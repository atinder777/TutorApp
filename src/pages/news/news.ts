import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams, LoadingController, Nav } from "ionic-angular";
import { ServiceProvider } from "../../providers/service/service";

/**
 * Generated class for the NewsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: "page-news",
	templateUrl: "news.html"
})
export class NewsPage {
	news: any = [];
	morePagesAvailable: boolean = true;

	constructor(
		public navCtrl: Nav,
		public navParams: NavParams,
		private serviceProvider: ServiceProvider,
		private loadingController: LoadingController
	) {
		let loader = this.loadingController.create({ content: "Carregando...", duration: 10000 });
		loader.present();
		let that = this;
		this.serviceProvider.getNews(4, 0).subscribe(
			res => {
				loader.dismiss();
				let tmpArray: any = [];
				tmpArray = res;
				tmpArray.forEach((val, i) => {
					val.backgroundImage = "assets/imgs/class_holder.jpg";
					setTimeout(function() {
						that.news.push(val);
						// val.backgroundImage = val.better_featured_image.source_url;
						that.news[i].animateClass = { "fade-in-left-item": true };
					}, 200 * i);
					console.log(val);
				});
			},
			err => {
				loader.dismiss();
			}
		);
	}

	refresh(refresh) {
		this.morePagesAvailable = true;
		this.news = [];
		let loader = this.loadingController.create({ content: "Carregando...", duration: 10000 });
		loader.present();
		let that = this;
		this.serviceProvider.getNews(4, 0).subscribe(
			res => {
				refresh.complete();
				console.log(res);
				loader.dismiss();
				let tmpArray: any = [];
				tmpArray = res;
				tmpArray.forEach((val, i) => {
					setTimeout(function() {
						that.news.push(val);
						// val.backgroundImage = val.better_featured_image.source_url;
						val.backgroundImage = "assets/imgs/class_holder.jpg";
						that.news[i].animateClass = { "fade-in-left-item": true };
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
			let offset = this.news.length;
			console.log(offset);

			// 2 = categoria
			this.serviceProvider.getNews(2, offset).subscribe(
				res => {
					console.log(res);

					let tmpArray: any = [];
					tmpArray = res;
					console.log(tmpArray);

					tmpArray.forEach((val, i) => {
						console.log(i, val);

						that.news.push(val);
						val.backgroundImage = "assets/imgs/class_holder.jpg";
						// val.backgroundImage = val.better_featured_image.source_url;
						that.news[i].animateClass = { "fade-in-left-item": true };
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

	openPost(post) {
		this.navCtrl.push("PostPage", {
			post: post
		});
	}

	ionViewDidLoad() {
		console.log("ionViewDidLoad NewsPage");
	}

	toggleGroup(post: any) {
		post.show = !post.show;
	}

	isGroupShown(post: any) {
		return post.show;
	}
}
