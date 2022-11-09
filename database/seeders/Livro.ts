import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Livro from 'App/Models/Livro'

export default class extends BaseSeeder {
  public async run () {
    await Livro.createMany([
      {isbn: '978–85–333–0227–3', nome: 'Harry Potter e a Pedra Filosofal' ,ano: '1999', genero: 'Fantasia', classificacao: '+10'},
      {isbn: '656–35–745–6367–2', nome: 'Jogos Vorazes', ano: '2005', genero: 'Sci-fi', classificacao: '+14'},
      {isbn: '743–64–121–3245–7', nome: 'Biblia', ano: '1980', genero: 'Religioso', classificacao: '+10'},
      {isbn: '231–43–171–1375–9', nome: 'Senhor dos Aneis', ano: '2019', genero: 'Politica', classificacao: '+14'},
      {isbn: '975–96–889–8488–3', nome: 'A paciente silenciosa', ano: '2017', genero: 'Suspense', classificacao: '+16'}
    ])
  }
}
