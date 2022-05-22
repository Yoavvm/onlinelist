const companyLogic = require("../logic/company-logic");
const express = require('express');

const router = express.Router();

router.get('/', async (request, response) => {
    
    try {
        let allCompaniesData = await companyLogic.getAllCompanies();
        response.json(allCompaniesData);
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message);
    }
})

module.exports = router;