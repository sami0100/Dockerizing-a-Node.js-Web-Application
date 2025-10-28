const db = require('./database');

beforeAll(async () => {
  await db.sequelize.sync({ force: true });
});

test('create person', async () => {
  const person = await db.Person.create({ id: 1, firstName: 'Bobbie', lastName: 'Draper' });
  expect(person.id).toEqual(1);
});

test('get person', async () => {
  const person = await db.Person.findByPk(1);
  expect(person.firstName).toEqual('Bobbie');
  expect(person.lastName).toEqual('Draper');
});

test('delete person', async () => {
  await db.Person.destroy({ where: { id: 1 } });
  const person = await db.Person.findByPk(1);
  expect(person).toBeNull();
});
