import { Component } from "@angular/core";

@Component({
	selector: "page-home",
	templateUrl: "home.html"
})
export class HomePage {
	tab1Root = "NewsPage";
	tab2Root = "CoursesPage";
	tab3Root = "ContactPage";

	constructor() {}
}
