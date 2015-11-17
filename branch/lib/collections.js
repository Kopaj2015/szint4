/**
 * Creates the Messages MongoDB collection.
 * @type {Mongo.Collection}
 */
 /*
	megnevezes,idopont,eredmeny,sport_id,ki1,ki2
 */
Esemeny = new Mongo.Collection('esemeny');
/*
	id,megnevezes
*/
Sportok = new Mongo.Collection('sportok');
/*
	username,password,szint
*/
Felhasznalo = new Mongo.Collection('felhasznalo');
/*
	id, esemeny_id, felhasznalo_id, mire
*/
Fogadas = new Mongo.Collection('fogadas');