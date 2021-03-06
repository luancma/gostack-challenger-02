import Sequelize from 'sequelize';

import databaseConfig from '../config/database';

import Student from '../app/models/Student';
import User from '../app/models/User';

const models = [Student, User];

class Database {
  constructor() {
    this.connection = new Sequelize(databaseConfig);

    this.init();
  }

  init() {
    models.forEach(model => model.init(this.connection));
  }
}

export default new Database();
