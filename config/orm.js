//import the connection from the connection file
const connection = require('./connection');
//import the util file
const util = require('util');
//create a promise using the util 
const queryAsync = util.promisify(connection.query).bind(connection);
const orm = {
        //function to select all the records from the table
        selectAll: async function (table) {
                try {
                        const queryString = "select * from ??";
                        const result = await queryAsync(queryString, [table]);
                        return (result);
                }
                catch
                {
                        console.log("error");
                }
        },
        //function to insert the records into the table
        insertOne: async function (table, oneValue, twoValue) {
                try {
                        const queryString = "insert into ??(burger_name,devoured)values(?,?)";
                        const result = await queryAsync(queryString, [table, oneValue, twoValue]);
                        return (result);
                }
                catch
                {
                        console.log("error");
                }
        },

        //function to update  the records into the table
        updateOne: async function (table, whereValue, idValue) {
                try {
                        const queryString = "update ?? set devoured=? where id=?";
                        const result = await queryAsync(queryString, [table, whereValue, idValue]);
                        return (result);
                }
                catch
                {
                        console.log("error");
                }
        }
};
//export the orm
module.exports = orm;