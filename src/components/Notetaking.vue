<template>
  <div class='hello'>
    <input v-model='newTodo' placeholder='Insert a new to do here'>
    <button v-on:click='addTodo'>Add</button>
    <li v-for='(todo, index) in todoList' v-bind:key='todo.done'>
      <input type='checkbox' v-bind:checked='todo.done' v-on:click='toggleStatus(index, todo)'>
      <span class='todoChecked' v-if='todo.done' >
        {{ todo.title }}
      </span>
      <span class='todo' v-else>
        {{ todo.title }}
      </span>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Todolist',
  data() {
    return {
      todoList: [
        {
          title: 'Ir ao supermercado',
          done: true,
        },
        {
          title: 'Cortar o cabelo',
          done: false,
        },
      ],
      newTodo: '',
    };
  },
  methods: {
    addTodo: function (event) {
      this.todoList.push(
        {
          title: this.newTodo,
          done: false,
        }
      );
    },
    toggleStatus: function (index, todo) {
      console.log(this.todoList[index].done);
      this.$set(todo, index, !this.todoList[index].done)
    },
  },
};
</script>

<style lang='scss' scoped>
   @import '../styles/main.scss'
</style>
