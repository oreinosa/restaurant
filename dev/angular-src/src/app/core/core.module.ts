import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { NavComponent } from "./nav/nav.component";
import { MatToolbarModule, MatSidenavModule } from "@angular/material";
import { RouterModule } from "@angular/router";
import { AvatarComponent } from "./nav/avatar/avatar.component";
import { FooterComponent } from "./nav/footer/footer.component";
import { CoreRoutingModule } from "./core-routing.module";
import { NotFoundComponent } from "./not-found/not-found.component";
import { FaqComponent } from "./faq/faq.component";
import { AboutComponent } from "./about/about.component";
import { ToolbarComponent } from "./nav/toolbar/toolbar.component";
import { SidenavContentComponent } from "./nav/sidenav-content/sidenav-content.component";
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    MatToolbarModule,
    MatSidenavModule,
    CoreRoutingModule
  ],
  exports: [NavComponent],
  declarations: [
    NavComponent,
    AvatarComponent,
    FooterComponent,
    NotFoundComponent,
    FaqComponent,
    AboutComponent,
    ToolbarComponent,
    SidenavContentComponent,
    WelcomeComponent
  ]
})
export class CoreModule {}
