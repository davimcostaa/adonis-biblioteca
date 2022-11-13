import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'
import Exemplare from './Exemplare'

export default class Emprestimo extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public clienteId: number

  @column()
  public exemplareId: number

  @column()
  public dataEmprestimo: Date

  @column()
  public dataDevolucao: Date

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @belongsTo( ()=> Cliente)
  public cliente: BelongsTo<typeof Cliente>

  @belongsTo( ()=> Exemplare)
  public exemplare: BelongsTo<typeof Exemplare>
  
}
