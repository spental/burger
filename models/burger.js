const orm = require('../config/orm');
const chalk = require('chalk');
const burger = {
        //Select all the records from burger table
        selectAll: async function (table) {
                try {
                        const result = await orm.selectAll(table);
                        return (result);
                }
                catch
                {
                        console.log(chalk.yellowBright.black("error"));
                }
        },

        //Insert records into burger table
        insertOne: async function (table, oneValue, twoValue) {
                try {

                        const result = await orm.insertOne(table, oneValue, twoValue);
                        return (result);
                }
                catch
                {
                        console.log(chalk.yellowBright.black("error"));
                }
        },
        //Update the records in the burger table
        updateOne: async function (table, whereValue, idValue) {
                try {

                        const result = await orm.updateOne(table, whereValue, idValue);
                        return (result);
                }
                catch
                {
                        console.log(chalk.yellowBright.black("error"));
                }
        }
};
module.exports = burger;