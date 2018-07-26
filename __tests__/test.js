const Request = require('supertest');
const mongoose = require('mongoose');
const User = require('../api/models/userModels'); 
const { server } = require('../server');


describe('Testing auth route', () => {

    //connect to mongoDB and clear users
    // beforeAll(async () => {
    //     mongoose.connect('mongodb://localhost/auth-users');
    //     await User.remove({});
    // });

    // //clear users and disconnect from mongoDB
    // afterAll(async () => {
    //     User.remove({});
    //     await mongoose.disconnect();
    // });  

it('should give us all the jokes', async () => {
    const response = await Request(server)
    .post('/api/login')
    .send({
      "username": "mike",
      "password": "apple"
    })
    .set('Accept', 'application/json')
    

    const { token } = response.body;
console.log("we should have the token now");
    const response2 = await Request(server)
        .get('./api/jokes')
        .set('Authorization', `Bearer ${token}`)

    const { body } = response2;
    console.log(body)
})

    

});