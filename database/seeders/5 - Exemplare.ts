import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Exemplare from 'App/Models/Exemplare'

export default class extends BaseSeeder {
  public async run () {
    await Exemplare.createMany([
      {livroId: 1, localizacao: 'A3'}, 
      {livroId: 2, localizacao: 'B1'}, 
      {livroId: 3, localizacao: 'C3'}, 
      {livroId: 4, localizacao: 'A6'}, 
      {livroId: 5, localizacao: 'F3'},  
    ])
  }
}
