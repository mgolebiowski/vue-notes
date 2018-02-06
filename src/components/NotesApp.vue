<template>
  <div>
    <h1>{{test_prop}}</h1>
    <add-note @new-note="newNote"></add-note>
    <notes-list v-bind:notes-to-show="notes"></notes-list>
  </div>
</template>

<script>
import AddNote from '@/components/AddNote'
import NotesList from '@/components/NotesList'

export default {
  name: 'NotesApp',
  data () {
    return {
      test_prop: 'hello world',
      notes: [
      { key: 1, message: 'item1' },
      { key: 2, message: 'item2' },
      { key: 3, message: 'item3' },
      { key: 4, message: 'item4' }
      ]
    }
  },
  methods: {
    newNote: function (text) {
      if (text) {
        this.notes.push({
          key: this.notes.length + 1,
          message: text
        })
      }
    }
  },
  components: {
    'add-note': AddNote,
    'notes-list': NotesList
  }
}
</script>