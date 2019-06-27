<template>
<div id="app">
  <h2>Todos</h2>
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return{
      todos: [],
      newTodo: null,
      newTitle: null
    }
  },
  mounted() {
    if (localStorage.getItem('todos')) {
      try {
        this.todos = JSON.parse(localStorage.getItem('todos'));
      } catch(e) {
        localStorage.removeItem('todos');
      }
    }
  },
  methods: {
    addTodo() {
      if (!this.newTodo) {
        return;
      }
      let temp =  { "title": this.newTitle, "desc": this.newTodo };
      console.log(temp);
      this.todos.push(temp);
      this.newTodo = '';
      this.saveTodo();
    },
    removeTodo(x) {
      this.todos.splice(x, 1);
      this.saveTodo();
    },
    saveTodo() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
      //console.log(localStorage.getItem(n));
    }
  }
}
</script>

<style>

html, body{
  box-sizing: border-box;
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.todoTitle{
  font-weight: bold;
  font-size: 25px;
}
.box{
  margin: 0 auto;
  width: 400px;
  border-radius: 15px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  box-shadow: 8px 10px 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin-bottom: 15px;
  text-align: center;
}
</style>
