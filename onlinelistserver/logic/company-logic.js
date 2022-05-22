const companyDal = require('../dal/company-dal');


const getAllCompanies = async () => {

    const allCompaniesData = await companyDal.getAllCompanies();
    return allCompaniesData;

}


module.exports = {
    getAllCompanies,
}