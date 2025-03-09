const { response } = require('express');
const mongodb = require('../data/database');
const search = require('mongodb').ObjectId;

const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db('contacts').collection('contacts').find();
    result.toArray().then((contacts) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts);
    });
};

const getSingle = async (req, res) => {
    try {
        const userId = new mongodb.ObjectID(req.params.id); // Ensure ObjectId is correctly created
        const result = await mongodb.getDatabase().db('contacts').collection('contacts').find({_id: userId});
        const contacts = await result.toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(contacts.length > 0 ? contacts : []);
    } catch (error) {
        res.status(500).json({ error: 'An error occurred while fetching the contact.' });
    }
};


module.exports = {
    getAll,
    getSingle
};