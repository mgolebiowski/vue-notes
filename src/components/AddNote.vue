<template>
  <form>
    <input type="text" v-model="input_txt" id="new_el"><br>
    <button v-on:click="sendNewNote" >Add</button>
  </form>
</template>

<script>
export default {
  name: 'AddNote',
  data () {
    return {
      input_txt: ''
    }
  },
  methods: {
    sendNewNote: function () {
      this.$emit('new-note', this.input_txt)
      this.input_txt = ''
    }
  }
}
</script>

