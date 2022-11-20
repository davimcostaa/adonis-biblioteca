import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import LivroEditora from 'App/Models/LivroEditora'

export default class extends BaseSeeder {
  public async run () {
    await LivroEditora.createMany([
      {editoraId: 1, livroId: 1}, 
      {editoraId: 3, livroId: 2}, 
      {editoraId: 5, livroId: 3}, 
      {editoraId: 4, livroId: 4},
      {editoraId: 2, livroId: 5}, 
    ])
  }
}
