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
      <q-rating readonly v-model="product.stars" size="2em" :max="5" color="yellow" />
    </q-card-section>
    <q-card-actions>
      <q-btn class="bold" flat color="primary" @click="router.push(`/shop/${product.id.toString()}`)">Info</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script setup lang="ts">
import { ProductEntity } from 'src/api/dto/product-entity';
import { useRouter } from 'vue-router';

const props = defineProps<{
  product: ProductEntity;
}>();

const router = useRouter();

</script>

<style>
.color {
  background-color: v-bind("props.product.color") !important;
}
</style>
