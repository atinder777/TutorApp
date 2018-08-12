import { Component, ViewChild } from "@angular/core";
import { Nav, Platform } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { MenuProvider } from "../providers/menu/menu";
import { PushProvider } from "../providers/push/push";

@Component({
	templateUrl: "app.html"
})
export class MyApp {
	@ViewChild(Nav)
	nav: Nav;

	rootPage: any = HomePage;
	params: any; //Parametros que serao passados para gerar os dados do menu lateral.
	menuProvider: any = new MenuProvider();
	pages: Array<{ title: string; component: any; icon: string }>;

	constructor(
		public platform: Platform,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen,
		private pushProvider: PushProvider
	) {
		this.initializeApp();
		// used for an example of ngFor and navigation
		this.params = this.menuProvider.getdataSideMenu();
		this.pages = [
			{ title: "Booking", component: HomePage, icon: "icon-home" },
			{ title: "Blog Posts", component: "NewsPage", icon: "icon-newspaper" }
		];
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.pushProvider.enablePush();
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
		});
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}
}
