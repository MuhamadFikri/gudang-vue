<template>
  <router-view/>
</template>

<script>
export default {
  name: "home",
  created() {
    this.$router.push({
      name: "laporanrekap"
    });
  }
};
</script>
