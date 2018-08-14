import { NgModule } from "@angular/core";
import { IonicPageModule, IonicModule } from "ionic-angular";
import { BookingPage } from "./booking";
import { ComponentsModule } from "../../components/components.module";

@NgModule({
	declarations: [BookingPage],
	imports: [IonicPageModule.forChild(BookingPage), IonicModule, ComponentsModule],
	exports: [BookingPage]
})
export class BookingPageModule {}
