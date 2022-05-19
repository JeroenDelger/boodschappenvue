<template>
  <div>
    <h2>Vue Boodschappenopdracht</h2>
    <table id="groceryTable">
      <tr>
        <th>Product</th>
        <th>Prijs</th>
        <th>Aantal</th>
        <th>Subtotaal</th>
      </tr>
      <tr v-for="(grocery, index) in groceryList" :key="index">
        <td >{{grocery.type}}</td>
        <td >€{{grocery.price}}</td>
        <td>{{grocery.amount}}</td>
        <td >€{{(grocery.price * grocery.amount).toFixed(2)}}</td>
        <td>
          <form @submit.prevent="delproduct(index)">
            <input type='submit' value='Delete product'>
          </form>
        </td>
        <td>             
          <router-link :to="{path: '/Changeproduct/'+ index}">
            <button> Change product</button>
          </router-link>          
        </td>
      </tr>
      <tr>
        <td colspan="3">Totaal</td>
        <td >€{{totalprice}}</td>
      </tr>
    </table><br><br>

    <router-link :to="{path: '/Addproduct/'}">
      <button> Add product</button>           
    </router-link>

  </div>
</template>

<script>
export default {
  name: "groceryList",
  data(){ 
    return {  
      ProductId: false,
    }
  },
  computed: {
    groceryList() {
      return this.$store.state.groceryList
    },
    // TODO: gebruik camelCase, dus totalPrice en delProduct
    totalprice() {
      return this.groceryList.reduce((previousValue, currentValue) => previousValue + parseFloat(currentValue.amount*currentValue.price),
      0).toFixed(2);
    },
  },

  methods: {
    delproduct(index){
      // TODO: commits altijd via action laten verlopen
      // TODO: verwijderen altijd via (product) id laten verlopen, dus niet via array index om evt. fouten te voorkomen
      this.$store.commit('DeleteProduct', index);
    },
  },
  components: {
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
#groceryTable {
  margin: 0 auto;
}
.addproduct{
  color: #42b983;
  text-align: left;
}

</style>


