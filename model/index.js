let conn = require('./conn');
let tableName = 'user_internet';
module.exports = {
    addUser({username,userpwd},callback){
        let next = function () {
            conn.query(`insert into ${tableName}(order_id,
            name_furi,
            name_kan) 
            values ('${internet_type}',
            '${name_furi}',
            '${name_kan}',
            )`,function (error,filed,callback) {
                 if(error) throw error;
            })
        }
    }
};