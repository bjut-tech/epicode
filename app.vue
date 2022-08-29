<script setup lang="ts">
import { onMounted, ref } from '#imports'

import data from '~/data'
import buildUrl from '~/data/buildUrl'

const active = ref(0)

const saveActive = () => {
  localStorage.setItem('activeTab', active.value.toString())
}

onMounted(() => {
  const activeTab = localStorage.getItem('activeTab')
  if (activeTab) {
    active.value = parseInt(activeTab)
  }
})
</script>

<template>
  <div class="header">
    <h1 class="title">扫点场所码</h1>
    <van-tabs
        v-model:active="active"
        swipeable
        @change="saveActive"
    >
      <van-tab
          v-for="campus of data"
          :key="campus.name"
          :title="campus.name"
      >
        <van-cell-group
            v-for="type of campus.types"
            :key="type.name"
            :title="type.name"
        >
          <van-cell
            v-for="code of type.codes"
            :key="code.id"
            :title="code.name"
            is-link
            :url="buildUrl(code.id)"
          />
        </van-cell-group>
      </van-tab>
    </van-tabs>
  </div>
</template>
