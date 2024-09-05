const ipInfo = require("ipinfo")

const getUserLocation = async () => {
    return new Promise((resolve, reject) => {
        ipInfo((err, cLoc) => {
            if (err) {
                reject(err);
            } else {
                resolve(cLoc);
            }
        });
    });
};


module.exports = getUserLocation;
