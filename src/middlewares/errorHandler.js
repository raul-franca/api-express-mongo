import mongoose from "mongoose";


function errorHandler(err, req, res, next) {
    // Define o código de status: utiliza o status definido no erro ou 500 (erro interno)
    const statusCode = err.status || 500;
    const message = err.message || "Internal Server Error";

    // Verifica se o erro é um erro de cast do mongoose ex: id inválido, nome, etc
    if(err instanceof mongoose.Error.CastError) {
        return res.status(400).json({
            status: res.status,
            message: "Um ou mais Dados fornecidos estão incorretos."
        });

    // Verifica se o erro é um erro de validação do mongoose
    }else if (err instanceof mongoose.Error.ValidationError) {

        // Mapeia os erros de validação e retorna uma mensagem de erro para cada um
        const msgError = Object.values(err.errors)
            .map(erro => erro.message)
            .join("; ");

        return res.status(400).json({
            status: res.status,
            message: msgError
        });

    }
    res.status(statusCode);
    // Retorna o erro
    res.json({
        status: statusCode,
        message: message
    });
}

export default errorHandler;