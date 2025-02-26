
function pagination(req, res, next) {

    if (!req.query) {
        req.pagination = {
            page: 1,
            limit: 10,
            skip: 0
        };
        return next();
    }

    let { page = 1, limit = 10 } = req.query;

    page = parseInt(page, 10);
    limit = parseInt(limit, 10);

    if (isNaN(page) || page <= 0) {
        return res.status(400).json({ error: "Número de page inválido" });
    }
    if (isNaN(limit) || limit <= 0) {
        return res.status(400).json({ error: "Número limit inválido" });
    }

    req.pagination = {
        page,
        limit,
        skip: (page - 1) * limit
    };

    next();
}

export default pagination;
