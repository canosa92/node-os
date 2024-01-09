import os from 'os';

function getNetworkData() {
    const interfaces = os.networkInterfaces();
    const redes = {};

    for (const [iface, details] of Object.entries(interfaces)) {
       redes[iface] = details.map((info) => ({
            Familia: info.family,
            Dirección: info.address,
            Interno: info.internal
        }));
    }

    return redes;
}

module.exports = { getNetworkData };