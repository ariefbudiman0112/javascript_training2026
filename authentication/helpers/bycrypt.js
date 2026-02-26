const bcrypt = require('bcrypt');
const saltRounds = 10;

const encryptPwd = (pwd) => {
    let result = bcrypt.hashSync(pwd, saltRounds);
    return result;
}

const comparePwd = (pwd, hashedPwd) => {
    let result = bcrypt.compareSync(pwd, hashedPwd);
    return result;
}

module.exports = {
    encryptPwd,
    comparePwd
}