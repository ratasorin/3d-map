import ModalTemplate from '../Modals';
import authenticate__style from './authenticate.module.css';
import { signIn } from 'next-auth/react';
import { selectFrom } from 'store/widgets/actions/modals-actions';
const PROVIDERS = ['GOOGLE', 'GITHUB'] as const;
const Authenticate = () => {
  const { visible } = selectFrom('authenticate-modal');
  const signInWithProvider = (provider: string) => {
    signIn(provider.toLocaleLowerCase(), {
      redirect: false,
    });
  };

  return visible ? (
    <ModalTemplate
      modal="authenticate-modal"
      header={{
        title: 'Alege o metoda de autentificare',
        subtitle: '',
      }}
    >
      {PROVIDERS.map((provider) => (
        <button
          key={provider}
          className={authenticate__style.option}
          onClick={() => {
            signInWithProvider(provider);
          }}
        >
          {provider}
        </button>
      ))}
    </ModalTemplate>
  ) : null;
};

export default Authenticate;
