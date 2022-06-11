const SavingRecord = require('../models/SavingRecord');

const SavingRecordController = {
  all: async (request, h) => {
    const { query } = request;
    // need id of user

    const saving_records = await SavingRecord.all(query.id);

    return h.response({
      error: false,
      statusCode: 200,
      message: 'success',
      data: {
        saving_records,
      },
    });
  },

  get: async (request, h) => {
    const { id } = request.params;

    const saving_record = await SavingRecord.get(id);

    return h.response({
      error: false,
      statusCode: 200,
      message: 'success',
      data: {
        saving_record,
      },
    });
  },

  store: async (request, h) => {
    const { payload } = request;
    // need id of user

    const isExist = await SavingRecord.isExist({
      user_id: payload.user_id,
      saving_plan_id: payload.saving_plan_id,
    });

    if (isExist.length > 0) {
      console.log('exist');
    }

    // const saving_record = await SavingRecord.create({
    //   user_id: payload.user_id,
    //   saving_plan_id: payload.saving_plan_id,
    //   save: payload.save,
    // });

    // return h.response({
    //   error: false,
    //   statusCode: 200,
    //   message: 'success',
    //   data: {
    //     saving_record,
    //   },
    // });
  },

  update: async (request, h) => {
    const { payload } = request;
    // need id of user

    const saving_record = await SavingRecord.update({
      id: payload.id,
      user_id: payload.user_id,
      saving_plan_id: payload.saving_plan_id,
      save: payload.save,
    });

    return h.response({
      error: false,
      statusCode: 200,
      message: 'success',
      data: {
        saving_record,
      },
    });
  },

  delete: async (request, h) => {
    const { query } = request;
    // need id of user

    const saving_record = await SavingRecord.delete(query.id);

    return h.response({
      error: false,
      statusCode: 200,
      message: 'success',
      data: {
        saving_record,
      },
    });
  },
};

module.exports = SavingRecordController;
