# React Inventory/Collection App with Auth

| User should be able to . . .                                                         |             |
| :----------------------------------------------------------------------------------- | ----------: |
| Visit the deployed app on Netlify, with link in the About section of the Github repo |  **required for grading** |

| Events                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| On the home page (`'/'`), Login or Signup using the login and signup forms. On success, redirect to the `/items` page. | 1|
| If the user tries to visit any page but they are not logged in, redirect them to this Auth page   |        1 |
| Logout by clicking the logout button                                                       |       1 |

| Components                                                                                |             |
| :----------------------------------------------------------------------------------- | ----------: |
| `App()` : contains routes for home/auth page, `create`, `items/:id`, `/items` |1|
| `App()` : tracks user state, passing the `setUser` callback to the `AuthPage` |1|
| `App()`:  If user is logged in, header contains logout button and links to the Create and List pages. |1|
|  `App()`:  Use a ternary to decide whether to let users visit particular routes, depending on whether there is a user in `App.js` state |2|
| `AuthPage({ setUser })` : tracks user form state and allows users to sign up and sign in |2|
| `AuthPage({ setUser })` : Sets the `user` in `App.js` state, using the `setUser` function passed down from the parent |2|
| `CreatePage()` : Tracks form state for your item's fields. Uses controlled form inputs (value property is linked to react state) |2|
| `CreatePage()` : On submit, create a item in supabase using form data and redirect user back to the list page using the correct react-router-dom hook |2|
| `UpdatePage()` : Fetches and displays the appropriate item on load. The `useEffect` dependency array should account for changes in the URL id param. On Submit, update the item. On load, preload the form. |2|
| `ListPage()` : Fetches and displays all items on load by using .map and the `Item` component. |1|
| `Item()` : Renders a single item, with a react-rotuer-dom Link that takes the user to the item's edit page  |1|

### Stretch goal ideas:
- Refactor the form that we use in Update and Create to a resuable component. It will replace the form in CreatePage and UpdatePage, since those two are basically the same, with very small differences. Looking at those difference youy will be to answer the question: What props does this form component need?
- Add a review feature that let's users write and read reviews for each item on its edit page.