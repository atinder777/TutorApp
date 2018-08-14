import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";

import { StatusBar } from "@ionic-native/status-bar";
import { SplashScreen } from "@ionic-native/splash-screen";
import { MenuProvider } from "../providers/menu/menu";
import { ServiceProvider } from "../providers/service/service";
import { HttpClientModule } from "@angular/common/http";
import { EmailComposer } from "@ionic-native/email-composer";
import { PushProvider } from "../providers/push/push";
import { OneSignal } from "@ionic-native/onesignal";
import { AngularFireModule } from "angularfire2";
import { AngularFireDatabaseModule, AngularFireDatabase } from "angularfire2/database";
import { FIREBASE_CONFIG } from "../conts/main";

@NgModule({
	declarations: [MyApp, HomePage],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		HttpClientModule,
		AngularFireModule.initializeApp(FIREBASE_CONFIG),
		AngularFireDatabaseModule
	],
	bootstrap: [IonicApp],
	entryComponents: [MyApp, HomePage],
	providers: [
		AngularFireDatabase,
		OneSignal,
		EmailComposer,
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		MenuProvider,
		ServiceProvider,
		PushProvider
	]
})
export class AppModule {}
