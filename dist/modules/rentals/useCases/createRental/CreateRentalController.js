"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CreateRentalController = void 0;

var _tsyringe = require("tsyringe");

var _CreateRentalUseCase = require("./CreateRentalUseCase");

class CreateRentalController {
  async handle(request, response) {
    const user_id = request.user.id;
    const {
      car_id,
      expected_return_date
    } = request.body;

    const createRentalUseCase = _tsyringe.container.resolve(_CreateRentalUseCase.CreateRentalUseCase);

    const rental = await createRentalUseCase.execute({
      user_id,
      car_id,
      expected_return_date
    });
    return response.status(201).json(rental);
  }

}

exports.CreateRentalController = CreateRentalController;