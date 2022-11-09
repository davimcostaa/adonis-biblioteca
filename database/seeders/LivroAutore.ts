import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import LivroAutore from 'App/Models/LivroAutore'

export default class extends BaseSeeder {
  public async run () {
    await LivroAutore.createMany([
      {autorId: 1, livroId: 1}, 
      {autorId: 2, livroId: 4}, 
      {autorId: 3, livroId: 2}, 
      {autorId: 4, livroId: 4},
      {autorId: 5, livroId: 5}, 
    ])
  }
}
