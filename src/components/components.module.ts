import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { BookingFormComponent } from "./booking-form/booking-form";
import { IonicPageModule } from "../../node_modules/ionic-angular";
@NgModule({
	declarations: [BookingFormComponent],
	imports: [IonicPageModule.forChild(BookingFormComponent)],
	exports: [BookingFormComponent],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule {}
