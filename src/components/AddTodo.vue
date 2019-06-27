<template>
  <div class="hello">
    <router-link class="link" to="/">Back</router-link>
    <p>
        <input v-model="newTitle" placeholder="Enter title: "><br>
        <input v-model="newTodo" placeholder="Enter description: "><br>
        <button class="btn" @click="addTodo">Add</button>
    </p>
  </div>
</template>

<script>
export default {
  name: 'AddTodo',
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
        alert("No empty field required!");
        return;
      }
      let temp =  { "title": this.newTitle, "desc": this.newTodo, "done": false };
      console.log(temp);
      this.todos.push(temp);
      this.newTodo = '';
      this.newTitle = '';
      this.saveTodo();
    },
    removeTodo(x) {
      this.todos.splice(x, 1);
      this.saveTodo();
    },
    saveTodo() {
      const parsed = JSON.stringify(this.todos);
      localStorage.setItem('todos', parsed);
    }
  }
}
</script>

<style scoped>
.link{
  display: inline-block;
  padding: 5px 35px;
  text-decoration: none;
  color: black;
  margin: 8px;
  border: 2px solid aquamarine;
}
.btn{
    background-color: rgba(0, 0, 0, 0.08);
    padding: 10px 35px;
    border: none;
    border-radius: 5px;
    margin-top: 10px;
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
