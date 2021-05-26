<template>
  <div class="padre">
    <v-container>
      <h1>Gestion de contraseñas</h1>
      <v-row class="mt-4">
        <v-col>
          <v-btn depressed class="px-5" to="/">🏡 Inicio </v-btn>
        </v-col>
        <v-col class="col-auto">
          <v-btn depressed color="primary" class="px-5">
            ➕ Agregar Contraseña
          </v-btn>
        </v-col>
      </v-row>

      <v-row justify="center" align="center">
        <v-col cols="12">
          <Tarjeta style="width: 50%; margin: 0 auto" />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import Tarjeta from "@/components/Tarjeta.vue";
export default {
  name: "gestion",
  components: {
    Tarjeta,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.padre {
  width: 100%;
  min-height: 100vh;
  background: #40407a;
  color: white;
}

.tarjeta {
  width: 100%;
  background: #ecf0f1;
  margin: 1em 0;
  border-radius: 8px;
  padding: 1em;
  color: #2c3e50;
}
</style>
