<template>
  <div>
    <ul>
      <note v-bind:key="note.key" v-bind:id="note.key" v-bind:message="note.message" @removed="itemRemoved" v-for="note in notesToShow"></note>
    </ul>
  </div>
</template>

<script>
import Note from '@/components/Note'

export default {
  name: 'NotesList',
  props: ['notesToShow'],
  data () {
    return {
    }
  },
  methods: {
    itemRemoved (id) {
      let toDelete = this.notesToShow.find((el) => (el.key === id))
      this.notesToShow.splice(this.notesToShow.indexOf(toDelete), 1)
    }
  },
  components: {
    'note': Note
  }

}
</script>

