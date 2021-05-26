<script>
import { mapActions } from "vuex";

export default {
  name: "ModalLogin",
  props: {},

  data() {
    return {
      dialog: false,
      // validacion email
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],

      inicioOk: false,
    };
  },

  created() {},


  methods: {
    ...mapActions(["login"]),

    async iniciarSecion() {
      this.$axios
        .$post("http://localhost:1337/auth/local", {
          identifier: "robert02frontend@gmail.com",
          password: "robert2020",
        })
        .then((response) => {
          // Handle success.
          this.inicioOk = true;
          console.log("Inicio de seccecion correctamente", response);

          this.login(response);

          this.response = "";
        })
        .catch((error) => {
          // Handle error.
          console.log(error);
          this.inicioOk = false;
        });
    },

    open() {
      this.dialog = !this.dialog;
    },
    openRegistrar() {
      this.$emit("openRegistrar");
    },
  },
};
</script>

<template>
  <v-dialog v-model="dialog" width="500" style="background: red !important">
    <v-card>
      <v-card-title> Iniciar Seccion </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Correo *"
                required
                :rules="emailRules"
                prepend-inner-icon="mdi-email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="mt-n5">
              <v-text-field
                label="Contraseña *"
                type="password"
                required
                prepend-inner-icon="mdi-password"
              ></v-text-field>
            </v-col>
          </v-row>

          <v-btn color="primary" depressed block @click="iniciarSecion">
            Iniciar sesión</v-btn
          >
          <v-btn color="primary" block text @click="openRegistrar"> Registrarte</v-btn>
        </v-container>
      </v-card-text>
    </v-card>

    <v-snackbar
      :timeout="2000"
      :value="inicioOk"
      absolute
      top
      color="success"
      elevation="24"
    >
      Inicio de sesion correctamente
    </v-snackbar>
  </v-dialog>
</template>

<style lang="scss" scoped></style>
