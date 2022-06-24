import { client } from './client';


export async function signUpUser(email, password) {
  const { user, error } = await client.auth.signUp({
    email: email,
    password: password,
  });
}

export async function signInUser(email, password) {
  const { user, error } = await client.auth.signIn({
    email: email,
    password: password,
  });
}

export async function logout() {
  await client.auth.signOut();
}

export async function fetchBooks() {
  const response = await client.from('Books')
    .select('*');

  return response;
}
