// import * as Yup from 'yup';
import Student from '../models/Student';

class StudentController {
  async store(req, res) {
    const alreadyExists = await Student.findOne({
      where: { email: req.body.email },
    });

    if (alreadyExists) {
      return res.status(400).json({
        error: 'Student already exists',
      });
    }

    const { id, name, email } = await Student.create(req.body);

    return res.json({ id, name, email });
  }
}

export default new StudentController();
