import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./function.css";

const topics = [
  {
    name: "React Router",
    id: "react-router",
    description: "Declarative, component based routing for React",
    resources: [
      {
        name: "URL Parameters",
        id: "url-parameters",
        description:
          "URL parameters are parameters whose values are set dynamically in a page's URL. This allows a route to render the same component while passing that component the dynamic portion of the URL so it can change based off of it.",
        url: "https://ui.dev/react-router-url-parameters/",
      },
      {
        name: "Programmatically navigate",
        id: "programmatically-navigate",
        description:
          "When building an app with React Router, eventually you'll run into the question of navigating programmatically. The goal of this post is to break down the correct approaches to programmatically navigating with React Router.",
        url: "https://ui.dev/react-router-programmatically-navigate/",
      },
    ],
  },
  {
    name: "React.js",
    id: "reactjs",
    description: "A JavaScript library for building user interfaces",
    resources: [
      {
        name: "React Lifecycle Events",
        id: "react-lifecycle",
        description:
          "React Lifecycle events allow you to tie into specific phases of a components lifecycle",
        url: "https://ui.dev/an-introduction-to-life-cycle-events-in-react-js/",
      },
      {
        name: "React AHA Moments",
        id: "react-aha",
        description: "A collection of 'Aha' moments while learning React.",
        url: "https://ui.dev/react-aha-moments/",
      },
    ],
  },
  {
    name: "Functional Programming",
    id: "functional-programming",
    description:
      "In computer science, functional programming is a programming paradigm—a style of building the structure and elements of computer programs—that treats computation as the evaluation of mathematical functions and avoids changing-state and mutable data.",
    resources: [
      {
        name: "Imperative vs Declarative programming",
        id: "imperative-declarative",
        description:
          "A guide to understanding the difference between Imperative and Declarative programming.",
        url: "https://ui.dev/imperative-vs-declarative-programming/",
      },
      {
        name:
          "Building User Interfaces with Pure Functions and Function Composition",
        id: "fn-composition",
        description:
          "A guide to building UI with pure functions and function composition in React",
        url:
          "https://ui.dev/building-user-interfaces-with-pure-functions-and-function-composition-in-react-js/",
      },
    ],
  },
];

function Resource({ match }) {
  const topic = topics
    .find(({ id }) => id === match.params.topicId)
    .resources.find(({ id }) => id === match.params.subId);
  console.log("Resource path", match.path);
  console.log("Resource url", match.url);
  console.log("Resource url", match.url);
  return (
    <div
      style={{
        width: 1000,
        margin: "0 auto",
        backgroundColor: "blue",
        color: "white",
      }}
    >
      <h3
        style={{
          color: "white",
        }}
      >
        {topic.name}
      </h3>
      <p
        style={{
          color: "yellow",
        }}
      >
        {topic.description}
      </p>
      <a
        href={topic.url}
        style={{
          color: "yellow",
          textDecoration: "none",
        }}
      >
        More info.
      </a>
    </div>
  );
}

function Topic({ match }) {
  const topic = topics.find(({ id }) => id === match.params.topicId);
  console.log("Topic path", match.path);
  console.log("Topic url", match.url);

  return (
    <div
      style={{
        width: 1000,
        margin: "0 auto",
        backgroundColor: "grey",
        color: "white",
      }}
    >
      <h2>{topic.name}</h2>
      <p>{topic.description}</p>

      <ul
        type="none"
        style={{
          color: "yellow",
        }}
      >
        {topic.resources.map((sub) => (
          <li key={sub.id} style={{ color: "white" }}>
            <Link
              style={{ color: "yellow", textDecoration: "none" }}
              to={`${match.url}/${sub.id}`}
            >
              {sub.name}
            </Link>
          </li>
        ))}
      </ul>

      <Route path={`${match.path}/:subId`} component={Resource} />
    </div>
  );
}

function Topics({ match }) {
  console.log("Topics path", match.path);
  console.log("Topics url", match.url);

  return (
    <div
      style={{
        width: 1000,
        margin: "0 auto",
        backgroundColor: "green",
        color: "yellow",
      }}
    >
      <h1>Topics</h1>
      <ul type="none">
        {topics.map(({ name, id }) => (
          <li key={id}>
            <Link
              style={{ color: "yellow", textDecoration: "none" }}
              to={`${match.url}/${id}`}
            >
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
    </div>
  );
}

function Home() {
  return <h1>Home</h1>;
}

class Function extends React.Component {
  render() {
    return (
      <Router>
        <div
          style={{
            width: 1000,
            margin: "0 auto",
            backgroundColor: "coral",
            color: "white",
          }}
        >
          <h2>Functional Nested Routing</h2>
          <ul type="none">
            <li>
              <Link style={{ color: "blue", textDecoration: "none" }} to="/">
                <h3>Home</h3>
              </Link>
            </li>
            <li>
              <Link
                style={{ color: "blue", textDecoration: "none" }}
                to="/topics"
              >
                <h3>Topics</h3>
              </Link>
            </li>
          </ul>

          <Route exact path="/" component={Home} />
          <Route path="/topics" component={Topics} />
        </div>
      </Router>
    );
  }
}

export default Function;
