import db from '../firebase'

// State declaration
const state = {
  /**
   * each todo item will have the format
   * {
   *  id: String,
   *  title: String,
   *  completed: Boolean
   * }
   */
  todos: []
};

// Getters
const getters = {
  // Get all todo items in the current state
  allTodos: state => state.todos
};

// actions
const actions = {
  /**
   * Loading todos   
   * This is fetch data from database
   */
  fetchTodos ({commit}, user) {        
    db.collection('user')
      .doc(user.uid)
      .collection('todos')
      .onSnapshot(snapshot => {
        commit('setTodos', snapshot.docs.map(doc => {
          return {
            id: doc.id,
            doc: doc.data()
          }
        }));
      })    
  },
  /**
   * Add a new todo action
   * This is fired when the user submit the form add a new todo 
   * @param {String} payload - The title string of the the new todo
   */
  addTodo({ commit}, payload) {
    const uid = payload.user.uid;
    const title = payload.title;

    const newtodo = {
      title,
      completed: false
    };

    db.collection('user')
      .doc(uid)
      .collection('todos')
      .add(newtodo)
      .then(docRef => {
        commit('addTodo', {
          id: docRef.id,
          data: newtodo
        });
      }) 
  },
  /**
   * Update the status of the todo item in the state
   * @param {Object} payload - The object contains
   * - the id to identify the todo item in the collection list
   * - completed property to update the status of the todo item
   */
  toggleCompleted ({commit}, payload) {
    const uid = payload.user.uid;
    const id = payload.id;
    const completed = payload.completed;
    db.collection('user')
      .doc(uid)
      .collection('todos')
      .doc(id)
      .update({
        completed: completed
      })
    commit('toggleCompleted', {
      id,
      completed
    });
  },
  /**
   * 
   * @param {*} param0 
   * @param {Number} payload - The number id to identify the todo item in the collection
   */
  deleteTodo ({commit}, payload) {
    const uid = payload.user.uid;
    const id = payload.id;
    db.collection('user')
      .doc(uid)
      .collection('todos')
      .doc(id)
      .delete();
    commit('deleteTodo', id);
  }
};

// mutations
const mutations = {
  setTodos: (state, todos) => {    
    state.todos = todos.map(todo => {
      return {
        id: todo.id,
        title: todo.doc.title,
        completed: todo.doc.completed
      }
    });
  },
  addTodo: (state, {id, data}) => {      
    console.log('addTodo');
    const newtodo = {
      id,
      title: data.title,
      completed: data.completed
    };  
    const oldTodos = [...state.todos];
    const index = oldTodos.findIndex(todo => todo.id === id);    
    // adding new todo the list
    if (index < 0) {
      state.todos.unshift(newtodo); // = [newtodo, ...state.todos];
    }
    
    console.log(state.todos);
  },
  toggleCompleted: (state, {id, completed}) => {
    const index = state.todos.findIndex((todo) => todo.id === id);
    if (index >= 0) {
      state.todos[index].completed = completed;
    }
  },
  deleteTodo: (state, id) => {
    const index = state.todos.findIndex((todo) => todo.id === id);
    if (index >= 0) {
      state.todos.splice(index, 1);
    }
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};