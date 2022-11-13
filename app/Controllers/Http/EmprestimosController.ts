// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Emprestimo from "App/Models/Emprestimo"
import EmprestimoUpdateValidator from "App/Validators/EmprestimoUpdateValidator"
import EmprestimoValidator from "App/Validators/EmprestimoValidator"

export default class EmprestimosController {
    async index() {
        return await Emprestimo.query().preload('cliente').preload("exemplare").paginate(1)
    }

    async store({request}) {
        const dados = await request.validate(EmprestimoValidator)
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

    async destroy({request}) {
        const id = request.param('id')
        const emprestimo = await Emprestimo.findOrFail(id)

        return emprestimo.delete()
    }
}
