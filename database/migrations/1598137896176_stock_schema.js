'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class StockSchema extends Schema {
  up () {
    this.create('stocks', (table) => {
      table.increments()
      table.string('generate_code').notNullable().unique()
      table.integer('total_buying_price').notNullable()
      table.integer('unique_selling_price').notNullable()
      table.integer('quantity').notNullable()
      table.integer('product_id').unsigned()
      table.foreign('product_id').references('products.id')
      table.integer('supplier_id').unsigned()
      table.foreign('supplier_id').references('suppliers.id')
      table.integer('user_id').unsigned()
      table.foreign('user_id').references('users.id')
      table.timestamps()
    })
  }

  down () {
    this.drop('stocks')
  }
}

module.exports = StockSchema
