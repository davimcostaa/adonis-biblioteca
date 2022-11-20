// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Assinatura from "App/Models/Assinatura"
import Cliente from "App/Models/Cliente"
import Emprestimo from "App/Models/Emprestimo"
import EmprestimoUpdateValidator from "App/Validators/EmprestimoUpdateValidator"
import EmprestimoValidator from "App/Validators/EmprestimoValidator"

export default class EmprestimosController {
    async index() {
        return await Emprestimo.query().preload('cliente').preload("exemplare").paginate(1)
    }

    async store({request, response}) {
        const dados = await request.validate(EmprestimoValidator)
        const emprestimos = await Emprestimo.query().where("clienteId",dados.clienteId)
        const quantidade = emprestimos.length
        const cliente = await Cliente.find(dados.clienteId)
        const assinatura = await Assinatura.find(cliente!.assinaturaId)
        if (quantidade >= assinatura!.limiteEmprestimo) {
            return response.status(400).send({type: "error", message: "Você estorou o limite do seu plano"})
        }
        return await Emprestimo.create(dados)
    }

    async show({request}) {
        const id = request.param('id')
        return await Emprestimo.findOrFail(id)           
    }

    async update({request}) {
        const id = request.param('id')
        const dados = await request.validate(EmprestimoUpdateValidator)
        const emprestimo = await Emprestimo.findOrFail(id)

        emprestimo.merge(dados)
        return emprestimo.save()
    }

    /*async devolucao({request}) {
        const id = request.param('id')
        const dados = await request.only['dataDevolucao']
        const emprestimo = await Emprestimo.findOrFail(id)
        const cliente = await Cliente.find(emprestimo.clienteId)
        const assinatura = await Assinatura.find(cliente.assinaturaId)
        const dataEmprestimo = new Date(emprestimo.dataEmprestimo)
        const limite = await assinatura.limiteDias
        
        emprestimo.merge(dados)
        return emprestimo.save()
    } */

    async destroy({request}) {
        const id = request.param('id')
        const emprestimo = await Emprestimo.findOrFail(id)

        return emprestimo.delete()
    }
}
