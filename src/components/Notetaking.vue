<template>
  <div class='hello'>
    <input v-model='noteTitle' placeholder='Insert a new to do here'>
    <button v-on:click='addItem'>Add</button>
    <button v-on:click='removeSelectItems'>Remove</button>
    <li v-for='(note, index) in noteList' >
      <div v-show='note.visible'>
        <input type='checkbox' v-on:click='selectItem(index)'>
        <span class='todo'>
          {{ note.title }}
        </span>
      </div>
    </li>
  </div>
</template>

<script>
export default {
  name: 'Notelist',
  data() {
    return {
      noteList: [
        {
          title: 'Ir ao supermercado',
          visible: true,
        },
        {
          title: 'Cortar o cabelo',
          visible: true,
        },
      ],
      noteTitle: '',
      selectedItems: [],
    };
  },
  methods: {
    addItem: function addItem(event) {
      this.noteList.push(
        {
          title: this.noteTitle,
          visible: true,
        },
      );
      this.noteTitle = '';
    },
    removeItem: function removeItem(index) {
      this.$set(this.noteList[index], 'visible', false);
    },
    removeSelectItems: function removeSelectItems() {
      for (let i = this.selectedItems.length - 1; i >= 0; i -= 1) {
        this.removeItem(this.selectedItems[i]);
      }
    },
    selectItem: function selectItem(index) {
      if (this.selectedItems.includes(index)) {
        this.selectedItems = this.selectedItems.filter(item => item !== index)
      } else {
        this.selectedItems.push(index)
      }
    },
  },
};
</script>

<style lang='scss' scoped>
   @import '../styles/main.scss'
</style>
