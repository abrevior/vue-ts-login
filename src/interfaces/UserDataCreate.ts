import UserData from './UserData';

export default interface UserDataCreate extends UserData {
  password: string;
}
