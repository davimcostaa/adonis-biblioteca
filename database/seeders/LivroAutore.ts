import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import LivroAutore from 'App/Models/LivroAutore'

export default class extends BaseSeeder {
  public async run () {
    await LivroAutore.createMany([
      {autoreId: 1, livroId: 1}, 
      {autoreId: 2, livroId: 4}, 
      {autoreId: 3, livroId: 2}, 
      {autoreId: 4, livroId: 4},
      {autoreId: 5, livroId: 5}, 
    ])
  }
}
