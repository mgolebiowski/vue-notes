<template>
  <div class="notes">
    <input type="text" id="input-text">
    <button id="add-el">Add</button>
    <ul class="options">
      <li><a href="#">Clear all</a></li>
      <li><a href="#">Check all</a></li>
      <li><a href="#">Uncheck all</a></li>
    </ul>
    <ol class="check-list">
      <li class="note-el" id="note1">
        <input type="checkbox">
        <span>The text of note</span>
        <a href="#">Remove</a>
      </li>
      <li class="note-el" id="note2">
        <input type="checkbox">
        <span>The text of note</span>
        <a href="#">Remove</a>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'NotesApp',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
