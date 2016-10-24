
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('coffee').del()
    .then(function () {
      return Promise.all([
        // Inserts seed entries
        knex('coffee').insert({
          name: 'Dark and Stormy',
          roaster: 'Coast To Coast Toasty Roastery',
          origin: 'Colombia',
          roast: 'dark',
          caffeine: '100',
          decaf: 'false',
          price: '42',
          quantity: '10'
        }),
        knex('coffee').insert({
          name: 'Smooth Criminal',
          roaster: 'Coast To Coast Toasty Roastery',
          origin: 'Costa Rica',
          roast: 'medium',
          caffeine: '100',
          decaf: 'false',
          price: '42',
          quantity: '10'
        }),
        knex('coffee').insert({
          name: 'Green Dragon',
          roaster: 'Coast To Coast Toasty Roastery',
          origin: 'Ethiopia',
          roast: 'light',
          caffeine: '100',
          decaf: 'false',
          price: '42',
          quantity: '10'
        })
      ]);
    });
};
