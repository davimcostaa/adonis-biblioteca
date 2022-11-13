import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Emprestimo from './Emprestimo'

export default class Exemplare extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public livroId: number

  @column()
  public localizacao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany( ()=>Emprestimo ) 
  public emprestimos: HasMany<typeof Emprestimo>
}
