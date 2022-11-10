// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Editora from "App/Models/Editora"
import EditoraValidator from "App/Validators/EditoraValidator"

export default class EditorasController {
    async index() {
        return await Editora.query().preload('livros').paginate(1)
    }

    async store({request}) {
        const dados = await request.validate(EditoraValidator)
        return await Editora.create(dados)
    }

    async show({request}) {
        const id = request.param('id')
        return await Editora.findOrFail(id)
    }

    async update({request}) {
        const id = request.param('id')
        const dados = await request.validate(EditoraValidator)
        const editora = await Editora.findOrFail(id)

        editora.merge(dados)
        return editora.save()
    }

    async destroy({request}) {
        const id = request.param('id')
        const editora = await Editora.findOrFail(id)

        return editora.delete()
    }
}
