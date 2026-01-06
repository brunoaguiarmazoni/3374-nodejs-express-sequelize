import express from 'express';
import pessoasRoute from './pessoasRoute.js';
import categoriasRoute from './categoriasRoute.js';
import cursosRoute from './cursosRoute.js';

export default (app) => {
  app.use(express.json(), pessoasRoute, categoriasRoute, cursosRoute);
};