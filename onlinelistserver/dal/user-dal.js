const connection = require('./connection-wrapper');



const getAllUsers = async (id) => {
    let sql = 'SELECT user_id AS userId, user_is_online AS isOnline, user_name AS userName, company_id AS CompanyId'
        + ' FROM users WHERE company_id = ?';
    let params = [id]    
    const allUsersData = await connection.executeWithParameters(sql, params)
    return allUsersData;
}
const toggleOnline = async (statusData) => {
    console.log(statusData)
    let sql = 'UPDATE users SET user_is_online = ? WHERE user_id = ?';
    let params = [statusData.status, statusData.userId];
    await connection.executeWithParameters(sql, params)
    return;
}


module.exports = {
    getAllUsers,
    toggleOnline,
}