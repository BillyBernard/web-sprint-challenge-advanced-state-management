# Interview Answers
Be prepared to demonstrate your understanding of this week's concepts by answering questions on the following topics. These will not be counted as a part of your sprint score but will be helpful for preparing you for your endorsement interview, and enhancing overall understanding.

1. What problem does the context API help solve?

- Context API is useful for sharing state between components that you can't easily share with props.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions are javascript objects and are the source of information for the store in relation to redux. Reducers are functions that take the current state and action and return a new state. Store is the object that holds the state of the app. Store is the single source of truth because it holds the state of the application.

3. What does `redux-thunk` allow us to do? How does it change our `action-creators`?

- Redux Thunk is a middleware that allows you to call the action creators that return a function which takes the store's dispatch method as the argument and which is afterwards used to dispatch the synchronous action after the API or side effects has been finished.

4. What is your favorite state management system you've learned and this sprint? Please explain why!

- context API because it was easiest to understand and work with.