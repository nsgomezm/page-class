<template>
  <div>
    <TemplateHeader></TemplateHeader>
    <slot></slot>
    <TemplateFooter></TemplateFooter>
  </div>
</template>

<script setup>
import TemplateHeader from "@/layouts/components/TemplateHeader.vue";
import TemplateFooter from "@/layouts/components/TemplateFooter.vue";
</script>