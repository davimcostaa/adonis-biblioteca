// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import LivroAutore from "App/Models/LivroAutore"
import LivroAutoreUpdateValidator from "App/Validators/LivroAutoreUpdateValidator"
import LivroAutoreValidator from "App/Validators/LivroAutoreValidator"

export default class LivroAutoreAutoresController {
    async index() {
        return await LivroAutore.query().paginate(1)
    }

    async store({request}) {
        const dados = await request.validate(LivroAutoreValidator)
        return await LivroAutore.create(dados)
    }

    async show({request}) {
        const id = request.param('id')
        return await LivroAutore.findOrFail(id)           
    }

    async update({request}) {
        const id = request.param('id')
        const dados = await request.validate(LivroAutoreUpdateValidator)
        const livroautore = await LivroAutore.findOrFail(id)

        livroautore.merge(dados)
        return livroautore.save()
    }

    async destroy({request}) {
        const id = request.param('id')
        const livroautore = await LivroAutore.findOrFail(id)

        return livroautore.delete()
    }
}
