<template>
  <div>
    <router-link class="link" to="/add">Add new</router-link>
    <div class="box" :class="{ 'done': todo.done }"  v-for="(todo, n) in todos" v-bind:key="n">
        <div>
          <div>
            <router-link :to="'/info/' + todo.title + '/' + todo.desc + '/' + n">
              <span class="todoTitle">{{ todo.title }}</span><br>
              <span class="todo">{{ todo.desc }}</span><br>
            </router-link>
            <div style="z-index: 352;">
              <button id="mark" class="btn" @click="saveDone(n)">Done</button>
              <button class="btn" @click="removeTodo(n)">Remove</button>          
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data: function() {
    return{
      todos: [],
      newTodo: null,
      newTitle: null,
      done: false
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
      let temp =  { "title": this.newTitle, "desc": this.newTodo, "done": false };
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
    },
    saveDone(n){
      // console.log(this.todos.title);
      let button = document.querySelectorAll("#mark")[n];
      if(!this.todos[n].done){
        button.innerHTML = "Unmark";
        this.todos[n].done = true;
      }
      else{
        button.innerHTML = "Mark as done";
        this.todos[n].done = false;
      }
      const parsed = JSON.stringify(this.todos);
      console.log(parsed);
      localStorage.setItem('todos', parsed);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.box {
  margin: 0 auto;
  width: 400px;
  border-radius: 15px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px;
  margin-bottom: 15px;
  box-shadow: 0px 10px 30px rgba(0,0,0,0.2)
}
.box.done {
  background-color: yellow;
  border: none;
  box-shadow: 0px 10px 30px rgba(aquamarine,0.4)
}
.btn{
  background-color: rgba(0, 0, 0, 0.08);
  padding: 10px 8px;
  border: none;
  border-radius: 5px;
}
.link{
  display: inline-block;
  padding: 5px 35px;
  text-decoration: none;
  color: black;
  margin: 8px;
  border: 2px solid aquamarine;
}
</style>
