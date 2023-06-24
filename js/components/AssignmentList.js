import Assignment from "./Assignment.js";
export default {
  components: { Assignment },
  template: `
  <section v-show="assignments_prop.length"> 
    <h2 class="font-bold mb-2">{{title}}</h2>
    <ul class="border border-gray-600 divide-y divide-gray-600">
        <Assignment v-for="assign in assignments_prop" :key="assign.id" :assign="assign"></Assignment>
    </ul>
</section>`,

  props: {
    assignments_prop: Array,
    title: String,
  },
};
