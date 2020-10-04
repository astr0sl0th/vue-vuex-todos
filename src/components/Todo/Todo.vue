<template>
  <li
    class="todo"
    :class="{ completed: todo.completed, editing: todo == editedTodo }"
  >
    <div class="view">
      <input class="toggle" type="checkbox" v-model="todo.completed" />
      <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
      <button class="destroy" @click="removeTodo(todo)"></button>
    </div>
    <input
      class="edit"
      type="text"
      v-model="todo.title"
      v-todo-focus="todo == editedTodo"
      @blur="doneEdit(todo)"
      @keyup.enter="doneEdit(todo)"
      @keyup.esc="cancelEdit(todo)"
    />
  </li>
</template>

<script>
export default {
  name: 'Todo',
  props: {
    todo: {
      id: Number,
      title: String,
      completed: Boolean,
    },
  },
  computed: {
    editedTodo() {
      return this.$store.state.todos.editedTodo;
    },
  },
  directives: {
    'todo-focus': function(el, binding) {
      if (binding.value) {
        el.focus();
      }
    },
  },
  methods: {
    removeTodo(todo) {
      return this.$store.dispatch('todos/removeTodo', todo, { root: true });
    },

    editTodo(todo) {
      return this.$store.dispatch('todos/editTodo', todo, { root: true });
    },
    doneEdit(todo) {
      return this.$store.dispatch('todos/doneEdit', todo, { root: true });
    },

    cancelEdit(todo) {
      return this.$store.dispatch('todos/cancelEdit', todo, { root: true });
    },
  },
};
</script>
