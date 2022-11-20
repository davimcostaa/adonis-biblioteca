import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Editora from 'App/Models/Editora'

export default class extends BaseSeeder {
  public async run () {
    await Editora.createMany([
      {nome: "Companhia da Letras", cnpj: '88.944.317/0001-27' ,localidade: "SP"},
      {nome: "Suma", cnpj: '83.742.742/0001-10' ,localidade: "SP"},
      {nome: "Editora Intrínseca", cnpj: '88.653.866/0001-42' ,localidade: "RJ"},
      {nome: "Editorial Record", cnpj: '71.725.380/0001-70' ,localidade: "SP"},
      {nome: "Globo Livros", cnpj: '69.238.555/0001-72' ,localidade: "SP"},
    ])
  }
}
