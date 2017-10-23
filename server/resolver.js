import crypto from 'crypto';
import {getFieldDef} from 'graphql';
import schema from './schema';
import dao from './dao';

var root = {
    getUser: async({id}, ctx, ql)=> {
        var user = await dao.getUserById(id);
        return user;
    },
    listUser: async() => {
        var users = await dao.listUser();
        return users;
    },
    addUser: async ({input}, ctx, ql) => {
        var user = await dao.addUser(input);
        return user;
    },
    deleteUser: async({id}) => {
        return await dao.deleteUser(id);
    },
    getClass: async({id}) => {
        var aClass = await dao.getClassById(id);
        return aClass;
    },
    getClassByName: async({name}) => {
        var aClass = await dao.getClassByName(name);
        return aClass;
    },
    addClass: async({input})=>{
        var aClass = await dao.addClass(input);
        return aClass;
    },
    updateClass: async({id, input})=>{
        var aClass = await dao.updateClass(id, input);
        return aClass;
    },
    deleteClass: async({id})=>{
        return await dao.deleteClass(id);
    },
    listClass: async()=> {
        return await dao.listClass();
    },
}

/*
var fdRoles = schema.getType('User').getFields()['roles'];
fdRoles.resolve = async (user)=>{
    console.log('roles resolve', user);
}
var ErrorType = schema.getType('Error');
ErrorType.isTypeOf = (val, ctx, info) => {
    console.log('isTypeOf:Error', val);
    return val && val.errcode;
}
var UserType = schema.getType('User');
UserType.isTypeOf = (val, ctx, info ) => {
    console.log('isTypeOf:User', val);
    return val && val.id;
}
var CreateUserResultType = schema.getType('CreateUserResult');
CreateUserResultType.resolveType = function(val, ctx, info ){
    console.log('resolveType', val);
    if ( val && val.errcode ) {
        return schema.getType('Error');
    }
    else {
        return schema.getType('User');
    }
    return true;
}
*/
export default root;
