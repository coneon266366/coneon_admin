import React from "react";
import { Category, Home, Orders, Products, Users, Vendors } from "./Constants";
import ProductsContainer from "../containers/ProductsContainer/ProductsContainer";
import VendorsContainer from "../containers/VendorsContainer/VendorsContainer";
import HomePageContainer from "../containers/HomePageContainer/HomePageContainer";
import UsersContainer from "../containers/UsersContainer/UsersContainer";
import OrderContainer from "../containers/OrderContainer/OrderContainer";
import CategoryContainer from "../containers/CategoryContainer/CategoryContainer";

interface RouteProps {
  component: React.ComponentType;
  path: string;
}

export const routesArr: RouteProps[] = [
  { component: HomePageContainer, path: Home },
  { component: UsersContainer, path: Users },
  { component: ProductsContainer, path: Products },
  { component: VendorsContainer, path: Vendors },
  { component: OrderContainer, path: Orders },
  { component: CategoryContainer, path: Category },
];
