import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-welcome",
  templateUrl: "./welcome.component.html",
  styleUrls: ["./welcome.component.scss"]
})
export class WelcomeComponent implements OnInit {
  features = [
    {
      title: "Hechos en casa",
      image: "home",
      description:
        "Todos nuestros platillos son cocinados con mucho amor, manteniendo estándares de calidad y seguridad."
    },
    {
      title: "Entregados en tu lugar de trabajo",
      image: "directions_car",
      description:
        "Los platillos son entregados en lugares de trabajo a los que proveemos nuestros servicios por lo que puedes organizarte con tus compañeros de trabajo y ordenar en grupo"
    },
    {
      title: "Precios accesibles",
      image: "attach_money",
      description:
        "Todos los menús incluyen un postre y ofrecemos bebidas con un pequeño costo adicional, el precio de nuestros menú ronda los $2.50 y no hay ningún precio adicional por la entrega."
    }
  ];
  constructor() {}

  ngOnInit() {}
}
