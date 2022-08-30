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
  <Head>
    <Title>扫点场所码</Title>
  </Head>

  <div>
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
                :key="code.name"
                :title="code.name"
                is-link
                :url="buildUrl(code.id)"
            />
          </van-cell-group>
        </van-tab>
      </van-tabs>
    </div>

    <div class="footer">
      <p class="text-center">
        &copy; JingBh 2022
      </p>
      <p>
        注意：此网页非北京工业大学官方提供，仅收集相关信息，为同学们提供便利。
      </p>
      <p>
        平乐园校区相关数据待补充，欢迎<a class="link-no-color" href="https://github.com/bjut-tech/epicode" target="_blank">提交 Pull Request</a>。
      </p>
    </div>
  </div>
</template>
