<template>
  <b-container fluid class="ml-3">
    <h1>Todo list goes here</h1>
    <ul>
      <li v-for="todo in allTodos" :key="todo.id">
        <todo-item :title="todo.title" :completed="todo.completed" :id="todo.id" ></todo-item>        
      </li>
    </ul>
  </b-container>
</template>
<script>
import TodoItem from './TodoItem.vue'
// vuex actions and getters
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'TodoList',
  components: {
    TodoItem
  },
  computed: mapGetters(['allTodos', 'user']),
  methods: {
    ...mapActions(['fetchTodos'])
  },
  created() {
    this.fetchTodos(this.user.user);
  }
}
</script>
<style scoped>
ul li {
  list-style: none;
}
</style>