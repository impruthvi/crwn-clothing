import SignInForm from '../../components/sign-in-foem/sign-in-form.component';
import SignUpForm from '../../components/sign-up-form/sign-up-form.component';
import { AuthenticationContainer } from './authentication.styles';

const Authentication = () => {
  return (
    <AuthenticationContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticationContainer>
  );
};

export default Authentication;
