<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">{{ product.name }}</div>
      <div class="text-subtitle2">{{ product.description }}</div>
    </q-card-section>

    <q-separator inset />

    <q-card-section>
      <q-chip>
        <q-avatar icon="category" color="primary" text-color="white" />
        {{ product.category }}
      </q-chip>
      <q-chip>
        <q-avatar icon="store" color="primary" text-color="white" />
        {{ product.manufacturer }}
      </q-chip>
      <q-chip>
        <q-avatar icon="calendar_today" color="primary" text-color="white" />
        {{ new Date(product.releaseDate).toLocaleDateString() }}
      </q-chip>
      <q-avatar class="color" size="28px" icon="palette" color="primary" text-color="white" />
    </q-card-section>
    <q-card-section>
      <q-btn-dropdown color="primary" label="Select currency">
        <q-list>
          <q-item clickable v-close-popup @click="onSelectCurrency('EUR')">
            <q-item-section>
              <q-item-label>Euro</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="onSelectCurrency('USD')">
            <q-item-section>
              <q-item-label>Dollar</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="onSelectCurrency('GBP')">
            <q-item-section>
              <q-item-label>Pound</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="onSelectCurrency('JPY')">
            <q-item-section>
              <q-item-label>Yen</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable v-close-popup @click="onSelectCurrency('RUB')">
            <q-item-section>
              <q-item-label>Ruble</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-btn-dropdown>
    </q-card-section>
    <q-card-section>
      <div class="text-h6">Price: {{ product.price }} {{ currency }}</div>
      <div class="text-h6">Estimated delivery: {{ estimatedDelivery }}</div>
      <div class="text-h6">Stock: {{ product.stock.amount }}</div>
    </q-card-section>
    <q-card-section>
      <q-rating readonly v-model="product.stars" size="2em" :max="5" color="yellow" />
    </q-card-section>
  </q-card>
</template>

<script setup lang="ts">
import { DetailedProductEntity } from 'src/api/dto/detailed-product-entity';
import { computed } from 'vue';

const props = defineProps<{
  product: DetailedProductEntity;
}>();

const emit = defineEmits([
  'onSelectCurrency'
]);

const currency = computed(() => {
  switch (props.product.currency.toLowerCase()) {
    case 'eur':
      return '€';
    case 'usd':
      return '$';
    case 'gbp':
      return '£';
    case 'jpy':
      return '¥';
    case 'rub':
      return '₽';
    default:
      return '?';
  }
});

console.log(props.product.color);


const estimatedDelivery = computed(() => {
  return new Date(props.product.stock.estimatedDelivery).toLocaleDateString();
})

const onSelectCurrency = (currency: string) => {
  emit('onSelectCurrency', currency);
}
</script>

<style scoped>
.color {
  background-color: v-bind("props.product.color") !important;
}
</style>
