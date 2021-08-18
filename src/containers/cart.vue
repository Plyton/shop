<template>
  <div class="cart-block">
    <div class="d-flex">
      <strong class="d-block">Всего товаров:</strong>
      <div id="quantity">{{calcTotal()}}</div>
    </div>

    <hr />

    <div class="cart-items"  v-show="$parent.show">
      <Item
        v-for="item of items"
        :key="item.id_product"
        :item="item"
        :type="'cart'"
        @deleteitem="removeItem"
      />
    </div>

    <hr />

    <div class="d-flex">
      <strong class="d-block">Общая ст-ть:</strong>
      <div id="price">{{ calcSum() }}$</div>
    </div>
  </div>
</template>

<script>
import Item from "../components/list_item.vue";
export default {
  components: { Item },
  data() {
    return {
      url: "/api/cart/",
      items: []
    };
  },
  methods: {
    addItem(item) {
      let find = this.items.find(el => el.id_product == item.id_product);
      if (find) {
        this.$parent
          .put(this.url + item.id_product, {
            amount: 1,
            sum: find.price + item.price
          })
          .then(res => {
            console.log(res);
            if (res.status) {
              find.quantity++;
              find.price += item.price;
            }
          });
      } else {
        let newItem = Object.assign({}, item, { quantity: 1 });
        this.$parent.post(this.url, newItem).then(res => {
          if (res.status) {
            this.items.push(newItem);
          }
        });
      }
    },
    removeItem(item) {
      let find = this.items.find(el => el.id_product == item.id_product);
      if (find.quantity > 1) {
        this.$parent
          .put(this.url + item.id_product, {
            amount: -1,
            sum: find.price - find.price / find.quantity
          })
          .then(res => {
            if (res.status) {
              find.price -= find.price / find.quantity;
              find.quantity--;
            }
          });
      } else {
        this.$parent.delete(this.url + item.id_product).then(res => {
          if (res.status) {
            this.items.splice(this.items.indexOf(find), 1);
          }
        });
      }
    },
    calcTotal() {
      let total = 0;
      this.items.forEach(el => {
        total += el.quantity;
      });
      return total;
    },
    calcSum() {
      let sum = 0;
      this.items.forEach(el => {
        sum += el.price;
      });
      return sum;
    }
  },
  mounted() {
    this.$parent.get(this.url).then(d => {
      this.items = d.contents;
    });
  }
};
</script>

<style>
</style>