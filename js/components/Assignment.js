export default {
  template: `
  <li>
      <label class="p-3 flex justify-between item-center">
          - {{assign.name}}
          <input type="checkbox" v-model="assign.complete" class="ml-3">
      </label>
  </li>
  `,
  props: {
    assign: Object,
  },
};
