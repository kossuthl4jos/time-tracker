const apiHost = process.env.API_HOST || 'http://localhost:3001';
console.log('Using API host ' + apiHost);

module.exports = { apiHost };
