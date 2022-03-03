import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import AboutPage from "../AboutPage";
import HomePage from "../Homepage";
import HeaderNavigation from "../HeaderNavigation";
import { PrivateroutesProps } from "./interface";

export const PrivateRoutes: React.FC<PrivateroutesProps> = ({ isLogin }) => {
    return isLogin? (
        <>
            <HeaderNavigation />
            <Routes>
                <Route element={<AboutPage />} path="/about" />
                <Route element={<HomePage />} path="/" />
            </Routes>
        </>
    ) : <Navigate to="/login" />
}