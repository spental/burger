//import the orm file
const orm = require('../config/orm');
const burger = {
        //create the function to select all the records from burger table
        selectAll: async function (table) {
                try {
                        const result = await orm.selectAll(table);
                        return (result);
                }
                catch
                {
                        console.log("error");
                }
        },

        //create the function to insert the records into burger table
        insertOne: async function (table, oneValue, twoValue) {
                try {

                        const result = await orm.insertOne(table, oneValue, twoValue);
                        return (result);
                }
                catch
                {
                        console.log("error");
                }
        },
        //create the function to update the records into burger table
        updateOne: async function (table, whereValue, idValue) {
                try {

                        const result = await orm.updateOne(table, whereValue, idValue);
                        return (result);
                }
                catch
                {
                        console.log("error");
                }
        }
};
module.exports = burger;