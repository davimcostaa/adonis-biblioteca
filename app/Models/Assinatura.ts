import { DateTime } from 'luxon'
import { BaseModel, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Cliente from './Cliente'

export default class Assinatura extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public tipoAssinatura: string

  @column()
  public limiteEmprestimo: string

  @column()
  public limiteDias: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @hasMany( ()=>Cliente ) 
  public clientes: HasMany<typeof Cliente>

}
