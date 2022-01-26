<template>
  <q-page class="row items-center justify-evenly p-4">
    <DetailedProductCard
      class="max-w-2xl w-full"
      v-if="product"
      :product="product"
      @onSelectCurrency="getDetailedProduct"
    ></DetailedProductCard>
  </q-page>
</template>

<script setup lang="ts">
import { productsApi } from 'src/api/products';
import { Notify } from 'quasar';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import DetailedProductCard from 'src/components/DetailedProductCard.vue';
import { DetailedProductEntity } from 'src/api/dto/detailed-product-entity';

const props = defineProps<{ id: string }>();

const router = useRouter();

const id = parseInt(props.id);
const product = ref<DetailedProductEntity>();


const getDetailedProduct = async (currency?: string) => {
  try {
    product.value = await productsApi.getDetails(id, currency);
  } catch (e) {
    Notify.create({
      type: 'negative',
      position: 'top',
      message: 'Something went wrong',
    })
    router.push('/shop');
  }
}

await getDetailedProduct();
</script>

