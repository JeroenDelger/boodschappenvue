import Vue from 'vue'
import Vuex from 'vuex'
import { GroceryApp } from '@/main'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: true,
  state: {
    groceryList: [
      {id: 0, type: 'Brood', price: 1.00, amount: 1},
      {id: 1, type: 'Krenten', price: 1.23, amount: 1},
      {id: 2, type: 'Pasta', price: 1.43, amount: 1},
      {id: 3, type: 'Appels', price: 0.19, amount: 1},
      {id: 4, type: 'Peren', price: 1.19, amount: 1},
    ],
  },

  mutations: {
    addProduct(state, newgrocery){
      state.groceryList.push(newgrocery);
      GroceryApp.$router.push({ path: `/` })
    },

    ChangeProduct(state, groceryData){
      state.groceryList[state.groceryList.findIndex(grocery => grocery.id == groceryData.id)] = groceryData      
      GroceryApp.$router.push({ path: `/` })
    },

    DeleteProduct(groceryList, index){
      groceryList = groceryList.groceryList
      groceryList.splice(index, 1);
    }
  },

  getters: {
    getProdcutById: (state) => (id) => {  
      return state.groceryList[id];
    },
    
    getNextId: (state) => {
      return state.groceryList;
    }
  },

  actions: {
    ChangeProduct({ commit }, groceryData) {
      commit('ChangeProduct', groceryData)
    },

    addProduct({ commit }, newgrocery) {
      newgrocery.id = this.state.groceryList.slice(-1)[0].id+1 
      commit('addProduct', newgrocery)
    },
  }
})

export default store
