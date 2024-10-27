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