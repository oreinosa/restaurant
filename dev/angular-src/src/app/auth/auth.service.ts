import { Router } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../shared/models/user";
import { Login } from "../shared/models/login";
import { Register } from "../shared/models/register";
import { JwtHelperService } from "@auth0/angular-jwt";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private api = environment.api + "auth/";
  private userSubject: BehaviorSubject<User>;

  token: string;

  constructor(
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private router: Router
  ) {
    this.checkSession();
  }
  private checkSession() {
    let token: string = null,
      user: User = null;
    if (this.loggedIn()) {
      console.log("user is already logged in");
      token = localStorage.getItem("token");
      user = JSON.parse(localStorage.getItem("user")) as User;
    }
    this.token = token;
    this.userSubject = new BehaviorSubject<User>(user);
  }

  get user(): Observable<User> {
    return this.userSubject.asObservable();
  }

  loggedIn() {
    return !this.jwtHelper.isTokenExpired();
  }

  login(login: Login) {
    return this.http.post(this.api + "login", login);
  }

  register(register: Register) {
    return this.http.post<any>(this.api + "register", register).pipe(
      map(res => {
        if (res.data) {
          return res.data as User;
        }
        return res;
      })
    );
  }

  signOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    this.updateUserData(null, null);
    this.router.navigate([""]);
  }

  updateUserData(user: User, token: string) {
    console.log("Updated user : ", user);
    this.userSubject.next(user);
    this.token = token;
    if (user && token) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    }
  }
}
