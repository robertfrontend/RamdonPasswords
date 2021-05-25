<script>
export default {
  components: {},

  data() {
    return {
      isLogged: false,
    };
  },

  methods: {
    gestionarPassword() {
      if (!this.isLogged) {
        // open modal login
      } else {
        // mandar a la vista
      }
    },
  },
};
</script>
<template>
  <section class="seccionPrincipal">
    <div class="hijo">
      <h1 class="">Gestor de Contraseñas RM</h1>
      <p class="text--red" style="color: #36ada2">
        Almacena las contraseñas de tus redes sociales de forma segura
      </p>
      <v-btn depressed color="primary" class="px-5" @click="gestionarPassword">
        Gestionar mis contraseñas 🔐</v-btn
      >
      <br />
      <v-btn depressed color="success" class="bg-verde px-5" to="ramdom">
        Crear Contraseña ramdom 🛴
      </v-btn>
    </div>
  </section>
</template>
<style lang="scss" scoped>
$marino1: #40407a;
$verde: #36ada2;

.bg-verde {
  background: $verde !important;
}
.seccionPrincipal {
  width: 100%;
  min-height: 100vh;
  background: #2c2c54;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  .hijo {
    width: 50%;
    padding: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: $marino1;
    border-radius: 10px;
    margin: 4em 0;
  }
  h1 {
    font-weight: bold;
    font-size: 30px;
  }
  a {
    text-decoration: none;
    color: white;
  }
}
</style>
