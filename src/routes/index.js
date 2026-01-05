import express from "express";
import pessoasRoute from "./pessoasRoute.js";

export default (app) => {
  app.use(express.json(), pessoasRoute);
};