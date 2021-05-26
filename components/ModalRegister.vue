<script>
export default {
  name: "ModalRegister",
  props: {},
  data() {
    return {
      dialog: false,

      form: {
        username: "",
        email: "",
        password: "",
      },

      // validacion email
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],

      registerOk: false,
    };
  },
  methods: {
    async registrar() {
      this.$axios
        .$post("http://localhost:1337/auth/local/register", this.form)
        .then((response) => {
          this.registerOk = true;
          console.log("Registracion correctamente", response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    open() {
      this.dialog = !this.dialog;
    },
  },
};
</script>

<template>
  <v-dialog v-model="dialog" width="500" style="background: red !important">
    <v-card>
      <v-card-title> Formulario de Registrar </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="Nombre de Usuario *"
                required
                v-model="form.username"
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="email *"
                required
                :rules="emailRules"
                prepend-inner-icon="mdi-email"
                v-model="form.email"
              ></v-text-field>
            </v-col>
            <v-col cols="12" class="mt-n5">
              <v-text-field
                label="Contraseña *"
                type="password"
                required
                prepend-inner-icon="mdi-password"
                v-model="form.password"
              ></v-text-field>
            </v-col>
          </v-row>
          <v-btn color="primary" depressed block @click="registrar"> Registrar</v-btn>
        </v-container>
      </v-card-text>
    </v-card>

    <v-snackbar
      :timeout="-1"
      :value="registerOk"
      absolute
      top
      color="success"
      elevation="24"
    >
      Usuario creado correctamente
    </v-snackbar>
  </v-dialog>
</template>

<style lang="scss" scoped></style>
