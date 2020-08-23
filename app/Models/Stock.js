'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Stock extends Model {
    user(){
        return this.belongsTo('App/Models/User')
    }
    product(){
        return this.belongsTo('App/Models/Product')
    }
    supplier(){
        return this.belongsTo('App/Models/Supplier')
    }
}

module.exports = Stock
