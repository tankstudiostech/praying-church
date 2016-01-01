module.exports = {
    secret: '',
    mongoCn: '',
    port: process.env.PORT || 5000,
    bypassAuth: true,
    tokenExpiration: 24 * 60 * 60
};