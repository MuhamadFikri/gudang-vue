<template>
  <v-app>
    <v-toolbar dark color="primary" app>
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase white--text">
        <div class="hidden-sm-and-down">
          <span class="font-weight-bold">Aplikasi</span>
          <span class="font-weight-light">Gudang</span>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn small flat @click="refresh()">
        <v-icon>refresh</v-icon>&nbsp;Segarkan
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer app v-model="drawer">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">Gudang A</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

      <v-divider></v-divider>

      <v-list dense class="pt-0">
        <v-list-tile v-for="item in items" :key="item.title" route :to="item.link">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      items: [
        // { title: "Home", icon: "home", link: "/home" },
        {
          title: "Lihat Barang",
          icon: "dashboard",
          link: "/lihatbarang"
        },
        {
          title: "Laporan Rekap",
          icon: "dashboard",
          link: "/laporanrekap"
        },
        {
          title: "Laporan RedZone",
          icon: "dashboard",
          link: "/laporanredzone"
        }
      ]
    };
  },
  methods: {
    refresh() {
      location.reload();
    }
  }
};
</script>