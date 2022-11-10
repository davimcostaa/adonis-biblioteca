// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Cliente from "App/Models/Cliente"
import ClienteUpdateValidator from "App/Validators/ClienteUpdateValidator"
import ClienteValidator from "App/Validators/ClienteValidator"

export default class ClientesController {
    async index() {
        return await Cliente.query().preload('emprestimos').paginate(1)
    }

    async store({request}) {
        const dados = await request.validate(ClienteValidator)
        return await Cliente.create(dados)
    }

    async show({request}) {
        const id = request.param('id')
        return await Cliente.findOrFail(id)           
    }

    async update({request}) {
        const id = request.param('id')
        const dados = await request.validate(ClienteUpdateValidator)
        const cliente = await Cliente.findOrFail(id)

        cliente.merge(dados)
        return cliente.save()
    }

    async destroy({request}) {
        const id = request.param('id')
        const cliente = await Cliente.findOrFail(id)

        return cliente.delete()
    }
}
