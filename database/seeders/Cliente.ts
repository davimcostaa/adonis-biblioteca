import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Cliente from 'App/Models/Cliente'

export default class extends BaseSeeder {
  public async run () {
    await Cliente.createMany([
      {cpf: '546.164.690-59', codigo: '1310', nome: 'Cauã Novaes', email: 'hansel9017@uorak.com', 
      telefone: '(69) 92178-2368', dataNascimento: new Date("1999-08-05"), 
      assinaturaId: 2}, 
      {cpf: '644.653.020-02', codigo: '5694', nome: 'Guilherme Pires', email: 'jakob.hand17@hotmail.com', 
      telefone: '(82) 2286-0659', dataNascimento: new Date("2002-01-03"), 
      assinaturaId: 1}, 
      {cpf: '275.248.730-42', codigo: '6798', nome: 'Raquel da Costa', email: 'sheba_green@protonmail.com', 
      telefone: '(68) 2848-4731', dataNascimento: new Date("1980-05-02"), 
      assinaturaId: 2}, 
      {cpf: '242.699.200-09', codigo: '3657', nome: 'Catarina Aragão', email: 'may_hope@yandex.com', 
      telefone: '(14) 99274-1400', dataNascimento: new Date("1995-08-06"), 
      assinaturaId: 3}, 
      {cpf: '424.182.030-18', codigo: '5690', nome: 'Daniel Teixeira', email: 'barack_obama@hotmail.com', 
      telefone: '(69) 92178-2368', dataNascimento: new Date("2001-12-24"), 
      assinaturaId: 3}, 
    ])
  }
}
