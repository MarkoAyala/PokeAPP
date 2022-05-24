const { Pokemon, conn } = require('../../src/db.js');
const { expect } = require('chai');
var supertest = require("supertest-as-promised")(require("../../src/app.js"));
var model = require("../../controlers/getApiPokemones.js");

xdescribe('Pokemon model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Pokemon.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid name', () => {
        Pokemon.create({ name: 'Pikachu' });
      });
    });
  });
 
});
describe("/pokemons", function () {
  it("El GET funciona correctamente", function () {
    const pokemones = model.getAplicacionInfo()

    return supertest // supertest nos permite hacer y testear requests HTTP
      .get("/pokemons") // hacemos un request HTTP: GET a '/houses'
      .expect(200) // el codigo de status del response
      .expect("Content-Type", /json/) // podemos testear los headers
      .expect(function (res) {
        expect(res.body).to.eql(pokemones); // testeamos la respuesta con el body
      });
  });
});