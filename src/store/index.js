import { createStore } from 'vuex'
import { todosModule } from "@/store/modules/todos.module";

export default createStore({
  modules: {
    todos: todosModule
  }
})
