import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Livro from 'App/Models/Livro'

export default class extends BaseSeeder {
  public async run () {
    await Livro.createMany([
      {isbn: '978–85–333–0227–3', nome: 'Harry Potter e a Pedra Filosofal' ,ano: '1999', genero: 'Fantasia', classificacao: '+10', foto: 'https://m.media-amazon.com/images/I/51lRMYwP-4L.jpg'},
      {isbn: '656–35–745–6367–2', nome: 'Jogos Vorazes', ano: '2005', genero: 'Sci-fi', classificacao: '+14', foto: 'https://m.media-amazon.com/images/I/61zBhzjS4LL._AC_UF1000,1000_QL80_.jpg'},
      {isbn: '743–64–121–3245–7', nome: 'Biblia', ano: '1980', genero: 'Religioso', classificacao: '+10', foto: 'https://m.media-amazon.com/images/I/71ufJvztJUL._AC_UF894,1000_QL80_.jpg'},
      {isbn: '975–96–889–8488–3', nome: 'A paciente silenciosa', ano: '2017', genero: 'Suspense', classificacao: '+16', foto: 'https://m.media-amazon.com/images/I/41J3FApF8yL.jpg'}
    ])
  }
}
