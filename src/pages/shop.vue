<template>
  <q-page class="p-4">
    <div class="flex justify-center items-center">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 max-w-5xl w-full">
        <ProductCard :product="product" v-for="product in products" :key="product.id"></ProductCard>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import ProductCard from 'src/components/ProductCard.vue';
import { productsApi } from 'src/api/products';
import { Notify } from 'quasar';
import { ProductEntity } from 'src/api/dto/product-entity';
import { ref } from 'vue';

const products = ref<ProductEntity[]>([]);

try {
  products.value = await productsApi.getAll();
} catch (e) {
  Notify.create({
    type: 'negative',
    position: 'top',
    message: 'Something went wrong',
  })
}
</script>

