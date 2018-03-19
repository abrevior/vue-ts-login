import Vue from 'vue';
import Component from 'vue-class-component';
import Authentication from '../../services/Authentication';
import InputComponent from '../../mini-components/Input.component.vue';

@Component({
  components: {
    'input-component': InputComponent
  }
})
export default class Login extends Vue {
  email: string = '';
  password: string = '';

  async logIn() {
    const { data } = await Authentication.getAccessToken(this.email, this.password);
    console.log('Result => ', data);
    // TODO save token to localstorage and use for another features
  }
}
