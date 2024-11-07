<template>
    <a :href="$attrs.url"><button type="button" :class="$attrs.text.toLowerCase()"><i :class="$attrs.cssClass"></i> {{ $attrs.text }}</button></a><br>
</template>
