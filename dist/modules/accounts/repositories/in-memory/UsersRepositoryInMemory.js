"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersRepositoryInMemory = void 0;

var _User = require("../../infra/typeorm/entities/User");

class UsersRepositoryInMemory {
  constructor() {
    this.users = [];
  }

  async create({
    driver_license,
    email,
    password,
    name
  }) {
    const user = new _User.User();
    Object.assign(user, {
      driver_license,
      email,
      password,
      name
    });
    this.users.push(user);
  }

  async findByEmail(email) {
    return this.users.find(user => user.email === email);
  }

  async findById(user_id) {
    return this.users.find(user => user.id === user_id);
  }

}

exports.UsersRepositoryInMemory = UsersRepositoryInMemory;