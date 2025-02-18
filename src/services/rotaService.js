import CidadeService from "./cidadeService.js";

function degreesToRadians(degrees) {
    return degrees * (Math.PI / 180);
}

function haversineDistance(lat1, lon1, lat2, lon2) {

    const R = 6371; // Raio da Terra em km
    const dLat = degreesToRadians(lat2 - lat1);
    const dLon = degreesToRadians(lon2 - lon1);
    const a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(degreesToRadians(lat1)) *
        Math.cos(degreesToRadians(lat2)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

class RotaService {
    /**
     * Calcula a distância, tempo estimado e custo de um serviço entre duas cidades.
     * @param {String} origemId - ID da cidade de origem.
     * @param {String} destinoId - ID da cidade de destino.
     * @returns {Object} - Objeto com distância (km), tempo estimado (min) e custo.
     */
    static async calcularRota(origemId, destinoId) {

        let distance = 0;
        let remetente = "";
        let destinatario = "";
        // Recupera as cidades pelo ID
        const origem = await CidadeService.getCidadeById(origemId);
        const destino = await CidadeService.getCidadeById(destinoId);

        if (!origem || !destino) {
            throw new Error("Cidade de origem ou destino não encontrada");
        }

        remetente = origem.nome + ", " + origem.uf;
        destinatario = destino.nome + ", " + destino.uf;

        // Verifica se as coordenadas estão disponíveis
        if (
            origem.lat == null ||
            origem.lon == null ||
            destino.lat == null ||
            destino.lon == null
        ) {
            // Busca as coordenadas através da API do Nominatim
            var origemCoordenadas = await CidadeService.getCoordenadas(origem);
            var destinoCoordenadas = await CidadeService.getCoordenadas(destino);
            // Calcula a distância em km usando a fórmula de Haversine
             distance = haversineDistance( parseFloat(origemCoordenadas[0].lat),
                parseFloat(origemCoordenadas[0].lon),
                parseFloat(destinoCoordenadas[0].lat),
                parseFloat(destinoCoordenadas[0].lon));

            // Atualiza as coordenadas no banco de dados
        }else{
            distance = haversineDistance(Number(origem[0].lat),
                Number(origem[0].lon),
                Number(destino[0].lat),
                Number(destino[0].lon));
        }


        // Exemplo de cálculo de tempo: assumindo velocidade média de 60 km/h
        const averageSpeed = 60; // km/h
        const timeInHours = distance / averageSpeed;
        const timeInMinutes = Math.round(timeInHours * 60);

        // Exemplo de cálculo de custo: tarifa base + valor por km
        const baseCost = 5.0; // custo fixo em reais
        const costPerKm = 1.1; // custo por km
        const cost = baseCost + distance * costPerKm;



        return { remetente, destinatario , distance, timeInMinutes, cost };
    }
}

export default RotaService;