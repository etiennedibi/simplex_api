'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SupplierSchema extends Schema {
  up () {
    this.create('suppliers', (table) => {
      table.increments()
      table.string('denomination').notNullable()
      table.string('registration_number')
      table.string('location')
      table.string('email', 254).notNullable()
      table.string('contact')
      table.integer('phone_number').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('suppliers')
  }
}

module.exports = SupplierSchema
