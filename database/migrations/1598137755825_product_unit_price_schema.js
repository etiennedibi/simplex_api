'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductUnitPriceSchema extends Schema {
  up () {
    this.create('product_unit_prices', (table) => {
      table.increments()
      table.integer('price')
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.integer('product_id').unsigned()
      table.foreign('product_id').references('products.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('product_unit_prices')
  }
}

module.exports = ProductUnitPriceSchema
