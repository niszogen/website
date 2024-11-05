<script setup>
import linkElement from './linkElement.vue';
import entries from '@/content/linkEntries.json';
</script>

<template>
    <div class="links">
        <div v-for="item in entries">
            <linkElement :url="item.url" :cssClass="item.class" :text="item.text"/>
        </div>
    </div>
</template>