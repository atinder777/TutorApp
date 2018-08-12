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

@NgModule({
	declarations: [MyApp, HomePage],
	imports: [BrowserModule, IonicModule.forRoot(MyApp), HttpClientModule],
	bootstrap: [IonicApp],
	entryComponents: [MyApp, HomePage],
	providers: [
		EmailComposer,
		StatusBar,
		SplashScreen,
		{ provide: ErrorHandler, useClass: IonicErrorHandler },
		MenuProvider,
		ServiceProvider
	]
})
export class AppModule {}
