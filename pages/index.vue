<script>
import ModalRegister from "@/components/ModalRegister.vue";
import ModalLogin from "@/components/ModalLogin.vue";
export default {
  name: "inicio",
  components: {
    ModalRegister,
    ModalLogin,
  },

  data() {
    return {
      isLogged: false,

      dialog: false,
    };
  },

  mounted() {
    const token = localStorage.getItem("token");
    !token ? (this.isLogged = false) : (this.isLogged = true);
  },

  methods: {
    gestionarPassword() {
      if (!this.isLogged) {
        // open modal login
        this.$refs.modalLogin.open();
      } else {
        // mandar a la vista
        this.$router.push({path:'gestion'});

      }
    },

    openRegistrar() {
      // cerrar modal de iniciar sesion
      this.$refs.modalLogin.open();
      // abrir modal de registrar
      this.$refs.modalRegister.open();
    },
  },
};
</script>
<template>
  <section class="seccionPrincipal">
    <div class="hijo text-center">
      <h1 class="">Gestor de Contraseñas RM</h1>
      <br />
      <p>
        Almacena las contraseñas de tus redes sociales de forma segura.✅<br />
        <br />
        Crea contraseñas unicas y seguras.✅
      </p>

      <v-btn depressed color="primary" class="px-5" @click="gestionarPassword">
        Gestionar mis contraseñas 🔐</v-btn
      >

      <ModalLogin ref="modalLogin" @openRegistrar="openRegistrar" />
      <ModalRegister ref="modalRegister" />

      <br />
      <v-btn depressed color="success" class="bg-verde px-5" to="ramdom">
        Crear Contraseña ramdom 🛴
      </v-btn>
    </div>
  </section>
</template>
<style lang="scss">
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
    width: 80%;
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
