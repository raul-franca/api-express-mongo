import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

async function connect() {
    const uri = process.env.MONGODB_URI;

    try {
        await mongoose.connect(uri);
        console.log('Conectado ao MongoDB com sucesso!');
    } catch (err) {
        console.error('Erro ao conectar ao MongoDB:', err);
    }
}

export default connect;