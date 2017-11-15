<template>
  <div class="notes">
    <add-form></add-form>
    <options-view></options-view>
    <notes-list></notes-list>
  </div>
</template>

<script>
import AddForm from '@/components/AddForm'
import OptionView from '@/components/OptionsView'
import NotesList from '@/components/NotesList'

export default {
  name: 'NotesApp',
  data () {
    return {
    }
  },
  components: {
    'add-form': AddForm,
    'options-view': OptionView,
    'notes-list': NotesList
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
