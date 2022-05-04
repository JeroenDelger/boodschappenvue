<template>
  <form @submit.prevent="addproduct">
    Product: <input v-model='newgrocery.type' type="text" id="type"><br>
    Prijs: <input v-model='newgrocery.price' type="value" id="price"><br>
    Aantal: <input v-model='newgrocery.amount' type="number" id="amount"><br>
      <input type='submit'>
    </form>
</template>


<script>
  export default {
    data(){ 
      return {
        newgrocery: {
          type: null,
          price: null,
          amount: null,
        } 
      };
    },
  
    methods:  {
      addproduct(){
        this.$store.dispatch('addProduct', this.newgrocery)
      },
    },      
  }
</script>