import { Component, ViewChild } from "@angular/core";
import { Nav, Platform, MenuController } from "ionic-angular";
import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";

import { HomePage } from "../pages/home/home";
import { MenuProvider } from "../providers/menu/menu";
import { PushProvider } from "../providers/push/push";
import { NativeStorage } from "../../node_modules/@ionic-native/native-storage";
// import { PushProvider } from "../providers/push/push";

@Component({
	templateUrl: "app.html"
})
export class MyApp {
	@ViewChild(Nav)
	nav: Nav;
	data: any = {};

	rootPage: any = HomePage;
	params: any; //Parametros que serao passados para gerar os dados do menu lateral.
	menuProvider: any = new MenuProvider();
	pages: Array<{ title: string; component: any; icon: string }>;

	constructor(
		public platform: Platform,
		public statusBar: StatusBar,
		public splashScreen: SplashScreen, // private pushProvider: PushProvider
		private pushProvider: PushProvider,
		public menu: MenuController,
		private storage: NativeStorage
	) {
		this.initializeApp();
		// used for an example of ngFor and navigation
		this.params = this.menuProvider.getdataSideMenu();
		this.pages = [{ title: "Home", component: HomePage, icon: "icon-home" }];
	}

	onEvent(item) {
		item.isChecked = !item.isChecked;
		console.log(item);
		console.log("push type");
		if (item.isChecked) {
			this.pushProvider.enablePush();
		} else {
			this.pushProvider.disablePush();
		}
		this.storage.setItem("push", item);
	}

	initializeApp() {
		this.platform.ready().then(() => {
			this.storage.getItem("push").then(
				res => {
					if (res.isChecked) {
						this.pushProvider.enablePush();
					} else {
						this.pushProvider.disablePush();
					}
					this.data = res;
				},
				err => {
					if ((err.code = 2)) {
						let item = {
							id: 1,
							type: "push",
							isChecked: true
						};
						this.storage.setItem("push", item);
						this.data = item;
						// this.pushProvider.enablePush();
					}
				}
			);

			// this.pushProvider.enablePush();
			// Okay, so the platform is ready and our plugins are available.
			// Here you can do any higher level native things you might need.
			this.statusBar.styleDefault();
			this.splashScreen.hide();
			this.configForBack();
		});
	}

	configForBack() {
		this.platform.registerBackButtonAction(() => {
			if (this.menu.isOpen()) {
				this.menu.close();
			} else if (this.nav.canGoBack()) {
				this.nav.pop();
			} else {
				//don't do anything
			}
		});
	}

	close() {
		this.platform.exitApp();
	}

	openPage(page) {
		// Reset the content nav to have just this page
		// we wouldn't want the back button to show in this scenario
		this.nav.setRoot(page.component);
	}
}
