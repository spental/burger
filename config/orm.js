
const connection = require('./connection');
const util = require('util');
const chalk = require('chalk');
 
const queryAsync = util.promisify(connection.query).bind(connection);
const orm = {
        //Select records
        selectAll: async function (table) {
                try {
                        const queryString = "select * from ??";
                        const result = await queryAsync(queryString, [table]);
                        return (result);
                }
                catch
                {
                        console.log(chalk.yellowBright.black("error"));
                }
        },
        //Insert record 
        insertOne: async function (table, oneValue, twoValue) {
                try {
                        const queryString = "insert into ??(burger_name,devoured)values(?,?)";
                        const result = await queryAsync(queryString, [table, oneValue, twoValue]);
                        return (result);
                }
                catch
                {
                        console.log(chalk.yellowBright.black("error"));
                }
        },

        //Update record
        updateOne: async function (table, whereValue, idValue) {
                try {
                        const queryString = "update ?? set devoured=? where id=?";
                        const result = await queryAsync(queryString, [table, whereValue, idValue]);
                        return (result);
                }
                catch
                {
                        console.log(chalk.yellowBright.black("error"));
                }
        }
};
module.exports = orm;