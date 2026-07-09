import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    knex.schema.createTable("refeicao", (table) => {
        table.uuid('id').primary()
        table.uuid('usuario_id').notNullable().references('id').inTable('usuarios')
        table.text('nome').notNullable()
        table.text('descricao').notNullable()
        table.timestamp('data_hora').notNullable()
        table.boolean('dentro_da_dieta').notNullable()
    })
}


export async function down(knex: Knex): Promise<void> {
    await knex.schema.dropTable("refeicao")
}

