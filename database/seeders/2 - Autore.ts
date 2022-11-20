import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Autore from 'App/Models/Autore'

export default class extends BaseSeeder {
  public async run () {
    await Autore.createMany([
      {nome: "JK Rowling", nacionalidade: "Britanica", generoPrincipal: "Fantasia"},
      {nome: "J.R.R. Tolkien", nacionalidade: "Sul-africana", generoPrincipal: "Fantasia"},
      {nome: "Suzanne Collins", nacionalidade: "Americana", generoPrincipal: "Sci-fi"},
      {nome: "Vários autores", nacionalidade: "Variadas", generoPrincipal: "Religioso"},
      {nome: "Alex Michaelides", nacionalidade: "Britanica", generoPrincipal: "Suspense"}
    ])
  }
}
