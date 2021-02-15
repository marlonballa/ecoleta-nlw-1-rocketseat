import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuário');
    response.json([
        'Marlon', 
        'Ana', 
        'Gordim',
        'Marcelle',
        'Sandra', 
        "Sebastião"
    ]);
});

app.listen(3333);