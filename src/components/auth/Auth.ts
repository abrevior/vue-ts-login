import Vue from 'vue';
import Component from 'vue-class-component';
import Login from './Login.vue';
import Signup from './Signup.vue';

@Component({
  components: {
    login: Login,
    signup: Signup
  }
})
export default class Auth extends Vue {
  toggleForms: boolean = true;

  toggle(): void {
    this.toggleForms = !this.toggleForms;
  }
}
