import { schema, CustomMessages, rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class ClienteValidator {
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
    cpf: schema.string([
      rules.minLength(11),
      rules.maxLength(11),
      rules.unique({ table: 'clientes', column: 'cpf' }),
    ]),
    codigo: schema.string([
      rules.alphaNum(),
      rules.unique({ table: 'clientes', column: 'codigo' })
    ]),
    nome: schema.string([
      rules.alpha({
      allow: ['space']
    })
    ]),
    email: schema.string([
      rules.email(),
      rules.unique({ table: 'clientes', column: 'email' })
    ]),
    dataNascimento: schema.date(),
    telefone: schema.string([
      rules.mobile({
        locale: ['pt-BR']
      }),
    rules.unique({ table: 'clientes', column: 'telefone'})
    ]),
    assinaturaId: schema.number([
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
    required: 'O campo {{field}} ?? obrigat??rio',
    alpha: 'Insira um nome valido',
    alphaNum: 'Insira um c??digo valido',
    minLength: 'Tamanho m??nimo n??o atingido',
    maxLength: 'Tamanho m??ximo excedido',
    unique: '{{field}} j?? cadastrado. Digite um {{field}} v??lido',
    exists: 'Insira um valor existente',
    mobile: 'Digite um telefone v??lido: XXXXXXXXXXX ou (XX)XXXXX-XXXX'
  }
}
