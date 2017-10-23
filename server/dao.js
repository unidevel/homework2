import db from './db';

class User {
    constructor(data){
        Object.assign(this, data);
    }

    async roles(){
        return dao.getUserRoles(this);
    }

    async classes(){
        return dao.getUserClasses(this);
    }
}

class Class {
    constructor(data) {
        Object.assign(this, data);
    }

    async admins() {
        var _admins = await dao.getClassAdmins(this);
        return _admins;
    }
}

class DAO {
    constructor(){}
    async addUser(userInput) {
        var existUser = await db.getUserByNickname(userInput.nickname);
        if ( existUser ) return null
        var user = await db.insertUser(userInput);
        return user;
    }

    async deleteUser(id) {
        return await db.deleteUser(id);
    }

    async listUser(){
        var users = await db.listUser() || [];
        return users.map((u)=>new User(u));
    }

    async addClass(input){
        var existClass = await this.getClassByName(input.name);   
        var classData = await db.insertClass(input);
        var aClass = new Class(classData);
        return aClass
    }

    async getClass(id) {
        var aClass = await db.getClass(id);
        return new Class(aClass);
    }

    async getClassByName(name) {
        var aClass = await db.getClassByName(name);
        return new Class(aClass);
    }

    async listClass() {
        var classes = await db.listClass() || [];
        return classes.map((cls)=>new Class(cls));
    }

    async getUserById(id) {
        var userData = await db.getUserById(id);
        var user = new User(userData);
        return user;
    }

    async getUserByName(name) {
        return data.users.find((user)=>user.name == name);
    }

    async getUserRoles(user) {
        var roles = await db.getUserRoles(user);
        return roles;
    }
    async getUserClasses({id}) {
    }
}

var dao = new DAO();
export default dao;
