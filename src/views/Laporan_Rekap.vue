<template>
  <v-layout>
    <v-container fluid>
      <v-layout>
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="mx-auto"
            width="344"
            route
            to="/barangmasuk"
          >
            <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
            <v-card-title>
              <div>
                <span class="headline">Barang Masuk</span>
              </div>
              <v-spacer></v-spacer>
              <v-btn icon class="mr-0">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-hover>
        <v-hover>
          <v-card
            slot-scope="{ hover }"
            :class="`elevation-${hover ? 12 : 2}`"
            class="mx-auto"
            width="344"
            route
            to="/barangkeluar"
          >
            <v-img :aspect-ratio="16/9" src="https://cdn.vuetifyjs.com/images/cards/cooking.png"></v-img>
            <v-card-title>
              <div>
                <span class="headline">Barang Keluar</span>
              </div>
              <v-spacer></v-spacer>
              <v-btn icon class="mr-0">
                <v-icon>mdi-chevron-right</v-icon>
              </v-btn>
            </v-card-title>
          </v-card>
        </v-hover>
      </v-layout>
    </v-container>
  </v-layout>
</template>


<script>
export default {
  name: "laporanrekap"
};
</script>
