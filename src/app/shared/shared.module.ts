import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { ItemdecorateDirective } from "./itemdecorate.directive";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        DropdownDirective,
        ItemdecorateDirective
    ],
    exports: [
        CommonModule,
        DropdownDirective, ItemdecorateDirective
    ]
})
export class SharedModule {

}