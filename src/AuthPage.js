import { useState } from 'react';
import { signUpUser, signInUser } from './services/fetch-utils';


export default function AuthPage({ setUser }) {
  const [signUpEmail, setSignUpEmail] = useState('');
  const [signUpPassword, setSignUpPassword] = useState('');

  const [signInEmail, setSignInEmail] = useState('');
  const [signInPassword, setSignInPassword] = useState('');

  async function handleSignUp(e) {
    e.preventDefault();

    const user = await signUpUser(signUpEmail, signUpPassword);
    setUser(user);
  }

  async function handleSignIn(e) {
    e.preventDefault();

    const user = await signInUser(signInEmail, signInPassword);
    setUser(user);
  }

  return (
    <div>AuthPage
      {/* Sign Up New User */}
      <form onSubmit={handleSignUp}>
        <label>Email
          <input value={signUpEmail} 
            onChange={(e) => setSignUpEmail(e.target.value)}
            type='email' />
        </label>
        <label>Password
          <input value={signUpPassword} 
            onChange={(e) => setSignUpPassword(e.target.value)}
            type='password' />
        </label>
        <button>Sign Up</button>
      </form>

      {/* Sign In Existing User */}
      <form onSubmit={handleSignIn}>
        <label>Email
          <input value={signInEmail} 
            onChange={(e) => setSignInEmail(e.target.value)}
            type='email' />
        </label>
        <label>Password
          <input value={signInPassword} 
            onChange={(e) => setSignInPassword(e.target.value)}
            type='password' />
        </label>
        <button>Sign In</button>
      </form>
    </div>
  );
}
