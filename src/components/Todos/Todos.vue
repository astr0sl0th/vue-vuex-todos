<template>
  <section class="main" v-show="todos.length" v-cloak>
    <input
      id="toggle-all"
      class="toggle-all"
      type="checkbox"
      @click="toggleCompleteAll"
    />
    <label for="toggle-all"></label>
    <ul class="todo-list">
      <Todo v-for="todo in todos" :key="todo.id" v-bind:todo="todo" />
    </ul>
  </section>
</template>

<script>
import Todo from '../Todo/Todo';
export default {
  name: 'Todos',
  components: { Todo },
  data() {
    return {
      allDone: '',
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos
    },
  },
  methods: {
    toggleCompleteAll() {
      return this.$store.dispatch('toggleCompleteAll')
    },
  }
};
</script>
