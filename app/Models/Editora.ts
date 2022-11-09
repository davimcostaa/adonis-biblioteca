import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'

export default class Editora extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string 

  @column()
  public cnpj: string

  @column()
  public localidade: string
  
  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(()=>Editora, {pivotTable: 'livro_editoras'})
  public editoras: ManyToMany<typeof Editora>
  
}
