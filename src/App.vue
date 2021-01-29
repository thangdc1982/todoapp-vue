<template>
  <div class="mt-5">
    <img alt="Vue logo" src="./assets/logo.png"> 
      <login></login>
      <div v-if="user">
        <b-container>        
          <new-todo></new-todo>      
        </b-container>
        <todo-list></todo-list>   
      </div>
  </div>
</template>

<script>
import NewTodo from './components/NewTodo.vue'
import TodoList from './components/TodoList.vue'
import { mapGetters } from 'vuex'
import Login from './components/Login.vue'

export default {
  name: 'App',
  computed: mapGetters(['user']),
  components: {
    NewTodo,
    TodoList,      
    Login
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
</style>
