'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class DeliveredProductSchema extends Schema {
  up () {
    this.create('delivered_products', (table) => {
      table.increments()
      table.integer('quantity')
      table.integer('total_buying_price').notNullable()
      table.integer('product_id').unsigned()
      table.foreign('product_id').references('products.id')
      table.integer('supplier_id').unsigned()
      table.foreign('supplier_id').references('suppliers.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('delivered_products')
  }
}

module.exports = DeliveredProductSchema
