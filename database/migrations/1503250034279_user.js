'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.string('lastname', 80).notNullable()
      table.string('firtname').notNullable()
      table.string('email', 254).notNullable().unique()
      table.integer('phone_number').notNullable()
      table.string('password', 60).notNullable()
      table.integer('role_id').unsigned()
      table.foreign('role_id').references('user_roles.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
