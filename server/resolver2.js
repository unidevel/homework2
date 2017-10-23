import crypto from 'crypto';
import {getNamedType} from 'graphql';
import dao from './dao';

class User{
    constructor(){
        this.id = crypto.randomBytes(10).toString('hex');
        this.roles = [];
    }
}
var root = {
    hello: () => {
        return "hello world!"
    },
    test: ({x}) => {
        return x+100;
    },
    accounts: () => {
        return [];
    },
    testCreate: ({x}) => {
        return 'test'+x;
    },
    createAccount: ({input}, ctx, ql) => {
        var schema = ql.schema;
        var Role = schema.getType('Role');
        var UserRole = Role.getValue('User');
        var account = new Account();
        account.name = input.name;
        account.password = input.password;
        account.age = input.age || 0;
        account.gender = input.gender || 0;
        account.roles = [UserRole];
        account.id = crypto.randomBytes(10).toString('hex');
        console.log('account:', account);
        return account;
    }
}

export default root;
