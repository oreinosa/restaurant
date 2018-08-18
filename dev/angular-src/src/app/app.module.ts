import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";

import { AppRoutingModule } from "./app-routing.module";

import { HttpClientModule } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CoreModule } from "./core/core.module";
import { NotificationsModule } from "./notifications/notifications.module";

import { AuthModule } from "./auth/auth.module";
import { AuthService } from "./auth/auth.service";
import { AdminGuard } from "./auth/admin.guard";
import { AuthGuard } from "./auth/auth.guard";

import { JwtModule } from "@auth0/angular-jwt";
import { MenuModule } from "./menu/menu.module";

export function tokenGetter() {
  return localStorage.getItem("token");
}

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        whitelistedDomains: [
          "localhost:8080",
          "localhost",
          "127.0.0.1",
          "thenewfuturesv.com",
          "www.thenewfuturesv.com",
          "ubuntu"
        ]
      }
    }),
    BrowserAnimationsModule,
    NotificationsModule,
    CoreModule,
    AuthModule,
    MenuModule,
    ShoppingCartModule,
    AppRoutingModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [AuthService, AuthGuard, AdminGuard]
})
export class AppModule {}
