import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'clientes'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('cpf').notNullable()
      table.string('codigo', 7).notNullable()
      table.string('nome', 100).notNullable()
      table.string('email', 100).notNullable()
      table.string('telefone', 15).notNullable()
      table.date('data_nascimento').notNullable()
      table.integer('assinatura_id').unsigned().references('id').inTable('assinaturas').notNullable()
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
