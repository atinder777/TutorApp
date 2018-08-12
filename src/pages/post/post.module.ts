import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicPageModule } from "ionic-angular";
import { PostPage } from "./post";

// Translate Module has to be imported everywhere its used.

@NgModule({
	declarations: [PostPage],
	imports: [IonicPageModule.forChild(PostPage)],
	exports: [PostPage],
	schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class PostPageModule {}
