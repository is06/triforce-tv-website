import DsButton from './DsButton.vue'

export default {
  component: DsButton,
  title: 'Component/Button',
}

export const Primary = () => ({
  components: { DsButton },
  template: '<DsButton text="Button" />',
})
