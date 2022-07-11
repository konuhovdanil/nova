export const todosModule = {
    state: () => ({
        todos: [],
        todoToEdit: null,
        todoFormState: false
    }),
    getters: {
        getTodos(state) {
            return state.todos
        },
        getTodoToEdit(state) {
            return state.todoToEdit
        },
        getTodoFormState(state) {
            return state.todoFormState
        },
        sortedTodos(state) {
            return state.todos.sort((firstTodo, secondTodo) => (firstTodo.isComplete === secondTodo.isComplete) ? 0 : firstTodo.isComplete ? 1 : -1)
        }
    },
    mutations: {
        addTodo(state, todo) {
            state.todos = [...state.todos, todo]
            state.todoFormState = false
        },
        removeTodo(state, todoId) {
            state.todos = state.todos.filter(todo => todo.id !== todoId)
        },
        setTodoToEdit(state, todoToEdit) {
            state.todoToEdit = todoToEdit
        },
        setTodoFormState(state, todoFormState) {
            state.todoFormState = todoFormState
        },
        editTodo(state, editedTodo) {
            const editedTodoId = state.todos.findIndex(todo => todo.id === editedTodo.id)
            state.todos[editedTodoId] = editedTodo
            state.todoFormState = false
            state.todoToEdit = null
        },
        completeTodo(state, todoId) {
            const completedTodoId = state.todos.findIndex(todo => todo.id === todoId)
            state.todos[completedTodoId].isComplete = true
        }
    },
    namespaced: true
}
