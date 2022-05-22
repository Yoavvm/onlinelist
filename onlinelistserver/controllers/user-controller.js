const userLogic = require("../logic/user-logic");
const express = require('express');

const router = express.Router();

router.get('/:id', async (request, response) => {
    console.log(request.params.id)
    try {
        let allUserData = await userLogic.getAllUsers(request.params.id);
        response.json(allUserData)
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message);
    }
})

router.patch('/', async (request, response) => {
    

    try {
        await userLogic.toggleOnline(request.body);
        response.json('user status changed')
    }
    catch (e) {
        console.error(e);
        response.status(600).send(e.message);
    }
})

module.exports = router;