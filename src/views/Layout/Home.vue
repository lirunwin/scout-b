<template>
<v-app>
  <top-navbar @toggleDrawer="drawer = !drawer" />
  <v-container class="py-0 wrapper" d-block>
    <side-bar :toggleDrawer="drawer" @toggleDrawer="drawerToggled" />
    <v-content>
      <dashboard-content/>
    </v-content>
    <v-footer app>
      {{drawer}}
      <app-footer />
    </v-footer>
  </v-container>
</v-app>
</template>
<script>
import SideBar from './Sidebar'
import TopNavbar from './TopNavbar'
import AppFooter from './AppFooter'
import DashboardContent from './Content'

export default {
  name: 'App',
  components: {
    SideBar,
    TopNavbar,
    DashboardContent,
    AppFooter
  },
  data: () => ({
    drawer: true
  }),
  methods: {
    drawerToggled(val) {
      this.drawer = val
    }
  }
}
</script>

<style lang="scss">
.wrapper {
    position: relative;
}
</style>
