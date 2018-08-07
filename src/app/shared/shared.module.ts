import { NgModule } from "@angular/core";
import { DropdownDirective } from "./dropdown.directive";
import { ItemdecorateDirective } from "./itemdecorate.directive";
import { CommonModule } from "@angular/common";
import { MatIconModule, MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatTableModule, MatPaginatorModule, MatInputModule, MatSelectModule, MatMenuModule } from "@angular/material";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        DropdownDirective,
        ItemdecorateDirective
    ],
    exports: [
        CommonModule,
        FormsModule,
        DropdownDirective, ItemdecorateDirective,
        MatIconModule,
        InfiniteScrollModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatTableModule,
        MatPaginatorModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
    ]
})
export class SharedModule {

}