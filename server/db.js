import crypto from 'crypto';
var data = {
    users: [
        {
            id: 'admin',
            name: 'admin',
            password: '12345678',
            _roles: '0'
        }
    ],
    roles: [ 'Admin', 'ClassAdmin' ],
    classes: []
};

function genId(){
    return crypto.randomBytes(10).toString('hex');
}

function hash(data){
    return crypto.createHash('sha256').update(data).digest('hex');
}

class DB {
    constructor(){
    }
    async insertUser(userInput) {
        var user = {};
        Object.assign(user, userInput);
        user.id = genId();
        user.password = hash(user.password);
        data.users.push(user);
        return user;
    }
    async updateUser(user) {
        var index = data.users.findIndex((u)=>u.id == user.id)
        if ( index >= 0 )
            data.users[index] = user;
    }
    async deleteUser(id) {
        var index = data.users.findIndex((u)=>u.id == id)
        if ( index >= 0 ) {
            data.users.splice(index, 1);
            return true;
        }
        else {
            return false;
        }
    }
    async getUserById(id) {
        var index = data.users.findIndex((u)=>u.id == id)
        return data.users[index]
    }
    async listUser(){
        return data.users;
    }
    async getUserByNickname(nickname) {
        var index = data.users.findIndex((u)=>u.nickname== nickname)
        return data.users[index]
    }
    async getUserRoles(user) {
        var roles = [];
        var ids = (user._roles || '').split(',');
        ids.forEach((id)=>data.roles[id] && roles.push(data.roles[id]));
        return roles;
    }
    async insertClass(input) {
        var classData = {
            id: genId(),
            ctime: new Date().getTime(),
            ...input
        }
        data.classes.push(classData);
        return classData;
    }
    async getClass(id) {
        return data.classes.find((cls)=>cls.id == id);
    }
    async getClassByName(name) {
        return data.classes.find((cls)=>cls.name == name);
    }
    async listClass() {
        return data.classes;
    }
}

var db = new DB();
export default db;
