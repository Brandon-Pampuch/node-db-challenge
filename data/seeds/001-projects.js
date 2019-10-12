
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, project: 'write a record', description: 'write' },
        { id: 2, project: 'build a house', description: 'build' },
        { id: 3, project: 'buy some land', description: 'buy' },

      ]);
    });
};
