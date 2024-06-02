<!--<script-->
<!--  setup-->
<!--  lang="ts">-->
<!--import products from '~/data/products';-->
<!--import { ChevronDown } from 'lucide-vue-next';-->
<!--import { Button } from '@/components/ui/button';-->
<!--import {-->
<!--  DropdownMenu,-->
<!--  DropdownMenuContent,-->
<!--  DropdownMenuGroup,-->
<!--  DropdownMenuItem,-->
<!--  DropdownMenuPortal,-->
<!--  DropdownMenuSeparator,-->
<!--  DropdownMenuSub,-->
<!--  DropdownMenuSubContent,-->
<!--  DropdownMenuSubTrigger,-->
<!--  DropdownMenuTrigger,-->
<!--} from '@/components/ui/dropdown-menu';-->
<!--import { useRoute } from 'vue-router';-->

<!--const route = useRoute();-->

<!--import { useId } from '#app';-->
<!--import { useLocation } from '~/composables/useLocation';-->
<!--import { isRouteActive } from '~/utils/isRouteActive';-->

<!--const location = useLocation();-->

<!--const dropdownId = useId();-->

<!--const links = [-->
<!--  {-->
<!--    id: 1,-->
<!--    page: 'company',-->
<!--    text: 'о компании',-->
<!--  },-->
<!--  {-->
<!--    id: 2,-->
<!--    page: 'help-mom',-->
<!--    text: 'полезная информация',-->
<!--  },-->
<!--  {-->
<!--    id: 3,-->
<!--    page: 'contacts',-->
<!--    text: 'контакты',-->
<!--  },-->
<!--];-->
<!--</script>-->

<template>
  <div class="hidden 2xl:block items-center gap-[16px] uppercase">

<!--    <DropdownMenu>-->
<!--      <DropdownMenuTrigger as-child>-->
<!--        <Button-->
<!--          :id="dropdownId"-->
<!--          :variant="isRouteActive('production', route) ? 'default' : 'ghost'"-->
<!--          class="uppercase navigation-link"-->
<!--          :class="isRouteActive('production', route) ? '' : 'text-secondary'"-->
<!--        >-->
<!--          продукция-->
<!--          <ChevronDown class="w-4 h-4 mr-0" />-->
<!--        </Button>-->
<!--      </DropdownMenuTrigger>-->
<!--      <DropdownMenuContent class="w-96">-->
<!--        <DropdownMenuGroup>-->
<!--          <template-->
<!--            v-for="(category, index) in products.categories"-->
<!--            :key="category.slug">-->
<!--            <DropdownMenuSub v-if="category.productList.length">-->
<!--              <DropdownMenuSubTrigger>-->
<!--                <span>{{ category.title }}</span>-->
<!--              </DropdownMenuSubTrigger>-->
<!--              <DropdownMenuPortal>-->
<!--                <DropdownMenuSubContent>-->
<!--                  <template-->
<!--                    v-for="(product, index) in category.productList"-->
<!--                    :key="product.id">-->
<!--                    <DropdownMenuItem>-->
<!--                      <NuxtLink-->
<!--                        class="w-full"-->
<!--                        :to="`/${location.currentLocation}/production/${category.slug}/${product.slug}`">-->
<!--                        {{ product.title }}-->
<!--                      </NuxtLink>-->
<!--                    </DropdownMenuItem>-->
<!--                    <DropdownMenuSeparator-->
<!--                      v-if="index !== category.productList.length - 1"-->
<!--                      class="m-0" />-->
<!--                  </template>-->
<!--                </DropdownMenuSubContent>-->
<!--              </DropdownMenuPortal>-->
<!--            </DropdownMenuSub>-->
<!--            <DropdownMenuItem v-else>-->
<!--              <NuxtLink-->
<!--                class="w-full"-->
<!--                :to="`/${location.currentLocation}/production/${category.slug}`">-->
<!--                {{ category.title }}-->
<!--              </NuxtLink>-->
<!--            </DropdownMenuItem>-->
<!--            <DropdownMenuSeparator-->
<!--              v-if="index !== products.categories.length - 1"-->
<!--              class="m-0" />-->
<!--          </template>-->
<!--        </DropdownMenuGroup>-->
<!--      </DropdownMenuContent>-->
<!--    </DropdownMenu>-->

<!--    <Button-->
<!--      v-for="link in links"-->
<!--      :key="link.id"-->
<!--      :variant="isRouteActive(link.page, route) ? 'default' : 'ghost'"-->
<!--      as-child>-->
<!--      <NuxtLink-->
<!--        :to="`/${location.currentLocation}/${link.page}`"-->
<!--        :class="isRouteActive(link.page, route) ? '' : 'text-secondary'">-->
<!--        {{ link.text }}-->
<!--      </NuxtLink>-->
<!--    </Button>-->
  </div>
</template>
