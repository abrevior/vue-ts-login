import Vue from 'vue';
import Component from 'vue-class-component';
import FocusMap from '../../interfaces/FocusMap';
import Authentication from '../../services/Authentication';

@Component({})
export default class Login extends Vue {
  email: string = '';
  password: string = '';
  focus: FocusMap = {
    email: false,
    password: false
  }

  get emailClass(): object {
    let status: boolean = this.email !== '';
    return {
      active: status,
      highlight: this.focus.email && status
    }
  }

  get passwordClass(): object {
    let status: boolean = this.password !== '';
    return {
      active: status,
      highlight: this.focus.password && status
    };
  }

  async logIn() {
    const { data } = await Authentication.getAccessToken(this.email, this.password);
    console.log('Result => ', data);
    // TODO save token to localstorage and use for another features
  }

  toggle(key: string): void {
    this.focus[key] = !this.focus[key];
  }
}
