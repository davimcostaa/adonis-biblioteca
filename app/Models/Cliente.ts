import { DateTime } from 'luxon'
import { BaseModel, BelongsTo, belongsTo, column, HasMany, hasMany } from '@ioc:Adonis/Lucid/Orm'
import Assinatura from './Assinatura'
import Emprestimo from './Emprestimo'

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

  @belongsTo( ()=> Assinatura)
  public assinatura: BelongsTo<typeof Assinatura>

  @hasMany( ()=>Emprestimo ) 
  public emprestimos: HasMany<typeof Emprestimo>

}
