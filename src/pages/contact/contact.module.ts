import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { ContactPage } from "./contact";
import { AgmCoreModule } from "@agm/core";

@NgModule({
	declarations: [ContactPage],
	imports: [
		IonicPageModule.forChild(ContactPage),
		AgmCoreModule.forRoot({ apiKey: "AIzaSyA4-GoZzOqYTvxMe52YQZch5JaCFN6ACLg" })
	],
	exports: [ContactPage],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ContactPageModule {}
