// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Autore from "App/Models/Autore"
import AutoreValidator from "App/Validators/AutoreValidator"

export default class AutoresController {
    async index() {
        return await Autore.query().preload('livros').paginate(1)
    }

    async store({request}) {
        const dados = await request.validate(AutoreValidator)
        return await Autore.create(dados)
    }

    async show({request}) {
        const id = request.param('id')
        return await Autore.findOrFail(id)           
    }

    async update({request}) {
        const id = request.param('id')
        const dados = await request.validate(AutoreValidator)
        const autor = await Autore.findOrFail(id)

        autor.merge(dados)
        return autor.save()
    }

    async destroy({request}) {
        const id = request.param('id')
        const autor = await Autore.findOrFail(id)

        return autor.delete()
    }
}
