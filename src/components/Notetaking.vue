<template>
  <div class='hello'>
    <input v-model='noteTitle' v-on:keyup='onEnter' placeholder='Insert a note here'>
    <button v-on:click='addItem'>Add</button>
    <button v-on:click='removeSelectItems'>Remove</button>
    <li v-for='(note, index) in noteList'>
      <div v-bind:class="{ highlight : isFocus(index) }">
        <input type='checkbox' v-on:click='selectItem(index)' :checked='isSelected(index)'>
        <span class='todo' v-on:click='onFocus(index)'>
          {{ note.title }}
        </span>
      </div>
    </li>
    <textarea v-if='noteList.length > 0' v-model='noteList[focusNote].text || empty'/>
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
          text: '',
        },
        {
          title: 'Cortar o cabelo',
          text: '',
        },
      ],
      noteTitle: '',
      selectedItems: [],
      focusNote: 0,
      empty: '',
    };
  },
  created() {
    window.addEventListener('keyup', this.changeFocus);
   // this.interval = setInterval( () => { this.log(); }, 1000);
  },
  methods: {
    addItem() {
      if (this.noteTitle !== '') {
        if (this.noteList.lenth < 1) {
          this.focusNote = 0;
        }
        this.noteList.push(
          {
            title: this.noteTitle,
            text: '',
          },
        );
      } else {
        return;
      }

      this.noteTitle = '';
    },
    isFocus(index) {
      return index === this.focusNote;
    },
    isSelected(index) {
      return this.selectedItems.includes(index);
    },
    removeItem(index) {
      this.noteList.splice(index, 1);
    },
    removeSelectItems() {
      this.sortArray(this.selectedItems);
      for (let i = this.selectedItems.length - 1; i >= 0; i -= 1) {
        this.removeItem(this.selectedItems[i]);
      }
      this.selectedItems = [];
    },
    selectItem(index) {
      if (this.selectedItems.includes(index)) {
        this.selectedItems = this.selectedItems.filter(item => item !== index);
      } else {
        this.selectedItems.push(index);
      }
    },
    onEnter(event) {
      if (event.key === 'Enter') {
        this.addItem();
      }
    },
    onFocus(index) {
      this.focusNote = index;
    },
    changeFocus(event) {
      switch (event.key) {
        case 'ArrowUp':
          if (this.focusNote >= 1) {
            this.focusNote = this.focusNote - 1;
          }
          break;
        case 'ArrowDown':
          if (this.focusNote < this.noteList.length - 1) {
            this.focusNote = this.focusNote + 1;
          }
          break;
        default:
          break;
      }
    },
    sortArray(array) {
      function compare(a, b) {
        if (a < b) {
          return -1;
        }
        if (a > b) {
          return 1;
        }
        return 0;
      }

      return array.sort(compare);
    },
  },
};
</script>

<style lang='scss' scoped>
   @import '../styles/main.scss'
</style>
