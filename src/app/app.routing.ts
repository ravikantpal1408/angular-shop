import { Routes } from "@angular/router";
import { NoAccessComponent } from "./shared/components/no-access/no-access.component";
import { PageNotFoundComponent } from "./shared/components/page-not-found/page-not-found.component";

export const AppRoutes: Routes = [
  {
    path: "",
    children: [
      {
        path: "",
        loadChildren: "./index/index.module#IndexModule"
      },
      {
        path: "products",
        loadChildren: "./layouts/product/product.module#ProductModule"
      },
      {
        path: "users",
        loadChildren: "./layouts/user/user.module#UserModule"
      }
    ]
  },
  { path: "no-access", component: NoAccessComponent },
  { path: "**", component: PageNotFoundComponent }
];
