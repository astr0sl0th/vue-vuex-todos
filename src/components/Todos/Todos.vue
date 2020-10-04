<template>
  <section class="main" v-show="todos.length" v-cloak>
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      v-model="allDone"
    />
    <label for="toggle-all"></label>
    <ul class="todo-list">
      <Todo v-for="todo in todos" :key="todo.id" v-bind:todo="todo"/>
    </ul>
  </section>
</template>

<script>
import Todo from '../Todo/Todo';
export default {
  name: 'Todos',
  components: { Todo },
  computed: {
    todos() {
      return this.$store.state.todos.todos
    }
  },
  methods: {
    allDone: () => {

    }
  }
};
</script>