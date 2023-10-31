describe("Test Users Controller", ()=>{
    beforeEach(()=>{
    })

    it("should data Users", async()=>{
        let req = mockRequest();
        let res = mockResponse();
        FindAllUser.mockReturnValueOnce(returnUsers);

        await FindAllUser(req,res);

         expect(res.status).toHaveBeenCalledWith(200)
    })
})