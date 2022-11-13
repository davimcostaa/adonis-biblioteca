// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Exemplare from "App/Models/Exemplare"
import ExemplareValidator from "App/Validators/ExemplareValidator"

export default class ExemplaresController {
    async index() {
        return await Exemplare.query().preload('emprestimos').paginate(1)
    }

    async store({request}) {
        const dados = await request.validate(ExemplareValidator)
        return await Exemplare.create(dados)
    }

    async show({request}) {
        const id = request.param('id')
        return await Exemplare.findOrFail(id)           
    }

    async update({request}) {
        const id = request.param('id')
        const dados = await request.validate()
        const exemplar = await Exemplare.findOrFail(id)

        exemplar.merge(dados)
        return exemplar.save()
    }

    async destroy({request}) {
        const id = request.param('id')
        const exemplar = await Exemplare.findOrFail(id)

        return exemplar.delete()
    }
}
