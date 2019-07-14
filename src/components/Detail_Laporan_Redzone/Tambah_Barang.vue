<template>
  <v-layout>
    <v-container fluid grid-list-lg>
      <!-- <v-card>
      </v-card>-->
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card class="rounded-card">
              <v-container>
                <v-layout>
                  <v-flex xs6>
                    <v-text-field v-model="idtoko" :rules="idtokoRules" label="id toko" required />
                  </v-flex>
                  <v-flex xs6>
                    <v-text-field
                      v-model="idbarang"
                      :rules="idbarangRules"
                      label="id barang"
                      required
                    />
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card>
          </v-flex>
          <v-flex xs12>
            <v-card class="rounded-card">
              <v-layout>
                <v-flex lg4>
                  <v-text-field v-model="harga" :rules="hargaRules" label="harga" required />
                </v-flex>
                <v-flex lg4>
                  <v-text-field
                    v-model="kategoriharga"
                    :rules="kategorihargaRules"
                    label="kategori harga"
                    required
                  />
                </v-flex>
                <v-flex lg4>
                  <v-text-field v-model="jumlah" :rules="jumlahRules" label="Stok" required />
                </v-flex>
              </v-layout>
              <v-btn
                class="rounded-card"
                type="submit"
                :disabled="!valid"
                color="success"
                @click="validate"
              >Submit</v-btn>
              <!-- <v-btn class="rounded-card" color="error" @click="reset">Reset Data</v-btn> -->
            </v-card>
          </v-flex>
        </v-layout>

        <!-- <v-btn color="warning" @click="resetValidation">Reset Validation</v-btn> -->
      </v-form>
      <v-snackbar v-model="snackbar" multi-line :timeout="timeout" top>
        {{ snackbar_message }}
        <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
      </v-snackbar>
    </v-container>
  </v-layout>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    valid: true,
    snackbar: false,
    timeout: 6000,
    items: [
      // { id: 1, nama: "Kg" },
      // { id: 2, nama: "Pc" },
      // { id: 3, nama: "Karung" },
      // { id: 4, nama: "Doz" },
      // { id: 5, nama: "Pack" }
    ],
    jumlah: "",
    satuan: "",
    diskon: "",
    snackbar_message: "Tidak ada aksi",
    jumlahRules: [
      v => !!v || "Jumlah harus diisi"
      // v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    diskonRules: [
      v => !!v || "Diskon harus diisi"
      // v => (v && v.length <= 10) || "Name must be less than 10 characters"
    ],
    select: null,
    // items: ["Item 1", "Item 2", "Item 3", "Item 4"],
    checkbox: false,
    not_empty: [v => !!v || "Alamat tidak boleh Kosong"]
  }),
  created() {
    axios
      .get("http://ud-thoha-rest.site/api/kategori/satuan", {
        headers: {
          udthoha_token: "zQR6XBteZjmTGq0onbc5"
        }
      })
      .then(res => {
        this.items = res.data.data;
      });
  },
  methods: {
    validate() {
      if (this.$refs.form.validate()) {
        var data = {
          nama: "Kategori Tiga",
          id_satuan: this.satuan,
          jumlah: this.jumlah,
          diskon: this.diskon
        };
        // console.log(data);
        axios
          .post("http://ud-thoha-rest.site/api/kategori/harga", data, {
            headers: {
              udthoha_token: "zQR6XBteZjmTGq0onbc5"
            }
          })
          .then(() => {
            this.snackbar_message = "Data sudah di Submit";
            this.snackbar = true;
          });
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
};
</script>

<style scoped>
.rounded-card {
  border-radius: 10px;
}
</style>