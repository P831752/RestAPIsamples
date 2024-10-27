service TaskService { 

    function getToDos() returns array of {
        userId: Integer;
        id: Integer;
        title: String;
        completed: Boolean;
    };

    action createToDo(userId: Integer, title: String, completed: Boolean)  returns {
        userId: Integer;
        title: String;
        completed: Boolean;
    }

}