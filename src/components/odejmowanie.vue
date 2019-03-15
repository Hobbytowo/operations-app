<template>
  <div class="wrapper">
    <span class="sign">-</span>

    <table class="table">
      <tbody>
      <tr>
        <td class="td td--top" v-for="(col, idx) in colNr" :key="idx">
          <input
            class="inpu input--top"
            type="number"
            min="0"
            max="9"
          >
        </td>
      </tr>

      <tr>
        <td class="td td--nr" v-for="(nr, idx) in colMaxNr" :key="idx">
          {{ nr }}
        </td>
      </tr>

      <tr class="tr tr--border">
        <td class="td td--nr" v-for="(nr, idx) in colMinNr" :key="idx">
          {{ nr }}
        </td>
      </tr>

      <tr>
        <td v-for="(col, idx) in colNr" :key="idx">
          <input
            class="input input--solution"
            type="number"
            min="0"
            max="9"
          >
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import fillArray from '.././assets/js/fillArray'

  export default {
    props: {
      number1: {
        type: String,
        required: true
      },
      number2: {
        type: String,
        required: true
      }
    },
    computed: {
      colNr () {
        return this.number1.length + 1
      },
      colMaxNr () {
        return fillArray(this.number1, this.colNr)
      },
      colMinNr () {
        return fillArray(this.number2, this.colNr)
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    align-items: center;
  }

  .sign {
    font-size: 35px;
    padding: 80px 40px 0 0;
  }

  .table {
    border: 2px solid #000;
    border-radius: 3px;
    background-color: #fff;
    border-collapse: collapse;
  }

  .tr--border {
    border-bottom: 5px solid black;
  }

  .td {
    color: black;
    text-align: center;

    &--nr {
      padding: 15px;
      border: 1px solid #999;
    }

    &--top {
      padding: 10px 0;
    }
  }

  .input {
    border: none;

    &--solution {
      font-size: 21px;
      font-weight: 700;
      padding: 15px 0 15px 25px;
      width: 35px;

      background: #e0e076;
    }

    &--top {
      padding-left: 14px;
      padding-right: 0;
      width: 30px;
      border: 1px solid rgba(212, 121, 121, 0.5);
    }
  }
</style>
