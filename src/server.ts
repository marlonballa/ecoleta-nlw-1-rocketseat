import express from 'express';
const app = express();
app.use(express.json);

const users = [
    'Marlon', 
    'Ana', 
    'Gordim',
    'Marcelle',
    'Sandra', 
    "Sebastião"
]; 
app.get('/users', (request, response) => {
    const search = String(request.query.search);
    const filteredUsers = search ? users.filter(user => user.includes(search)) : users;
    return response.json(filteredUsers);
});
app.get('/users/:id', (request, response) => {
    //recebe o id a ser buscado
    const id = Number(request.params.id); 
    //encontra o objeto referente a posição 
    const user = users[id];
    //retorna em formato json
    return response.json(user);
 });
app.post('/users', (request, response) => {
    const data = request.body;
    console.log(data);
    const user = {
        name: data.name, 
        email: data.email,
    };
    return response.json(user);
  });

app.listen(3333);