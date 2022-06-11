const Saving = require('../models/Saving');

const SavingController = {
  get: async (request, h) => {
    const { query } = request;
    // need id of user

    const savings = await Saving.getAllByUserId(query.id);

    return h.response({
      error: false,
      statusCode: 200,
      message: 'success',
      data: {
        savings,
      },
    });
  },

  store: async (request, h) => {
    const { payload } = request;
    // need id of user

    const saving = await Saving.create({
      user_id: payload.user_id,
      name: payload.name,
      description: payload.description,
      goal_amount: payload.goal_amount,
      due_date: payload.due_date,
      type: payload.type,
    });

    return h.response({
      error: false,
      statusCode: 200,
      message: 'success',
      data: {
        saving,
      },
    });
  },

  update: async (request, h) => {
    const { payload } = request;
    // need id of user

    const saving = await Saving.update({
      id: payload.id,
      user_id: payload.user_id,
      name: payload.name,
      description: payload.description,
      goal_amount: payload.goal_amount,
      due_date: payload.due_date,
      type: payload.type,
    });

    return h.response({
      error: false,
      statusCode: 200,
      message: 'success',
      data: {
        saving,
      },
    }).code(200);
  },

  delete: async (request, h) => {
    const { query } = request;
    // need id of user

    const saving = await Saving.delete(query.id);

    return h.response({
      error: false,
      statusCode: 200,
      message: 'success',
      data: {
        saving,
      },
    }).code(200);
  },
};

module.exports = SavingController;