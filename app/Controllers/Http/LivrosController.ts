// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Livro from "App/Models/Livro"
import LivroUpdateValidator from "App/Validators/LivroUpdateValidator"
import LivroValidator from "App/Validators/LivroValidator"

export default class LivrosController {

    async index() {
        return await Livro.query().preload('autores').preload('editoras').paginate(1)
    }

    async store({request}) {
        const dados = await request.validate(LivroValidator)
        return await Livro.create(dados)
    }

    async show({request}) {
        const id = request.param('id')
        return await Livro.findOrFail(id)           
    }

    async update({request}) {
        const id = request.param('id')
        const dados = await request.validate(LivroUpdateValidator)
        const livro = await Livro.findOrFail(id)

        livro.merge(dados)
        return livro.save()
    }

    async destroy({request}) {
        const id = request.param('id')
        const livro = await Livro.findOrFail(id)

        return livro.delete()
    }
}

