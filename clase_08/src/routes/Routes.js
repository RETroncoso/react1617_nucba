import React from "react";
import Home from "../pages/home/Home";
import { Route, Routes as ReactDomRoutes } from "react-router-dom";
import Contacto from "../pages/contacto/Contacto";
import Layout from "../components/layout/Layout";
import Error404 from "../pages/error404/Error404";
import Product from "../pages/productos/Product";
import Section from "../pages/section/Section";

function Routes() {
  return (
    <Layout>
      <ReactDomRoutes>
        <Route path="/" element={<Home />} />

        <Route path="product">
          <Route index element={<Product />} />
          <Route path=":product" element={<Section />} />
        </Route>

        <Route path="contacto" element={<Contacto />} />

        <Route path="*" element={<Error404 />} />
      </ReactDomRoutes>
    </Layout>
  );
}

export default Routes;
