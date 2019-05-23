<template>
  <v-layout>
    <v-flex xs12>
      <v-card class="elevation-0">
        <v-container fluid grid-list-sm>
          <v-layout row wrap>
            <v-flex xs3 v-for="i in zona" :key="i.id">
              <v-card color="blue-grey darken-2" class="white--text">
                <v-card-title primary-title>
                  <div>
                    <div class="headline">[Nama Toko] [ Zona {{i.nama}} ]</div>
                    <span>[Nanti disini alamat toko nya]</span>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat dark @click="lihatToko(i.id)">Lihat Toko</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-flex>
  </v-layout>
</template>


<script>
export default {
  name: "laporanredzone",
  data() {
    return {
      size: "sm",
      items: [
        { text: "Extra small (2px)", value: "xs" },
        { text: "Small (4px)", value: "sm" },
        { text: "Medium (8px)", value: "md" },
        { text: "Large (16px)", value: "lg" },
        { text: "Extra large (24px)", value: "xl" }
      ],
      zona: [
        { id: 1, nama: "A" },
        { id: 2, nama: "A" },
        { id: 3, nama: "B" },
        { id: 4, nama: "B" },
        { id: 5, nama: "C" },
        { id: 6, nama: "C" }
      ]
    };
  },
  methods: {
    lihatToko(id) {
      this.$router.push({
        name: "redzone",
        params: { id: id }
      });
    }
  }
};
</script>
