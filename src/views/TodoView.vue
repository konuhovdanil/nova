<template>
  <div class="todo-view">
    <header-component/>
    <todo-list :todos="todos"/>
    <teleport to="body">
      <todo-form v-if="getTodoFormState"/>
    </teleport>
  </div>
</template>

<script>
import HeaderComponent from "@/components/HeaderComponent";
import TodoList from "@/components/TodoList";
import { mapGetters } from 'vuex'
import TodoForm from "@/components/TodoForm";

export default {
  name: "TodoView",
  components: {
    TodoForm,
    TodoList,
    HeaderComponent
  },
  computed: {
    ...mapGetters({
      todos: 'todos/sortedTodos',
      getTodoFormState: 'todos/getTodoFormState'
    })
  }
}
</script>

<style scoped>
.todo-view {
  background: #fff;
  margin: 0 auto;
  max-width: 1024px;
}
</style>
