const test = require("supertest")

const server = require('./api/server');


    // Test that notes are returned from the endpoint
    describe('getting users', () =>{
        it('should return a status 400', () =>{
            return test(server)
            .get('/api/jokes')
            .then(res =>{
                expect(res.status).toBe(400);
            });
        });
        it('should return json object', () =>{
            return test(server)
            .get('/api/jokes')
            .then(res =>{
                expect(res.type).toMatch(/json/i);
            });
        });
    })
    describe('Log in', () =>{
        it('should return a status 201', () =>{
            return test(server)
            .post('/api/auth/login')
            .send({username:"josh disney",
            password:"password"
        })
            .then(res =>{
                expect(res.status).toBe(200);
            });
        });
        it('should return json object', () =>{
            return test(server)
            .post('/api/auth/login')
            .send({username:'New Test',password:"something that isn't a quiz"})
            .then(res =>{
                expect(res.type).toMatch(/json/i);
            });
        })
    })
    describe('Register a new User', () =>{
        it('should return a status 201', () =>{
            return test(server)
            .post('/api/auth/register')
            .send({username:'NewTest',password:"something that isn't a quiz"})
            .then(res =>{
                expect(res.status).toBe(201);
            });
        });
        it('should return json object', () =>{
            return test(server)
            .post('/api/auth/register')
            .send({username:'New Test',password:"something that isn't a quiz"})
            .then(res =>{
                expect(res.type).toMatch(/json/i);
            });
        })
    })
