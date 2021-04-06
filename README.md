# Discussion Questions: Refactoring Components

Get together in groups and clone down this repository. In the `src/App.js` file,
we have one large component that makes the markup for our entire application.
It's your job to refactor this component to several smaller components.

To get started, run the application in the browser:

```sh
npm install
npm start
```

Start by discussing the demo app and decide what components you need. For
example, here's how you might break up a site like Yelp into components:

![yelp components](https://raw.githubusercontent.com/learn-co-curriculum/react-hooks-dq-components/master/yelp-components.png)

There's no one right answer when it comes to deciding what components you need, but
there are some things you can keep in mind to guide your decisions:

- Is the same UI repeated multiple times on the page? If so, it makes sense to
  make a component for that UI.
- Is one component responsible for too much markup? Think about the idea of _separation
  of concerns_ - try to break up the responsibility to smaller components.

Once you've decided on your component hierarchy, it's time to start coding!

For each component you decided to make, create a new file and write your component code.
Start by hard coding the JSX in the component:

```js
// ResultItem.js
function ResultItem() {
  return (
    <div>
      <h2>Bubby's</h2>
      <p>Price: $$$</p>
      <p>Location: Tribeca</p>
    </div>
  );
}

export default ResultItem;

// App.js
import ResultItem from "./ResultItem";

function App() {
  return (
    <div>
      <ResultItem />
      <ResultItem />
    </div>
  );
}
```

Then, make it dynamic by passing in props:

```js
// ResultItem.js
function ResultItem(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>Price: {props.price}</p>
      <p>Location: {props.location}</p>
    </div>
  );
}

export default ResultItem;

// App.js
import ResultItem from "./ResultItem";

function App() {
  return (
    <div>
      <ResultItem name="Bubby's" price="$$$" location="Tribeca" />
      <ResultItem name="Nathan's Famous" price="$" location="Coney Island" />
    </div>
  );
}
```

## Bonus

If you finish early, have a look at the `src/data.js` file. You'll notice there are two arrays being exported from this file:

```js
export { messages, contacts };
```

See if you can use these array to dynamically generate the contact list and messages for your app instead of hard-coding them!

Check out the React docs on
[Lists and Keys](https://reactjs.org/docs/lists-and-keys.html) for a hint!.
