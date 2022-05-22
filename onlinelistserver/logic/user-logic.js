const userDal = require('../dal/user-dal');


const getAllUsers = async (id) => {

    const allUserData = await userDal.getAllUsers(id);
    return allUserData;

}

const toggleOnline = async (statusData) => {

    await userDal.toggleOnline(statusData);
    return;

}


module.exports = {
    getAllUsers,
    toggleOnline,
    
}