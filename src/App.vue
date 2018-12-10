<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import {mapGetters, mapMutations, mapActions} from 'vuex'
  export default {
    computed: {
      ...mapGetters([
        'userName'
      ])
    },
    methods: {
      ...mapMutations([
        'MODIFY_USERNAME'
      ]),
      ...mapActions([
        'getUerName'
      ])
    }
  }
</script>
