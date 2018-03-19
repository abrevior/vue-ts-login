import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: {
    label: String,
    isRequired: Boolean,
    type: String
  },
  watch: {
    value: function (data) {
      this.$emit('input', data);
    }
  }
})
export default class Input extends Vue {
  value: string = '';
  focus: boolean = false;

  get fieldClass(): object {
    let status: boolean = this.value !== '';
    return {
      active: status,
      highlight: this.focus && status
    };
  }

  toggle(): void {
    this.focus = !this.focus;
  }
}
