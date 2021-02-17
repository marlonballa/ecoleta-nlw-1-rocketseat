import express from 'express';

const routes = express.Router();

routes.post('/users', (request, response) => {
    const data = request.body;
    console.log(data);
    const user = {
        name: data.name, 
        email: data.email,
    };
    return response.json(user);
  });

  export default routes;
