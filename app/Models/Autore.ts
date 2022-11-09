import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Autore extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string 

  @column()
  public nacionalidade: string

  @column()
  public generoPrincipal: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
