import Vue from "vue";
import Component from "vue-class-component";
import Auth from "./components/auth/Auth.vue";


@Component({
  props: {
    propMessage: String
  },
  components: {
    Auth
  }
})
export default class App extends Vue {
  propMessage?: string;
  msg: Number = 123;

  helloMsg: string = "Hello, world!";
  mounted(): void {
    setInterval(() => {
      this.helloMsg = ')))))))))';
    }, 5000)
  }

  beforeMount(): void {

  }

  get computedMsg(): string {
    return "computed " + this.msg;
  }


}
