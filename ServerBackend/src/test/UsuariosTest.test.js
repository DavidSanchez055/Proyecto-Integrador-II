const {FindAllUser, FindOneUser} = require('../repository/UserRepository.js');

const returnUsers = [
    {
        nombres: String,
        apellidos:"Sanchez Moreno",
        telefono: String,
        email:"davidf.sanchezm@unac.edu.co",
        edad: String,
        usuario: String,
        password: String
    }
]

const FindOneMock = {

}




jest.mock('../repository/UserRepository.js');

describe("Test Users Repository", ()=>{
    beforeEach(()=>{
    })

    it("should data Users", ()=>{
        FindAllUser.mockReturnValueOnce(returnUsers);
        const response = FindAllUser();

         expect(response).toBe(returnUsers)
    })
    it("should one only user", ()=>{
        const id = ;
        FindOneUser.mockReturnValueOnce((id)=>{
            FindOneMock
        });
        const response = FindOneUser(id);
        expect(response._id).toBe(FindOneMock._id);
        expect(response).not.toBeNull();
    })

    it("should data Users Model", ()=>{
        Response.message = returnUsers.message;
        Response.status = returnUsers.status;
        Response.result = returnUsers.result;

        FindAllUser.mockReturnValueOnce(Response);
        const response = FindAllUser();

        expect(response).toBe(Response);
    })
})