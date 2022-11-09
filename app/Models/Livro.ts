import { DateTime } from 'luxon'
import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'
import Autore from './Autore'
import Editora from './Editora'

export default class Livro extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public nome: string

  @column()
  public isbn: string

  @column()
  public ano: string

  @column()
  public genero: string

  @column()
  public classificacao: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @manyToMany(()=>Autore, {pivotTable: 'livro_autores'})
  public autores: ManyToMany<typeof Autore>

  @manyToMany(()=>Editora, {pivotTable: 'livro_editoras'})
  public editoras: ManyToMany<typeof Editora>

}
