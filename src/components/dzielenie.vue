<template>
  <div class="wrapper">
    <div class="divisor">
      : {{ number2 }}
    </div>

    <table class="table">
      <tbody>
        <tr class="tr tr--border">
          <td v-for="(col, idx) in colNr" :key="idx">
            <input
              class="input input--solution"
              type="number"
              min="0"
              max="9"
            >
          </td>
        </tr>

        <tr>
          <td class="td td--nr" v-for="(nr, idx) in dividendArray" :key="idx">
            {{ nr }}
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
        return this.number1.length
      },
      dividendArray() {
        return fillArray(this.number1, this.colNr)
      }
    }
  }
</script>

<style scoped lang="scss">
  .wrapper {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }

  .divisor {
    font-size: 30px;
    padding: 60px 0 0 30px;
    letter-spacing: 4px;
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
