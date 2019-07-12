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
                    <div class="headline">{{i.nama_toko}}</div>
                    <span>{{i.alamat_toko}}</span>
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
import axios from "axios"
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

      ]
    };
  },
  created() {
    axios.get('http://ud-thoha-rest.site/api/toko', {
      headers: { 
        udthoha_token: "szQR6XBteZjmTGq0onbc5"
        // 'Content-type': 'application/json'
      }
    }).then(res => {
      console.log(res.data.data)
      this.zona = res.data.data;
    })
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
