<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title> Hr Leave Application App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list padding class="menu-list">
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="people" />
          </q-item-section>
          <q-item-section>
            <router-link :to="{ path: '/leave-records' }">
              view Application</router-link
            ></q-item-section
          >
        </q-item>

        <!-- <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="note_add" />
          </q-item-section>

          <q-item-section> create Application </q-item-section>
        </q-item> -->
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <router-link :to="{ path: '/manager' }">
              manager</router-link
            ></q-item-section
          >
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="person" />
          </q-item-section>
          <q-item-section>
            <router-link :to="{ path: '/admin' }">
              Admin</router-link
            ></q-item-section
          >
        </q-item>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon name="vpn_key" />
          </q-item-section>
          <q-item-section>
            <router-link :to="{ path: '/login' }">
              Login</router-link
            ></q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  components: {
    // EssentialLink
  },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData,
    };
  },
};
</script>
