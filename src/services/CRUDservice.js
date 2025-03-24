const connection = require("../config/database");

const getAllUsers = async () => {
    let [results, fields] = await connection.query('select * from Users');
    return results;
}

const getUserById = async (userId) => {
    let [results, fields] = await connection.query('SELECT * FROM Users WHERE id = ?', [userId]);

    return results;
}

const updateUserById = async (email, name, city, id) => {
    let [results, fields] = await connection.query(
        `update Users set email = ?, name = ?, city = ? where id = ?`, [email, name, city, id]
    );
}

const deleteUserById = async (userId) => {
    let [results, fields] = await connection.query(
        `delete from Users where id = ?`, [userId]
    );
    // await connection.query(`UPDATE Users SET id = id - 1 WHERE id > ?`, [userId]);
}

module.exports = {
    getAllUsers,
    getUserById,
    updateUserById,
    deleteUserById
}