import mongoose from "mongoose";

const cidadeSchema = new mongoose.Schema({
    id: {type: mongoose.Schema.Types.ObjectId},
    nome: {type: String, required: true},
    uf: {type: String, required: true}
});

const cidade = mongoose.model('cidade', cidadeSchema);

export default cidade;
