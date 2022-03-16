const { User } = require('../../db/models');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = {
    signin: async(req, res, next) => {
        try {
            const { email, password } = req.body;
            const checkUser = await User.findOne({ where: { email: email } });


            if (checkUser) {
                const checkPassword = bcrypt.compareSync(password, checkUser.password);

                if (checkPassword) {
                    const token = jwt.sign({
                        user: {
                            id: checkUser.id,
                            name: checkUser.name,
                            email: checkUser.email,
                        },
                    }, 'secret', { expiresIn: '1h' });
                    res.status(200).json({ message: 'Success signin', data: token });
                } else {
                    res.status(403).json({ message: 'Invalid password' });
                }

            } else {
                res.status(403).json({ message: 'Invalid email' });
            }
        } catch (err) {
            console.log(err);
            next(err);
        }
    }
}