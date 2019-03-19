<template>
  <div class="wrapper">
    <div class="divisor">
      : {{ number2 }}
    </div>

    <div class="tables">
      <!--main operation-->
      <table class="table table--main">
        <tbody>
        <tr>
          <td
            class="td td--top"
            v-for="(col, idx) in colNr"
            :key="idx"
          >
            <input
              class="inpu input--top"
              type="number"
              min="0"
              max="9"
            >
          </td>
        </tr>

        <tr class="tr tr--border">
          <td v-for="(col, idx) in colNr" :key="idx">
            <input
              class="input input--solution input--solution2"
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
      <!--e/o main operation-->

      <table
        v-for="(table, idx) in (colNr - number2.length + 1)"
        :key="idx"
        :class="{ 'table--even': idx % 2 !== 0}"
        class="table table--subtraction"
      >
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

        <tr class="tr">
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
  }

  .divisor {
    font-size: 30px;
    padding: 110px 0 0 30px;
    letter-spacing: 4px;
  }

  .table {
    border: 2px solid #000;
    border-top: none;
    border-radius: 3px;
    background-color: #fff;
    border-collapse: collapse;

    &--main {
      border-top: 2px solid #000;

      & .tr--border {
        border-bottom: 5px solid black;
      }
    }
  }

  .tr--border {
    border-bottom: 3.5px solid black;
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
      font-size: 17px;
      font-weight: 500;
      padding: 5px 0 5px 25px;
      width: 35px;

      background: #e0e076;
    }

    &--solution2 {
      font-size: 21px;
      font-weight: 700;
      padding: 15px 0 15px 25px;
      background: #d5684d;
    }

    &--top {
      padding-left: 14px;
      padding-right: 0;
      width: 30px;
      border: 1px solid rgba(212, 121, 121, 0.5);
    }
  }

  .table--even .input--solution {
    background: #f4f4ba;
  }

  .table--subtraction {
    position: relative;

    &::before {
      content: '-';
      position: absolute;
      left: -40px;
      top: 0;
      font-size: 35px;
    }
  }
</style>
