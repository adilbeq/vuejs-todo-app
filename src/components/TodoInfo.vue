<template>
  <div class="hello">
    <router-link class="link" to="/">Back</router-link>
    <div>
       <div class="wrap">
            <hr>
            <h2>Choosen Todo: {{ $route.params.id }}</h2>
            <h3>Description: {{ $route.params.desc }}</h3>
            <h4>Identificator: <span>{{ $route.params.n }}</span></h4>
            <hr>
            <input type="text" placeholder="Edit title: " v-model="upTitle"><br>
            <input type="text" placeholder="Edit description: " v-model="upDesc"><br>
            <!-- <input type="text" v-model="n" style="display: none;"> -->
            <button class="btn" v-on:click="updateTodo($route.params.n)">Update</button>
       </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoInfo',
  data: function() {
    return{
      todos: [],
      newTodo: null,
      newTitle: null,
      upTitle: null,
      upDesc: null
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
        alert("No empty field required!");
        return;
      }
      let temp =  { "title": this.newTitle, "desc": this.newTodo, "done": false };
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
    updateTodo(n){
        // console.log(this.todos[n].title);
        // console.log(this.todos[n].desc);
        // console.log(this.upTitle);
        // console.log(this.upDesc);
        if(this.upTitle == null || this.upDesc == null){
          alert("No empty field required!");
        }
        else{
          this.todos[n].title = this.upTitle;
          this.todos[n].desc = this.upDesc;
        }
      
        const parsed = JSON.stringify(this.todos);
        console.log(parsed);
        localStorage.setItem('todos', parsed);
        // temp = temp.split(',');
        // console.log(temp);
    }
  }
}
</script>

<style scoped>
.btn{
    background-color: rgba(0, 0, 0, 0.08);
    padding: 10px 8px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
}
.link{
  display: inline-block;
  padding: 5px 35px;
  text-decoration: none;
  color: black;
  margin: 8px;
  border: 2px solid aquamarine;
}
input{
    width: 300px;
    height: 30px;
    border-radius: 20px;
    padding-left: 15px;
    margin: 5px;
    border: 1px solid black;
}
</style>
