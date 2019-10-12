import User from '../models/User';

class UserController {
  async store(req, res) {
    const alreadyExists = await User.findOne({
      where: req.body.email,
    });

    if (alreadyExists) {
      return res.status(400).json({
        error: 'User already exists',
      });
    }

    const { id, name, email } = await User.create(req.body);

    return res.json({
      id,
      name,
      email,
    });
  }
}

export default new UserController();
