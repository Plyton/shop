<template>
  <div class="product">
    <Item v-for="item of filteredItems" :key="item.id_product" :item="item" />
    <Item :type="'temp'" @createnew="addNewCatalogItem" />
  </div>
</template>

<script>
import Item from "../components/list_item.vue";
export default {
  components: { Item },
  data() {
    return {
      items: [],
      filteredItems: [],
      url: "https://dry-sierra-16806.herokuapp.com/catalog/"
    };
  },
  methods: {
    addItem(item) {
      this.$parent.$refs.cartRef.addItem(item);
    },

// товар можно добваить в каталог локально 
    addNewCatalogItem(prod) {
      let newItem = JSON.parse(JSON.stringify(prod));
      newItem.price = Number(newItem.price);
      this.$parent.post('api/catalog/', newItem).then(res => {
        if (res.id) {
          this.items.push({
            id_product: res.id,
            product_name: newItem.product_name,
            price: newItem.price,
            img: newItem.img
          });
        }
      });
    },

    filter(str) {
      if (str) {
        this.filteredItems = this.items.filter(el =>
          el.product_name.toLowerCase().includes(str.toLowerCase())
        );
      }
    },

    clearFilter() {
      this.$parent.$refs.searchComponentRef.searchString = "";
      this.filteredItems = this.items;
    }
  },

  mounted() {
    this.$parent.get(this.url).then(data => {
      this.items = data;
      this.filteredItems = data;
    });
  }
};
</script>

<style>
</style>