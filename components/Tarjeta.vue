<template>
  <div class="tarjeta">
    <!-- header -->
    <v-row justify="center" align="center">
      <v-col> <b>Contraseña Facebook</b> </v-col>
      <v-col cols="auto">
        <v-btn class="mx-2" fab dark small color="primary" @click="mostrar = !mostrar">
          <!-- minus plus -->
          <v-icon dark> {{ mostrar ? "mdi-minus" : "mdi-plus" }} </v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <!--contenido-->
    <v-row v-if="mostrar">
      <v-col cols="12" class="pb-0">
        <label>Nombre</label>
        <v-text-field label="Nombre Contraseña" solo></v-text-field>
      </v-col>
      <v-col cols="12" class="pb-0">
        <label>Correo/Nombre usuario</label>
        <v-text-field label="Ej: robert@gmail.com / robertrm0" solo></v-text-field>
      </v-col>
      <v-col cols="12" class="pb-0">
        <label>Contraseña</label>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Contraseña"
          hint="At least 8 characters"
          counter
          @click:append="show1 = !show1"
          solo
        ></v-text-field>
      </v-col>
      <v-col cols="12">
        <v-btn class="mx-2" color="primary">
          <!-- minus plus -->
          Guardar Cambios <v-icon class="ml-1"> mdi-content-save </v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Tarjeta",
  data() {
    return {
      password: "",
      show1: false,

      mostrar: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
