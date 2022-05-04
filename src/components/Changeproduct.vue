<template>
  <div>
      <h2>{{ grocery.type }} bewerken</h2>
      <form @submit.prevent="Changeproduct" >
        Product: <input v-model='groceryData.type' type="text" id="type"><br>
        Prijs: <input v-model='groceryData.price'  type="value" id="price"><br>
        Aantal: <input v-model='groceryData.amount'  type="number" id="amount"><br>
          <input type='submit'>
      </form> 
    </div>
</template>

<script>
  export default {
    data(){ 
      return { 
        ProductId: this.$route.params.id,
        groceryData: {},
      }
    },
        
    methods:  {
      Changeproduct(){
        this.$store.dispatch('ChangeProduct', this.groceryData);
      },

      loadData(product) {
        this.groceryData = JSON.parse(JSON.stringify(product));
      },
    },

    computed: {      
      grocery() {
        const product = this.$store.getters['getProdcutById'](this.ProductId);
        this.loadData(product);
        return product;
      },
    }   
  }
</script>