import React from "react";
import {Route, Routes } from "react-router-dom";

import MainPage from "./pages/Main";
import RepositoriesPages from "./pages/RepositoriesPage";

export function AppRoutes() {
  return (
      <Routes>
        <Route path="/repositories" 
          element={ <RepositoriesPages />}
        />
         
        <Route 
        path="/"
        element={ <MainPage />}
        />
         
      </Routes>      
  );}
