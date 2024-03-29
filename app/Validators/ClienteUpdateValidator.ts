import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClienteUpdateValidator {
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
  public schema = schema.create({
    cpf: schema.string.optional([
      rules.minLength(11),
      rules.maxLength(11),
    ]),
    codigo: schema.string.optional([
      rules.alphaNum()
    ]),
    nome: schema.string.optional([
      rules.alpha({
      allow: ['space']
    })
    ]),
    email: schema.string.optional([
      rules.email(),
    ]),
    dataNascimento: schema.date.optional(),
    assinaturaId: schema.number.optional([
      rules.exists({
        table: 'assinaturas',
        column: 'id'
      })
    ]),
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
    alpha: 'Insira um nome valido',
    minLength: 'Tamanho mínimo não atingido',
    maxLength: 'Tamanho máximo excedido',
    unique: '{{field}} já cadastrado. Digite um {{field}} válido',
    exists: 'Insira um valor existente'
  }
}
