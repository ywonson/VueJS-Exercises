export default {
  template: `
  <li>
      <label>
          my {{assign.name}}
          <input type="checkbox" v-model="assign.complete">
      </label>
  </li>
  `,
  props: {
    assign: Object,
  },
};
