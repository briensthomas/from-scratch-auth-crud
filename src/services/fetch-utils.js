import { client } from './client';

// Auth Functions
export async function signUpUser(email, password) {
  const { user } = await client.auth.signUp({
    email: email,
    password: password,
  });
  return user;
}

export async function signInUser(email, password) {
  const { user } = await client.auth.signIn({
    email: email,
    password: password,
  });
  return user;
}

export async function logout() {
  await client.auth.signOut();
}

// CREATE book function
export async function addNewBook(book) {
  const { data } = await client.from('Books')
    .insert(book)
    .single();
  return data;
}

// UPDATE book function
export async function editBook(book, id) {
  const { data } = await client.from('Books')
    .update(book)
    .match({ id: id })
    .single();

  return data;
}

// DELETE book function
export async function deleteBook(id) {
  const { data } = await client.from('Books')
    .delete()
    .match({ id: id })
    .single();

  return data;
}

// Fetch Functions
export async function fetchBooks() {
  const { data } = await client.from('Books')
    .select('*');

  return data;
}

export async function fetchBookById(id) {
  const { data } = await client.from('Books')
    .select('*')
    .match({ id })
    .single();

  return data;
}