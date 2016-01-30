/**
 * Category
 *  _id                       PK, String
 *  title                     String [1..100]
 *  seq                       Number [ > 0]
 *  active                    Boolean
 *  createdAt                 Date
 *  updatedAt                 Date
 */

if (typeof Category === 'undefined') Category = {};

Category.collection = new Mongo.Collection('categories');

