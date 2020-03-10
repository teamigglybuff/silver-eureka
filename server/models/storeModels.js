const { Pool } = require('pg')

// Connection string
const sqlURI = 'postgres://ubynxewf:WGXXZnrHXUp8DoIU8Jj5naXOMvmu56Ok@drona.db.elephantsql.com:5432/ubynxewf'

// Connection 
const pool = new Pool({ connectionString: sqlURI });

// Create the store table;
const createStore = 'CREATE TABLE IF NOT EXISTS store (id SERIAL PRIMARY KEY, item VARCHAR, price MONEY, category VARCHAR, era INT, stock INT, link VARCHAR, description VARCHAR)'

// Generate the table if the table doesn't exist
pool.query(createStore, (err) => {
  if (err) {
    console.log("Error in create table!")
  }
})


module.exports = {
  query: (text, params, callback) => {
    console.log("Executed query: ", text);
    return Pool.query(text, params, callback);
  }
}