const { faker } = require('@faker-js/faker');
const User = require('../../models/User');
const Saving = require('../../models/Saving');

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('saving_records').del();

  const users = await User.all();

  const savingRecords = [];

  for (let i = 0; i < users.length; i += 1) {
    const user = users[i];

    // eslint-disable-next-line no-await-in-loop
    const saving = await Saving.all(user.id);

    const savingRecord = {
      user_id: user.id,
      saving_id: saving.id,
      amount: faker.finance.amount(saving.min_amount, saving.max_amount),
    };

    savingRecords.push(savingRecord);
  }

  await knex('saving_records').insert(savingRecords);
};
