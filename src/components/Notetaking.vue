<template>
  <div id='wrapper'>
    <h1 class='title'>Note-taking App</h1>
    <div class='header'>
      <input class='note-title' v-model='noteTitle' v-on:keyup='onEnter' placeholder='Add a new note here'>
      <img class='add' v-on:click='addItem' src='../assets/add-icon.svg'/>
    </div>
    <div class='content-wrapper'>
      <div class='board'>
        <div class='actions'>
          <input class='select-all' type='checkbox' v-on:click='selectAllItems' v-bind:checked='isAllSelected()'>
          <label class='select-label'>All</label>
          <img class='remove' v-on:click='removeSelectItems' src='../assets/trash-icon.svg'/>
        </div>
        <div class='notes'>
          <li v-for='(note, index) in noteList'>
            <div v-bind:class="{ highlight : isFocus(index) }" v-on:click='setFocus(index)'>
              <input type='checkbox' v-on:click='selectItem(index)' v-bind:checked='isSelected(index)'>
              <span class='note'>
                {{ note.title }}
              </span>
            </div>
          </li>
        </div>
      </div>
      <div class='details'>
        <textarea placeholder='Write a description here' v-if='noteList.length > 0' v-model='noteList[focusNote].text'/>
      </div>
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
          title: "Custumer's address",
          text: '',
        },
        {
          title: '12/22 daily meeting',
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
      return this.selectedItems.indexOf(index) > -1;
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
    isAllSelected() {
      if (this.selectedItems.length === this.noteList.length) {
        return true;
      }
      return false;
    },
    selectAllItems() {
      if (this.isAllSelected()) {
        this.selectedItems = [];
        return;
      }
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
