import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import QueryData from "../dataPage/data";
import ViewsPage from "../dataPage/viewsPage";
import FormQuery from "../FormsQuery/formQuery";

function NavigationRouter() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={QueryData} />
          <Route path="/form" Component={FormQuery}/>

          <Route path="/views/:id" Component={ViewsPage} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default NavigationRouter;
