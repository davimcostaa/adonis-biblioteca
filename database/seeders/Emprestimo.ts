import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Emprestimo from 'App/Models/Emprestimo'

export default class extends BaseSeeder {
  public async run () {
    await Emprestimo.createMany([
      {clienteId: 1, exemplarId: 1, dataEmprestimo: new Date("2022-04-13"), dataDevolucao: new Date("2022-12-15")},
      {clienteId: 2, exemplarId: 2, dataEmprestimo: new Date("2022-04-14"), dataDevolucao: new Date("2022-12-15")},
      {clienteId: 3, exemplarId: 3, dataEmprestimo: new Date("2022-07-14"), dataDevolucao: new Date("2022-12-15")},
      {clienteId: 4, exemplarId: 4, dataEmprestimo: new Date("2022-10-12"), dataDevolucao: new Date("2022-12-15")},
      {clienteId: 1, exemplarId: 5, dataEmprestimo: new Date("2022-12-28"), dataDevolucao: new Date("2022-12-15")},
    ])
  }
}
