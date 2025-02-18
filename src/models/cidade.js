import mongoose from "mongoose";

const cidadeSchema = new mongoose.Schema({

    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    uf: {type: String, required: true},
    lat: {type: Number},
    lon: {type: Number}

});

const Cidade = mongoose.model('Cidade', cidadeSchema);

export default Cidade;
