<template>
  <div class="hello">
    <input v-model="newTodo" placeholder="Insert a new to do here">
    <h1>{{ newTodo }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Todolist',
  data() {
    return {
      newTodo: '',
    };
  },
};
</script>

<style lang="scss" scoped>
   @import '../css/main.scss'
</style>
