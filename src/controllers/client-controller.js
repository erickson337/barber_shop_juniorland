const clientService = require('../services/client-service')

const index = async () => {
    return clientService.index()
}

module.exports = {
    index
}