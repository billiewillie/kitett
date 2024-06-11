<script
  setup
  lang="ts">
import {Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList} from "@/components/ui/breadcrumb";
import {RouterLink} from "vue-router";
import type {Breadcrumb as BreadcrumbProp} from "~/types";
import {BreadcrumbPage, BreadcrumbSeparator} from "~/components/ui/breadcrumb";

defineProps<{ links: BreadcrumbProp[] }>()
</script>

<template>
  <Breadcrumb class="hidden xl:flex mb-[24px]">
    <BreadcrumbList>
      <template
        v-for="(link, index) in links"
        :key="link.id">
        <template v-if="index !== links.length - 1">
          <BreadcrumbItem>
            <BreadcrumbLink as-child>
              <RouterLink
                :to="`${link.link}`"
                v-html="link.title"/>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator/>
        </template>
        <template v-else>
          <BreadcrumbItem>
            <BreadcrumbPage :text="link.title"/>
          </BreadcrumbItem>
        </template>
      </template>
    </BreadcrumbList>
  </Breadcrumb>
</template>

