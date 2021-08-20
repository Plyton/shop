<template>
  <div :class="{
      big: big,
      small: !big
  }">
    <header>
      <div class="logo">ER-shop</div>
      <div class="cart">
        <Search ref="searchComponentRef" />
        <button class="btn-cart" @click="show=!show">Cart</button>
        <Cart ref="cartRef" />
      </div>
    </header>
    <main>
      <Catalog ref="catalogRef" />
    </main>
  </div>
</template>

<script>
import Cart from "./containers/cart.vue";
import Catalog from "./containers/catalog.vue";
import Search from "./components/searchComponent.vue";

export default {
  data() {
    return {
      show: true,
      big: false
    };
  },
  components: { Cart, Catalog, Search },
  methods: {
    get(url) {
      return fetch(url).then(d => d.json());
    },
    post(url, obj) {
      return fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      }).then(d => d.json());
    },
    delete(url) {
      return fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
      }).then(d => d.json());
    },
    put(url, obj) {
      return fetch(url, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(obj)
      }).then(d => d.json());
    }
  }
};
</script>

<style lang="less">
body {
  font-family: "SF Pro Display", sans-serif;
  min-width: 350px;

  div {
    .small {
      font-size: 1em;
    }

    .big {
      font-size: 2em;
    }

    button:focus {
      outline: none;
    }

    p {
      margin: 0 0 5px 0;
    }

    img {
      max-width: 100%;
      height: auto;
    }
  }
}
</style>



