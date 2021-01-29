<template>
  <b-form>
    <b-row>
      <b-col cols="11">
        <b-form-checkbox switch size="lg" :checked="completed" 
            @change="toggleComplete">                    
          <label :class="{complete: completed}">{{title}}</label>      
        </b-form-checkbox>       
      </b-col>      
      <b-col cols="1">
        <b-icon icon="trash" class="hover-trash" @click="removeTodo"></b-icon>
      </b-col>
    </b-row>
    
  </b-form>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'TodoItem',
  props: {
    id: String, // The todo item key
    title: String, // The title description of the todo item
    completed: Boolean // indicating if the todo item has been completed
  },
  computed: mapGetters(['user']),
  methods: {
    ...mapActions(['toggleCompleted', 'deleteTodo']),
    toggleComplete () {
      // change the status of the todo item
      this.toggleCompleted({
        user: this.user.user,
        id: this.id,
        completed: !this.completed
      })
    },
    removeTodo () {
      // delete the todo from the state collection
      this.deleteTodo({
        user: this.user.user,
        id: this.id
      });
    }
  }
}
</script>
<style scoped>
.complete {
  text-decoration: line-through;
}

.hover-trash:hover {
  color: red;
}

.row {
  border-bottom: 1px solid gray;
}
</style>