// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import Assinatura from "App/Models/Assinatura"
import AssinaturaUpdateValidator from "App/Validators/AssinaturaUpdateValidator"
import AssinaturaValidator from "App/Validators/AssinaturaValidator"

export default class AssinaturasController {
    
    async index() {
        return await Assinatura.query().paginate(1)
    }

    async store({request}) {
        const dados = await request.validate(AssinaturaValidator)
        return await Assinatura.create(dados)
    }

    async show({request}) {
        const id = request.param('id')
        return await Assinatura.findOrFail(id)
    }

    async update({request}) {
        const id = request.param('id')
        const dados = await request.validate(AssinaturaUpdateValidator)
        const assinatura = await Assinatura.findOrFail(id)

        assinatura.merge(dados)
        return assinatura.save()
    }

    async destroy({request}) {
        const id = request.param('id')
        const assinatura = await Assinatura.findOrFail(id)

        return assinatura.delete()
    }
}
