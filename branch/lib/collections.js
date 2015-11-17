/**
 * Creates the Messages MongoDB collection.
 * @type {Mongo.Collection}
 */
 /*
	megnevezes,idopont,eredmeny,sport_id,ki1,ki2
 */
esemeny = new Mongo.Collection('esemeny');
/*
	id,megnevezes
*/
sportok = new Mongo.Collection('sportok');
/*
	username,password,szint
*/
felhasznalo = new Mongo.Collection('felhasznalo');
