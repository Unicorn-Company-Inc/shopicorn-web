<template>
  <q-page class="row items-center justify-evenly p-4">
    <q-card v-if="product" class="max-w-2xl w-full">
      <q-list>
        <q-item>
          <q-item-section>
            <q-item-label>Name</q-item-label>
            <q-item-label caption>{{ product.name }}</q-item-label>
          </q-item-section>
        </q-item>
         <q-separator />
        <q-item>
          <q-item-section>
            <q-item-label>Description</q-item-label>
            <q-item-label caption>{{ product.description }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section>
            <q-item-label>Category</q-item-label>
            <q-item-label caption>{{ product.category }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section>
            <q-item-label>Manufacturer</q-item-label>
            <q-item-label caption>{{ product.manufacturer }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section>
            <q-item-label>Release Date</q-item-label>
            <q-item-label caption>{{ product.releaseDate }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section>
            <q-item-label>Stars</q-item-label>
            <q-item-label caption>{{ product.stars }}</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator />
        <q-item>
          <q-item-section>
            <q-item-label>Color</q-item-label>
            <q-item-label caption>{{ product.color }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { productsApi } from 'src/api/products';
import { Notify } from 'quasar';
import { ProductEntity } from 'src/api/dto/product-entity';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const props = defineProps<{ id: string }>();

const router = useRouter();

const id = parseInt(props.id);
const product = ref<ProductEntity>();

try {
  product.value = await productsApi.get(id);
} catch (e) {
  Notify.create({
    type: 'negative',
    position: 'top',
    message: 'Something went wrong',
  })
  router.push('/shop');
}
</script>

