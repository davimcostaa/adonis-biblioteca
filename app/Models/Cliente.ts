import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public cpf: string

  @column()
  public codigo: string

  @column()
  public nome: string 

  @column()
  public email: string

  @column()
  public telefone: string

  @column()
  public dataNascimento: Date

  @column()
  public assinaturaId: number
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}