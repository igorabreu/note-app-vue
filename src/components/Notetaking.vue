<template>
  <div>
    <h1 class='title'>Note-taking App</h1>
    <div class='header'>
      <input class='noteTitle' v-model='noteTitle' v-on:keyup='onEnter' placeholder='Insert new a note here'>
      <img class='add' v-on:click='addItem' src='../assets/add-icon.svg'/>
    </div>
    <div class='actions'>
      <input type='checkbox' v-on:click='selectAllItems'>
      <label>Select all</label>
      <img class='remove' v-on:click='removeSelectItems' src='../assets/trash-icon.svg'/>
    </div>
    <div class='wrapper'>
      <div class='notes'>
        <li v-for='(note, index) in noteList'>
          <div v-bind:class="{ highlight : isFocus(index) }">
            <input type='checkbox' v-on:click='selectItem(index)' v-bind:checked='isSelected(index)'>
            <span class='todo' v-on:click='setFocus(index)'>
              {{ note.title }}
            </span>
          </div>
        </li>
      </div>
      <textarea class='details' v-if='noteList.length > 0' v-model='noteList[focusNote].text'/>
    </div>
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
      if (this.focusNote - 1 >= 0) {
        this.setFocus(this.focusNote - 1);
      }
    },
    removeSelectItems() {
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
      this.sortArray(this.selectedItems);
    },
    onEnter(event) {
      if (event.key === 'Enter') {
        this.addItem();
      }
    },
    setFocus(index) {
      this.focusNote = index;
    },
    changeFocus(event) {
      switch (event.key) {
        case 'ArrowUp':
          if (this.focusNote >= 1) {
            this.setFocus(this.focusNote - 1);
          }
          break;
        case 'ArrowDown':
          if (this.focusNote < this.noteList.length - 1) {
            this.setFocus(this.focusNote + 1);
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
    selectAllItems() {
      this.selectedItems = [];
      let value = 0;
      for (let i = this.noteList.length - 1; i >= 0; i -= 1) {
        this.selectedItems.push(value);
        value += 1;
      }
    },
  },
};
</script>

<style lang='scss' scoped>
   @import '../styles/main.scss'
</style>
