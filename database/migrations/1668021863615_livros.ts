import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'livros'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 200).notNullable()
      table.string('isbn', 18).notNullable()
      table.string('ano', 4).notNullable()
      table.string('genero', 45).notNullable()
      table.string('classificacao', 3).notNullable()
      table.string('foto', 1000).notNullable()
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
