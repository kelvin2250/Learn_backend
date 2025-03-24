const connection = require('../config/database')
const { getAllUsers, getUserById, updateUserById, deleteUserById } = require('../services/CRUDservice')

const getHomePage = async (req, res) => {
    const results = await getAllUsers();
    return res.render('../views/homePage', { listUsers: results });
}

const getABC = (req, res) => {
    res.send('Hello World abc!');
}

const getHello = (req, res) => {
    res.render('sample');
}

const postCreateUser = async (req, res) => {
    let { email, name, city } = req.body;
    console.log(email, name, city)

    let [results, fields] = await connection.query(
        `insert into Users (email, name, city) values (?, ?, ?) `, [email, name, city]
    )

    return res.send('create suceed :)')
}

const getCreateUsers = (req, res) => {
    return res.render('createUser.ejs');
}

const getUpdatePage = async (req, res) => {
    const userId = req.params.id;

    const data = await getUserById(userId);

    user = data && data.length > 0 ? data[0] : {};

    return res.render('edit.ejs', { userEdit: user })
};

const postUpdateUser = async (req, res) => {
    let { id, email, name, city } = req.body;
    await updateUserById(email, name, city, id);
    return res.send('updated suceed :)');
}

const postDeleteUser = async (req, res) => {
    const userId = req.params.id;

    const data = await getUserById(userId);

    user = data && data.length > 0 ? data[0] : {};

    return res.render('delete.ejs', { userEdit: user });
}

const postHandleRemoveUser = async (req, res) => {
    const userId = req.body.id;
    await deleteUserById(userId);
    res.redirect('/');
}
module.exports = {
    getHomePage,
    getABC,
    getHello,
    postCreateUser,
    getCreateUsers,
    getUpdatePage,
    postUpdateUser,
    postDeleteUser,
    postHandleRemoveUser
}


