import Knex from 'knex';

export async function up(knex: Knex) {
    //vai criar a tabela
return  knex.schema.createTable('points', table => {
        table.increments('id').primary(); 
        table.string('image').notNullable();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('telephone').notNullable();
        table.string('city').notNullable();
        table.string('uf').notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('uf', 2).notNullable();
    });
}

export async function down(knex: Knex) {
    return knex.schema.dropTable('points');
    //vai deletar a tabela
}

