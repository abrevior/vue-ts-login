import Vue from 'vue';
import Component from 'vue-class-component';
import UserService from '../../services/User';
import UserDataCreate from '../../interfaces/UserDataCreate';
import InputComponent from '../../mini-components/Input.component.vue';

@Component({
  components:{
    'input-component': InputComponent
  }
})
export default class Signup extends Vue {
  firstName: string = '';
  lean = false;
  lastName: string = '';
  email: string = '';
  password: string = '';

  async createUser() {

  }

  async signUp() {
    console.log('Start signup');
    const data: UserDataCreate = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };
    const { data: result } = await UserService.create(data);
    console.log('result => ', result);
    // TODO: make notify after registrating and login
  }
}
