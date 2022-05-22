const connection = require('./connection-wrapper');



const getAllCompanies = async () => {
    let sql = 'SELECT company_id AS companyId, company_name AS companyName FROM companies';

    const allCompaniesData = await connection.execute(sql)
    return allCompaniesData;
}

module.exports = {
    getAllCompanies
}