import { Component } from "@angular/core";
import { NavController, LoadingController, Events } from "ionic-angular";
import { ServiceProvider } from "../../providers/service/service";

@Component({
	selector: "page-home",
	templateUrl: "home.html"
})
export class HomePage {
	tab1Root = "NewsPage";
	tab2Root = "CoursesPage";

	constructor() {}
}
