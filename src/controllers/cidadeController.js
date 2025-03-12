import CidadeService from "../services/cidadeService.js";

class CidadeController {
    /**
     * @swagger
     * /cidades:
     *   get:
     *     summary: Retorna todas as cidades
     *     tags: [Cidades]
     *     responses:
     *       200:
     *         description: Lista de cidades.
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Cidade'
     */
    static async getAllCidades(req, res, next) {
        try {
            const result = await CidadeService.getAllCidades(req.query, req.pagination);
            return res.status(200).json(result);
        } catch (err) {
            next(err);
        }
    }

    /**
     * @swagger
     * /cidades/uf/{uf}:
     *   get:
     *     summary: Retorna todas as cidades de uma UF
     *     tags: [Cidades]
     *     parameters:
     *       - in: path
     *         name: uf
     *         required: true
     *         schema:
     *           type: string
     *         example: PE
     *         description: UF da cidade
     *     responses:
     *       200:
     *         description: Lista de cidades para a UF especificada
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Cidade'
     *       404:
     *         description: UF não encontrada
     */
    static async getAllCidadesByUf(req, res, next) {
        try {
            const result = await CidadeService.getAllCidadesByUf(req.params, req.pagination);
            if (result !== null) {
                return res.status(200).json(result);
            }
            return res.status(404).json({ message: "UF não encontrada" });
        } catch (err) {
            next(err);
        }
    }

    /**
     * @swagger
     * /cidades/nome/{nome}:
     *   get:
     *     summary: Retorna todas as cidades com um nome específico
     *     tags: [Cidades]
     *     parameters:
     *       - in: path
     *         name: nome
     *         required: true
     *         schema:
     *           type: string
     *         example: Recife
     *         description: Nome da cidade
     *     responses:
     *       200:
     *         description: Lista de cidades com o nome informado
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Cidade'
     *       404:
     *         description: Cidade não encontrada
     */
    static async getAllCidadesByNome(req, res, next) {
        try {
            const result = await CidadeService.getAllCidadesByNome(req.params, req.pagination);
            if (result !== null) {
                return res.status(200).json(result);
            }
            return res.status(404).json({ message: "Cidade não encontrada" });
        } catch (err) {
            next(err);
        }
    }

    /**
     * @swagger
     * /cidades/uf/{uf}/nome/{nome}:
     *   get:
     *     summary: Retorna todas as cidades de uma UF com um nome específico
     *     tags: [Cidades]
     *     parameters:
     *       - in: path
     *         name: uf
     *         required: true
     *         schema:
     *           type: string
     *         description: UF da cidade
     *       - in: path
     *         name: nome
     *         required: true
     *         schema:
     *           type: string
     *         description: Nome da cidade
     *     responses:
     *       200:
     *         description: Lista de cidades
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Cidade'
     *       404:
     *         description: Nenhuma cidade encontrada
     */
    static async getAllCidadesByUfAndNome(req, res, next) {
        try {
            const result = await CidadeService.getAllCidadesByUfAndNome(req.query, req.pagination);
            if (result !== null) {
                return res.status(200).json(result);
            }
            return res.status(404).json({ message: "UF e Nome não encontrados" });
        } catch (err) {
            next(err);
        }
    }

    /**
     * @swagger
     * /cidades/{id}:
     *   get:
     *     summary: Retorna uma cidade pelo ID
     *     tags: [Cidades]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         example: 123
     *         description: ID da cidade
     *     responses:
     *       200:
     *         description: Cidade encontrada
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Cidade'
     *       404:
     *         description: Cidade não encontrada
     */
    static async getCidadeById(req, res, next) {
        try {
            const { id } = req.params;
            const cidade = await CidadeService.getCidadeById(id);
            if (!cidade) {
                return res.status(404).json({ message: "Cidade não encontrada" });
            }
            return res.status(200).json(cidade);
        } catch (err) {
            next(err);
        }
    }

    /**
     * @swagger
     * /cidades:
     *   post:
     *     summary: Cria uma nova cidade
     *     tags: [Cidades]
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               nome:
     *                 type: string
     *               uf:
     *                 type: string
     *               lat:
     *                 type: number
     *               long:
     *                 type: number
     *     responses:
     *       201:
     *         description: Nova cidade criada com sucesso
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Cidade'
     *       400:
     *         description: Dados inválidos
     */
    static async createCidade(req, res, next) {
        try {
            const novaCidade = await CidadeService.createCidade(req.body);
            return res.status(201).json({ message: "Nova cidade criada com sucesso!", cidade: novaCidade });
        } catch (err) {
            next(err);
        }
    }

    /**
     * @swagger
     * /cidades/{id}:
     *   put:
     *     summary: Atualiza uma cidade pelo ID
     *     tags: [Cidades]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *     requestBody:
     *       required: true
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               nome:
     *                 type: string
     *               uf:
     *                 type: string
     *               lat:
     *                 type: number
     *               long:
     *                 type: number
     *     responses:
     *       200:
     *         description: Cidade atualizada com sucesso
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Cidade'
     *       404:
     *         description: Cidade não encontrada
     */
    static async updateCidade(req, res, next) {
        try {
            const { id } = req.params;
            const cidadeAtualizada = await CidadeService.updateCidade(id, req.body);
            if (!cidadeAtualizada) {
                return res.status(404).json({ message: "Cidade não encontrada" });
            }
            return res.status(200).json(cidadeAtualizada);
        } catch (err) {
            next(err);
        }
    }

    /**
     * @swagger
     * /cidades/{id}:
     *   delete:
     *     summary: Deleta uma cidade pelo ID
     *     tags: [Cidades]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         example: 123
     *         description: ID da cidade
     *     responses:
     *       200:
     *         description: Cidade deletada com sucesso
     *       404:
     *         description: Cidade não encontrada
     */
    static async deleteCidade(req, res, next) {
        try {
            const { id } = req.params;
            const cidadeDeletada = await CidadeService.deleteCidade(id);
            if (!cidadeDeletada) {
                return res.status(404).json({ message: "Cidade não encontrada" });
            }
            return res.status(200).json({ message: "Cidade deletada com sucesso" });
        } catch (err) {
            next(err);
        }
    }

    /**
     * @swagger
     * /cidades/{id}/coordenadas:
     *   get:
     *     summary: Retorna as coordenadas de uma cidade pelo ID
     *     tags: [Cidades]
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: string
     *         example: 123
     *         description: ID da cidade
     *     responses:
     *       200:
     *         description: Lista de coordenadas encontradas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 type: object
     *                 properties:
     *                   lat:
     *                     type: number
     *                   long:
     *                     type: number
     *       404:
     *         description: Cidade ou coordenadas não encontradas
     */
    static async getCoordenadasById(req, res, next) {
        try {
            const { id } = req.params;
            const cidade = await CidadeService.getCidadeById(id);
            if (!cidade) {
                return res.status(404).json({ message: "Cidade não encontrada" });
            }
            const data = await CidadeService.getCoordenadas(cidade);
            if (data && data.length > 0) {
                return res.status(200).json(data);
            } else {
                return res.status(404).json({ message: "Coordenadas não encontradas" });
            }
        } catch (err) {
            next(err);
        }
    }
}

export default CidadeController;