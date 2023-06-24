# VueJS-Exercises

dedicated to mastering Vue.js

npx serve
vinit <template></template><script setup lang="ts"></script><style></style>

template <template><div></div></template>

scripte <script setup lang="ts"></script>

style <style lang=""></style>

css <style scoped></style>

scss <style lang="scss"></style>

Sass <style lang="sass"></style>

Less <style lang="less"></style>

script&vue
clg console.log('output->${0}',${0:name})

Import import {...} from '...'

Data data(){return {...}}

Setup setup(){...return{...}}

vText v-text="..."

vHtml v-html="..."

vShow v-show="..."

vIf v-if="..."

velse v-else

velseif v-else-if="..."

vFor v-for="... in ..." :key="..."

vFor(withoutKey) v-for="... in ..."

vOn v-on="..."

vBind v-bind="..."

vModel v-model="..."

vSlot v-slot="..."

vOnce v-once

iscomponent <component :is="..."></component>

vprops const props = defineProps({ foo: String })

vemits const emit = defineEmits(['...', '...'])

vue-router
beforeeach router.beforeEach((to, from, next) =>{...}

beforeresolve router.beforeResolve((to, from, next) => {...}

afterEach router.afterEach((to, from) => {...}

beforeenter beforeEnter(to, from, next) {...}

beforeRouteEnter beforeRouteEnter(to, from, next) {...}

beforeRouteLeave beforeRouteLeave(to, from, next) {...}

vroute {'path':...,name:...,component: () => import('...')}
