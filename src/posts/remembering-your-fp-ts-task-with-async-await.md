---
title: Remembering your FP-TS Task with async / await
description: Check this shit out
date_posted: '2023-10-13'
published: true
slug: 'remembering-your-fp-ts-task-with-async-await'
cover_photo: '/posts/absolutvision-82TpEld0_e4-unsplash.jpg'
---

Functional programming as a paradigm has become very popular in the JavaScript/TypeScript community in recent years, with many libraries and frameworks borrowing from functional programming, such as with function purity and immutable values.

The [fp-ts](https://github.com/gcanti/fp-ts) library is, and I have no authority to say this, the gold standard in functional programming in TypeScript, and one of the data types provided by `fp-ts` is the `Task` type for handling async operations. The type signature `Task` is a function that evaluates to a Promise. It also takes a generic parameter, which is the type of data returned from the Promise:

```typescript
type data = { firstName: string; lastName: string };
type Task<A> = () => Promise<A>;

const getData: Task<data> = () => Promise.resolve({ firstName: 'Andrew', lastName: 'Kiernan' };
```

Tasks are great because you can build up your async operations, handle any errors or data transformations, then pass a composed Task around as an ordinary value. When it comes time to actually get the result of this operation, just invoke the Task and get the result right where you need it.

In practice, there is one issue with working with Tasks, and it can sometimes be a source of much frustration - forgetting to invoke your Task when needed, especially when chaining multiple functions together via `fp-ts`'s `pipe()` operator. One instance where I regularly ran into this issue was handling events in a React application that utilized Tasks heavily. We would fire our Task as a result of a user action, make an API call, and any state management as additional transformations of the Task.

```typescript
const UserForm = () => {
  const [loading, setLoading] = useState(false);
  const [userDetails] = useState({});

  function handleSubmit(user) {
    setLoading(true);
    return pipe(
      updateUser(user),
      mapTask(user => {
        setLoading(false);
      }
    );
  }
  return (
    <form onSubmit={() => handleSubmit(userDetails)}>
      // ...form fields
      <button type="submit">Save</button>
    </form>
  );
}
```

There's a slight issue with the above code - our API call will never happen. The return type of our `pipe()`ed method is a `Task<undefined>`, because we never called our Task. We built up a Task that would eventually make our API call, and set our loading state to `false` when it was called, but it was never called.

We have a couple of options to handle this and ensure that we remember to call our Task.

## Linting to the rescue

**Note:** we will be using [eslint](https://eslint.org) as [tslint](https://github.com/palantir/tslint) is deprecated and encouraging users to switch to eslint.

In order to get our linter set up properly, we will need to install the relevant packages.

```bash
npm install eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
// or with yarn
yarn add eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

Then we can set up our `eslintrc.js` file. We need to specify that we are using the `@typescript-eslint` parser, as well as that we are using the proper plugins. We also need to be sure that we use the plugin that requires type-checking (we will rely on this later).

```javascript
module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['@typescript-eslint'],
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/eslint-recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking'
	],
	parserOptions: {
		tsconfigRootDir: __dirname,
		project: ['./tsconfig.json'],
		ecmaVersion: 11,
		sourceType: 'module'
	}
};
```

With the configuration out of the way, we can work on solving our issue. Our first solution involes assigning our Task to a variable, and utilize the `no-unused-vars` rule to give us a warning when we forget to call our Task

```typescript
 function handleSubmit(user) {
  const task =  pipe(
     updateUser(user),
     mapTask(user => {
       setLoading(false);
     }
  );
  task(); // Now we get a linter warning if
          // we forget to use our task variable
}
```

This works, and we can even further enforce it by making the rule throw and error and break the build, but in practice this will also break builds during development any time we forget to use a variable, which personally I have done more than 1000 times in my career. We need a different solution.

## Enter `async / await`

By declaring our handler function as an `async` function, and `await`ing our task, we can leverage the `@typescript-eslint/await-thenable` rule, which will throw an error anytime we call `await` on a non-Promise. Remember our Task is a function that returns a Promise, so forgetting to call our Task when we are `await`ing it will result in a linter error.

```typescript
async function handleSubmit(user) {
  await pipe(
    updateUser(user),
    mapTask(user => {
      setLoading(false);
    }
  )(); // Forgetting these last parentheses will result in a linter error
}
```

This is preferable in my opinion because the `await-thenable` rule is something that I have rarely used. In fact, I didn't even know it existed until going looking for a solution to this problem. Ideally we would want an actual typescript compiler error, but absent that I feel this is probably the best way of avoiding issues when forgetting to call Tasks.
