const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/aventuras', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

const personajeSchema = mongoose.Schema({
	name : {
		type: String,
		require: true
	},
	age : {
        type: Number,
        require: true
    },
    race : {
        type: String,
        require: true
    },
    ability : {
        type: String,
        require: true
    },
    from : {
        type: String,
        require: true
    }
});

const Personaje = mongoose.model("personajes", personajeSchema);

module.exports = Personaje;