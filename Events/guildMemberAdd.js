const role = require('../Configs/roles.json');

module.exports = (Bot, member) =>{

    member.roles.add(role.Member);
}