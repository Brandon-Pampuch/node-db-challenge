
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        { id: 1, description: 'guitars' },
        { id: 2, description: 'mics' },
        { id: 3, description: 'drums' },
        { id: 4, description: 'wood' },
        { id: 5, description: 'nails' },
        { id: 6, description: 'shingles' },
        { id: 7, description: 'money' },
        { id: 8, description: 'time' },
        { id: 9, description: 'more money' },

      ]);
    });
};
