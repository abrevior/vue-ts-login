import Vue from 'vue';
import Component from 'vue-class-component';
import FocusMap from '../../interfaces/FocusMap';
import UserService from '../../services/User';
import UserDataCreate from '../../interfaces/UserDataCreate';

@Component({})
export default class Signup extends Vue {
  firstName: string = '';
  focus: FocusMap = {
    'email': false,
    'firstName': false,
    'lastName': false,
    'password': false
  };
  firstNameFocus: boolean = false;
  lastName: string = '';
  lastNameFocus: boolean = false;
  email: string = '';
  emailFocus: boolean = false;
  password: string = '';
  passwordFocus: boolean = false;

  get emailClass(): object {
    let status: boolean = this.email !== '';
    return {
      active: status,
      highlight: this.focus.email && status
    }
  }

  get firstNameClass(): object {
    let status: boolean = this.firstName !== '';
    return {
      active: status,
      highlight: this.focus.firstName && status
    }
  }

  get lastNameClass(): object {
    let status: boolean = this.lastName !== '';
    return {
      active: status,
      highlight: this.focus.lastName && status
    }
  }

  get passwordClass(): object {
    let status: boolean = this.password !== '';
    return {
      active: status,
      highlight: this.focus.password && status
    }
  }

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

  toggle(key: string): void {
    this.focus[key] = !this.focus[key];
  }

}
