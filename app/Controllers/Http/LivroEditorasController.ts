// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import LivroEditora from "App/Models/LivroEditora"
import LivroEditoraUpdateValidator from "App/Validators/LivroEditoraUpdateValidator"
import LivroEditoraValidator from "App/Validators/LivroEditoraValidator"

export default class LivroEditoraEditorasController {
    async index() {
        return await LivroEditora.query().paginate(1)
    }

    async store({request}) {
        const dados = await request.validate(LivroEditoraValidator)
        return await LivroEditora.create(dados)
    }

    async show({request}) {
        const id = request.param('id')
        return await LivroEditora.findOrFail(id)           
    }

    async update({request}) {
        const id = request.param('id')
        const dados = await request.validate(LivroEditoraUpdateValidator)
        const livroeditora = await LivroEditora.findOrFail(id)

        livroeditora.merge(dados)
        return livroeditora.save()
    }

    async destroy({request}) {
        const id = request.param('id')
        const livroeditora = await LivroEditora.findOrFail(id)

        return livroeditora.delete()
    }
}
