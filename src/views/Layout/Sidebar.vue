<template lang="html">
  <v-navigation-drawer
      app
      clipped
      absolute
      v-model="drawer"
      class="grey lighten-4">
    <v-list
        dense
        class="grey lighten-4"
      >

      <template v-for="(item, i) in items">
        <v-layout
          v-if="item.heading"
          :key="i"
          row
          align-center
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }} {{toggleDrawer}}
            </v-subheader>
          </v-flex>
          <v-flex xs6 class="text-xs-right">
            <v-btn small flat>edit</v-btn>
          </v-flex>
        </v-layout>
        <v-divider
          v-else-if="item.divider"
          :key="i"
          dark
          class="my-3"
        ></v-divider>
        <v-list-tile
          v-else
          :key="i"
          @click="handleClick"
        >
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="grey--text">
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [{
        icon: 'lightbulb_outline',
        text: 'Notes'
      },
      {
        icon: 'touch_app',
        text: 'Reminders'
      },
      {
        divider: true
      },
      {
        heading: 'Labels'
      },
      {
        icon: 'add',
        text: 'Create new label'
      },
      {
        divider: true
      },
      {
        icon: 'archive',
        text: 'Archive'
      },
      {
        icon: 'delete',
        text: 'Trash'
      },
      {
        divider: true
      },
      {
        icon: 'settings',
        text: 'Settings'
      },
      {
        icon: 'chat_bubble',
        text: 'Trash'
      },
      {
        icon: 'help',
        text: 'Help'
      },
      {
        icon: 'phonelink',
        text: 'App downloads'
      },
      {
        icon: 'keyboard',
        text: 'Keyboard shortcuts'
      }
    ]
  }),
  mounted() {
    this.drawer = this.toggleDrawer
  },
  props: {
    toggleDrawer: {
      type: Boolean,
      default: false
    }
  },
  watch: {
    toggleDrawer: function(newValue) {
      this.drawer = newValue;
    },
    drawer: function(newValue) {
      this.$emit('toggleDrawer', newValue)
    }
  },
  methods: {
    handleClick() {
      console.log('sidebar clicked')
    }
  }

}
</script>
