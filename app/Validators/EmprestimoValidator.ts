import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import { DateTime } from 'luxon'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EmprestimoValidator {
  constructor(protected ctx: HttpContextContract) {}

  /*
   * Define schema to validate the "shape", "type", "formatting" and "integrity" of data.
   *
   * For example:
   * 1. The username must be of data type string. But then also, it should
   *    not contain special characters or numbers.
   *    ```
   *     schema.string({}, [ rules.alpha() ])
   *    ```
   *
   * 2. The email must be of data type string, formatted as a valid
   *    email. But also, not used by any other user.
   *    ```
   *     schema.string({}, [
   *       rules.email(),
   *       rules.unique({ table: 'users', column: 'email' }),
   *     ])
   *    ```
   */
  public refs = schema.refs({
    allowedDate: DateTime.local().plus({ days: 15 })
  })

  public schema = schema.create({
    clienteId: schema.number([
      rules.exists({
        table: 'clientes',
        column: 'id'
      })
    ]),
    exemplareId: schema.number([
      rules.exists({
        table: 'exemplares',
        column: 'id'
      }),
      rules.unique({ table: 'emprestimos', column: 'exemplare_id' }) 
    ]),
    dataEmprestimo: schema.date(),
    dataDevolucao: schema.date({}, [
      rules.after(this.refs.allowedDate)
    ])
  })


  /**
   * Custom messages for validation failures. You can make use of dot notation `(.)`
   * for targeting nested fields and array expressions `(*)` for targeting all
   * children of an array. For example:
   *
   * {
   *   'profile.username.required': 'Username is required',
   *   'scores.*.number': 'Define scores as valid numbers'
   * }
   *
   */
  public messages: CustomMessages = {
    unique: '{{field}} já cadastrado. Digite um {{field}} válido',
    exists: 'Insira um valor existente',
    after: 'Insira uma data válida'
  }
}
