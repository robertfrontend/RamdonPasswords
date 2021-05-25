<script>
export default {
  name: "ramdom",
  data() {
    return {
      canitdadCaracteres: null,
      resultado: null,

      validCantidad: false,
    };
  },

  methods: {
    generarPass() {
      if (this.canitdadCaracteres >= 8) {
          this.validCantidad = false

        this.resultado = "";
        const caracteres =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#$%&@!/*_";
        const longitud = caracteres.length;

        for (var i = 0; i < Number(this.canitdadCaracteres); i++) {
          this.resultado += caracteres.charAt(Math.floor(Math.random() * longitud));
        }

      } else {
        this.validCantidad = true;
        return;
      }
    },
  },
};
</script>

<template>
  <section class="">
    <main>
      <div class="micontain">
        <header>
          <h1>Generador de Contraseñas</h1>
          <small id="emailHelp" class="form-text text-muted">
            Super Seguras. <br />
          </small>
        </header>
        <section>
          <div class="d-resul">
            <p id="resultado">
              <template v-if="!resultado"> Aqui va tu resultado </template>
              {{ resultado }}
            </p>
          </div>
          <v-btn
            v-if="resultado"
            depressed
            color="primary"
            class="bg-verde px-5"
            style="width: 90%"
          >
            Guardar
          </v-btn>
          <div class="px-5">
            <label for=""> Cantidad de caracteres: </label>
            <v-text-field
              label="+8"
              type="number"
              solo
              class="py-1 m-0 mb-n3"
              style="width: 250px"
              v-model="canitdadCaracteres"
            ></v-text-field>
          </div>

          <v-alert type="error" style="width: 90%" class="px-2" v-if="validCantidad">
            La cantidad de caracteres minima es de <strong>8</strong>
          </v-alert>

          <div>
            <button class="boton-1" id="botonGeneral" @click="generarPass">
              Generar
            </button>
            <br />
          </div>
        </section>
      </div>
    </main>
  </section>
</template>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0px;
  box-sizing: border-box;
}

section {
  background: #2c2c54;
  color: white;
}

$black: rgba(0, 3, 17, 0.671);
$marino1: #40407a;
$verde: #33d9b2;

main {
  width: 100%;
  min-height: 100vh;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  .micontain {
    width: 50%;
    padding: 70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: $marino1;
    border-radius: 10px;
    margin: 4em 0;
    header {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      h1 {
        font-weight: bold;
        font-size: 30px;
      }
      small {
        font-size: 16px;
        color: $verde !important;
        font-weight: bold;
      }
    }
    section {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 20px 0px;

      .d-resul {
        width: 90% !important;
        cursor: pointer;
        background: white;
        padding: 8px;
        border-radius: 5px;
        overflow-y: hidden;
        #resultado {
          color: $black;
          margin: 0;
          font-weight: bold;
        }
      }
      div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px 0px;

        small {
          font-size: 16px;
          color: $verde !important;
          font-weight: bold;
        }
        label {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          font-weight: bold;
          color: $verde;
          padding: 5px 0px;
          input {
            margin: 0px auto;
            width: 50%;
          }
          #simbolos {
            width: 20px;
            height: 20px;
            border: 2px solid #33d9b2;
            border-radius: 10px !important;
          }
        }
      }
    }
    @media screen and(max-width:1036px) {
      width: 100%;
      header {
      }
      @media screen and(max-width:672px) {
        padding: 12px;
        section {
          .d-resul {
            width: 100%;
          }
        }
      }
    }
  }

  .d-alerta {
    width: auto;
    position: absolute;
    bottom: 30px;
    right: 30px;
    background: transparent;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    div {
      small {
        padding: 10px 20px;
        background: #ff5252;
        margin: 10px;
        font-size: 14px;
        font-weight: bold;
        color: white !important;
        border-radius: 8px;
      }
    }
  }
}

.boton-1 {
  padding: 10px 100px;
  border: none;
  border-radius: 5px;
  background: #33d9b2b6;
  color: white;
  font-weight: bold;
}

footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  div {
    p {
      margin: 0;
      font-weight: 500;
      a {
        text-decoration: none;
      }
    }
  }
}
</style>
