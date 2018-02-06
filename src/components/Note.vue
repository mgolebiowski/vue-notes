<template>
      <li>
        <span>{{ message }}</span>
        <a @click="removeEl" href="#">Remove</a>
      </li>
</template>

<script>
export default {
  name: 'Note',
  props: ['id', 'message'],
  data () {
    return {
    }
  },
  methods: {
    removeEl () {
      this.$emit('removed', this.id)
    }
  }
}
</script>
