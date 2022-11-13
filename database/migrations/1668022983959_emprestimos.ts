import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'emprestimos'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')

      table.integer('cliente_id').unsigned().references('id').inTable('clientes').notNullable()
      table.integer('exemplare_id').unsigned().references('id').inTable('exemplares').notNullable()
      table.date('data_emprestimo').notNullable()
      table.date('data_devolucao').notNullable()
      
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
