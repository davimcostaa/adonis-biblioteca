import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class LivroValidator {
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
    nome: schema.string([
      rules.alphaNum({
        allow: ['space', 'underscore', 'dash']
      }),    
    ]),
    isbn: schema.string([
      rules.minLength(17),
      rules.maxLength(17),
      rules.unique({ table: 'livros', column: 'isbn' })
    ]),
    ano: schema.string([
      rules.minLength(4),
      rules.maxLength(4)
    ]),
    foto: schema.string([
      rules.minLength(4)
    ]),
    genero: schema.string([]),
    classificacao: schema.string([
      rules.alphaNum({
        allow: ['space']
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
    required: 'O campo {{field}} é obrigatório',
    minLength: 'Tamanho mínimo não atingido',
    maxLength: 'Tamanho máximo excedido',
    unique: '{{field}} já cadastrado. Digite um {{field}} válido'
  }
}
