<template>
  <div class="todo-item">
    <div class="todo-item__info">
      <div class="todo-item__description row">
        <h5 class="col s10" :class="{ 'checked': todo?.isComplete }">
          {{ todo.description }}
        </h5>
        <p class="todo-item__checkbox col s2 right-align">
          <label>
            <input type="checkbox" class="filled-in" :checked="todo?.isComplete" :disabled="todo?.isComplete" @click="() => completeTodo(todo.id)"/>
            <span></span>
          </label>
        </p>
      </div>
      <div class="todo-item__bottom-content row">
        <div class="todo-item__lead-time col s2">
          {{ todo.leadTime }}
        </div>
        <div class="todo-item__tags col s10 right-align">
          <div class="chip" v-for="chip in todo.tags" :key="chip.tag">
            {{ chip.tag }}
          </div>
        </div>
      </div>
    </div>
    <div class="todo-item__buttons">
      <a class="waves-effect waves-light btn-small white black-text" @click="() => removeTodo(todo.id)"><i class="material-icons right grey-text">delete_forever</i>delete</a>
      <a class="waves-effect waves-light btn-small white black-text" @click="prepareTodoToEdit"><i class="material-icons right grey-text">cloud</i>edit</a>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: "TodoItem",
  props: {
    todo: Object
  },
  methods: {
    ...mapMutations({
      removeTodo: 'todos/removeTodo',
      setTodoToEdit: 'todos/setTodoToEdit',
      setTodoFormState: 'todos/setTodoFormState',
      completeTodo: 'todos/completeTodo',
    }),
    prepareTodoToEdit() {
      this.setTodoToEdit(this.todo)
      this.setTodoFormState(true)
    }
  }
}
</script>

<style scoped lang="scss">
.todo-item {
  border-bottom: 1px solid #e9e9e9;
  padding: 15px;

  &__info {
    margin-bottom: 15px;
  }

  &__description {
    margin: 0;
  }

  &__bottom-content {
    align-items: center;
    margin: 0;
  }

  &__buttons {
    display: flex;
    flex-direction: row;
    gap: 5px;
    justify-content: flex-end;
  }

  .checked {
    text-decoration: line-through;
    color: #9e9e9e;
  }
}
</style>
