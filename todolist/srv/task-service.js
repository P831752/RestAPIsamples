const cds = require("@sap/cds")

class TaskService extends cds.ApplicationService {
    init() {
        this.on("getToDos", async (req) => {
            const apiconnect = await cds.connect.to("jsonplaceholder");
            return apiconnect.tx(req).get("/todos");
        });

        this.on("createToDo", async (req) => {
            const todoApi = await cds.connect.to("jsonplaceholder");
            return todoApi.tx(req).post('/todos',req.data);
        });
    }
}

module.exports = {
    TaskService
}

//other Way

// module.exports = async function(req, res) {
//     const apiconnect = await cds.connect.to("jsonplaceholder");

//     this.on("getToDos", async (req) => {
//         console.log(req.data);
//         const endPoint = req.data.id ? `/todos/${req.data.id}`:`/todos`;
//         console.log("***endPoint****:",endPoint);
//         return await apiconnect.tx().get(endPoint);
//     });

//     this.on("createToDos", async (req)=>{
//         return await apiconnect.tx().post('/todos',req.data);
//     });
// }