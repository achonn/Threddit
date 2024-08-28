import { useNavigate } from 'react-router-dom';
import styles from '../styles/Authorization.module.css';

const SignUpPage = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/sign-in');
  };

  return (
    <>
      <div className={styles.container}>
        <form
          action='/sign-up-form'
          method='post'
          className={styles.signUpForm}
        >
          <div className='title-wrapper'>
            <h1 className={styles.title}>Create An Account</h1>
            <p className={styles.message}>
              Create an account to enjoy all ther services without any ads for
              free!
            </p>
          </div>
          <input
            type='text'
            name='username'
            placeholder='Username'
            className={styles.input}
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            className={styles.input}
          />
          <button type='submit' className={styles.button}>
            Create Account
          </button>
          <div className={styles.message2}>
            Already Have An Account?
            <span className={styles.span} onClick={handleClick}>
              Sign In
            </span>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignUpPage;
