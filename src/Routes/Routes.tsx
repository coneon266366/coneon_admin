import React from "react";
import { Home, Products, Users, Vendors } from "./Constants";
import ProductsContainer from "../containers/ProductsContainer/ProductsContainer";
import VendorsContainer from "../containers/VendorsContainer/VendorsContainer";
import HomePageContainer from "../containers/HomePageContainer/HomePageContainer";
import UsersContainer from "../containers/UsersContainer/UsersContainer";

interface RouteProps {
  component: React.ComponentType;
  path: string;
}

export const routesArr: RouteProps[] = [
  { component: HomePageContainer, path: Home },
  { component: ProductsContainer, path: Products },
  { component: VendorsContainer, path: Vendors },
  { component: UsersContainer, path: Users },
];
