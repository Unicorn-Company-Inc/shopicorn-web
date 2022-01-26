<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-primary text-white text-left">
      <q-toolbar>
        <q-toolbar-title>Shopicorn</q-toolbar-title>
      </q-toolbar>
      <q-tabs>
        <q-route-tab slot="title" name="tab-1" icon="calculate" label="Mehrwertseuer" to="/" exact />
        <q-route-tab
          slot="title"
          name="tab-2"
          icon="shopping_cart"
          label="Accessory Shop"
          to="/shop"
          exact
        />
      </q-tabs>
    </q-header>

    <q-page-container>
      <router-view v-slot="{ Component }">
        <suspense timeout="0">
          <template #default>
            <component :is="Component" :key="$route.path"></component>
          </template>
          <template #fallback>
            <RouteSpinner></RouteSpinner>
          </template>
        </suspense>
      </router-view>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import RouteSpinner from 'src/components/RouteSpinner.vue';
</script>