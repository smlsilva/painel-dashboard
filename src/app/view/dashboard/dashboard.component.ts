import { Component } from "@angular/core";
import { NavbarComponent } from "../../components/dashboard/navbar/navbar.component";

@Component({
    selector: "app-view-dashboard",
    standalone: true,
    imports: [NavbarComponent],
    templateUrl: "./dashboard.component.html",
    styles: ""
})
export class Dashboard {

}
