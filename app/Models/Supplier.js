'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Supplier extends Model {
    stock(){
        return this.hasMany('App/Models/Stock')
    }
}

module.exports = Supplier
