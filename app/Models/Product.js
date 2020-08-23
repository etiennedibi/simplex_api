'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {
    user(){
        return this.belongsTo('App/Models/User')
    }
    product_unit_price(){
        return this.hasMany('App/Models/ProductUnitPrice')
    }
    stock(){
        return this.hasMany('App/Models/Stock')
    }
}

module.exports = Product
