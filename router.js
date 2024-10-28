const express = require('express');
const routerRestaurantes = express.Router();
const Restaurantes = require('./delivery-sequelize');

routerRestaurantes.get('/', async (req, res) => {
  const restaurantes = await Restaurantes.findAll();

  res.status(200).json(restaurantes);
});

routerRestaurantes.get('/:id', async (res, req) => {
  const id = req.params.id;
  const restaurante = await Restaurantes.findByPk(id);
  
  res.status(200).json(restaurante);
});


routerRestaurantes.post('/', async(req, res, next) => {
  const restaurante = req.body;
  
  const newRestaurante = await Restaurantes.create(restaurante);
  res.status(201).json(newRestaurante);
});

routerRestaurantes.put('/:id', async(req,) => {
  const id = req.params.id;
  const restaurante = req.body;

  await Restaurantes.update(restaurante, {
    where: { id }
  });

  const updatedRestaurante = await Restaurantes.findByPk(id);

  res.status(200).json(updatedRestaurante);
});

routerRestaurantes.delete('/:id', async(req, res) =>{
  const id = req.params.id;

  const restaurante = Restaurantes.findByPk(id);

  if (!restaurante){
    res.status(404).json({ message: 'Restaurante não encontrado' });
  }
  
  await Restaurantes.destroy({
    where: { id }
  });

  res.status(204).json;
});

module.exports = routerRestaurantes;