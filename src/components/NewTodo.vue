<template>
  <b-form @submit="AddNewTodo">
    <b-form-group
      label="Add new todo"
      label-for="newTodo"
    >
      <b-form-input
        id="newTodo"
        placeholder="What needs to be done"
        v-model="todo"
        required
      >        
      </b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Add New Todo</b-button>
  </b-form>
</template>
<script>
// import actions
import { mapGetters, mapActions } from 'vuex'

export default {
  name: "NewTodo",
  data() {
    return {
      // data for binding to the input text
      todo: ''
    }
  },
  computed: mapGetters(['user']),
  methods: {
    ...mapActions(['addTodo']),
    /**
     * Form submit hanlder
     */
    AddNewTodo (event) {
      event.preventDefault();
      if (this.todo && this.todo !== "") {
        // update data base
        this.addTodo({
          user: this.user.user,
          title: this.todo
        })                  
        // clear todo
        this.todo = "";
      }      
    }
  }
}
</script>
<style>
  
</style>