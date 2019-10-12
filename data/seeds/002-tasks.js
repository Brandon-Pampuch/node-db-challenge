
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        { id: 1, description: 'design cover', notes: 'choose colors etc.', project_id: 1, completed: false },
        { id: 2, description: 'write music', notes: 'place the notes in melodic order', project_id: 1, completed: false },
        { id: 3, description: 'print and ship', notes: 'print and send out to people', project_id: 1, completed: false },
        { id: 4, description: 'buy materials', notes: 'get wood and nails', project_id: 2, completed: false },
        { id: 5, description: 'put together', notes: 'assemble the house', project_id: 2, completed: false },
        { id: 6, description: 'admire work', notes: 'stand in glory of your accomplishment', project_id: 2, completed: false },
        { id: 7, description: 'save money', notes: 'save a LOT of money', project_id: 3, completed: false },
        { id: 8, description: 'choose land', notes: 'pref. somewhere on an island', project_id: 3, completed: false },
        { id: 9, description: 'give money', notes: 'give the man your money', project_id: 3, completed: false },

      ]);
    });
};
