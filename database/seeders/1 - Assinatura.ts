import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Assinatura from 'App/Models/Assinatura'

export default class extends BaseSeeder {
  public async run () {
    await Assinatura.createMany([
      {tipoAssinatura: "Básica", limiteEmprestimo: 3, limiteDias: 20},
      {tipoAssinatura: "Intermediária", limiteEmprestimo: 6, limiteDias: 60},
      {tipoAssinatura: "Avançada", limiteEmprestimo: 10, limiteDias: 80}
    ])
  }
}
