let URL = 'https://kiq.herokuapp.com';

if (window.location.href === 'http://localhost:8080/') {
  URL = 'http://localhost:3000';
}
module.exports = URL;