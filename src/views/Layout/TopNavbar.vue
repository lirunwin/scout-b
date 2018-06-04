<template lang="html">
    <v-toolbar app clipped-left class="topNavbar" flat light permanent absolute>
      <!-- <v-toolbar-side-icon @click.native="toggleDrawer"></v-toolbar-side-icon> -->
      <img src="@/assets/img/logo.png" alt="logo">
      <span class="sign"><img src="@/assets/img/sign.png"></span>
      <v-spacer />
    </v-toolbar>
</template>

<script>
export default {
  data: () => ({
    drawer: true
  }),
  methods: {
    toggleDrawer() {
      this.$emit('toggleDrawer');
    }
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/common';
.topNavbar {
    &::before {
        display: block;
        position: absolute;
        height: 100%;
        width: 100vw;
        left: 0;
        background: red;
        content: '';
        z-index: -1;

    }
    .sign {
        position: relative;
        padding-left: 2rem;
        vertical-align: bottom;
        margin-top: 1rem;
        align-self: flex-end;
        &::before {
            display: inline-block;
            @include border($border-color,l);
            content: '';
            height: 1.5em;
            position: absolute;
            left: 1rem;
        }
    }
}
</style>
