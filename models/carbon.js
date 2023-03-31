const mongoose = require('mongoose');

const carbonSchema = new mongoose.Schema({
monthlyBill: Number,
monthlyGas: Number,
monthlyOil: Number,
yearlyMileage: Number,
shortflights: Number,
longFlights: Number,
carbonTotal: Number,
recycleNewspaper: Boolean,
recycleAluminum: Boolean
});

const Carbon = mongoose.model('Carbon', carbonSchema);

module.exports = Carbon;