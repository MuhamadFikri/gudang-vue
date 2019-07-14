<template>
  <v-layout>
    <v-container grid-list-lg>
      <v-layout wrap>
        <v-flex xs12>
          <template>
           <v-data-table :headers="headers" :items="barang" class="elevation-1">
              <template v-slot:items="props">
                <td>{{ props.item.id_barang }}</td>
                <td>{{ props.item.nama_barang }}</td>
                <td>{{ props.item.satuan_barang }}</td>
                <td>{{ props.item.kategori_barang }}</td>
                <td>{{ props.item.stok }}</td>
              </template>
            </v-data-table>
          </template>
        </v-flex>
        <v-btn @click="tambah()" dark fab fixed bottom right color="pink">
            <v-icon>add</v-icon>
          </v-btn>
      </v-layout>
    </v-container>
  </v-layout>
</template>


<script>
import axios from "axios"
export default {
  name: "barangmasuk",
  data() {
    return {
      headers: [
        {
          text: "ID Barang",
          align: "left",
          sortable: false,
          value: "id"
        },
        { text: "Nama Barang", value: "nama" },
        { text: "Satuan Barang", value: "satuan" },
        { text: "Kategori", value: "kategori" },
        { text: "Jumlah Barang", value: "jumlah" }
      ],
      barang: [],
    };
    
  },
  created() {
    axios.get('http://ud-thoha-rest.site/api/gudang/masuk', {
      params: {
        id: 1
      }
    }).then(res => {
      console.log(res)
      this.barang = res.data.data;
    })
  },
  methods:{
    tambah(){
      this.$router.push({name: "tambahbarang", params:{id: 1}
      });
    }
  }
}
</script>
