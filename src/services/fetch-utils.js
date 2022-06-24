import { client } from './client';

// Auth Functions
export async function signUpUser(email, password) {
  const { user } = await client.auth.signUp({
    email: email,
    password: password,
  });
}

export async function signInUser(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password: password,
  });

}

export async function logout() {
  await client.auth.signOut();
}

// Fetch Functions
export async function addNewBook(book) {
  const { data, error } = await client.from('Books')
    .insert(book)
    .single();
  return data;
}

export async function fetchBooks() {
  const { data, error } = await client.from('Books')
    .select('*');

  return data;
}
