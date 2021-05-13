import "./App.css";
import Api from "./components/Api";
import FacebookComment from "./components/FacebookComment";
import LearnToday from "./components/LearnToday";

// This is a functional component
function App() {
  // Returns JSX
  // Describe what the UI should look like..

  const comments = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      name: "Jason",
      company: "abcd",
      comment: "Hello World",
      commentTime: "2 seconds ago",
    },
    {
      id: 2,
      image:
        "https://st.depositphotos.com/1269204/1219/i/600/depositphotos_12196477-stock-photo-smiling-men-isolated-on-the.jpg",
      name: "Jason Clark",
      company: "decasdf",
      comment: "I have something insightful to say, as usual.",
      commentTime: "2 seconds ago",
    },
  ];

  return (
    <>
      <LearnToday />
      <hr />
      {/* <Api /> */}
      {comments.map(({ id, name, image, company, comment, commentTime }) => (
        <FacebookComment
          key={id}
          image={image}
          name={name}
          company={company}
          comment={comment}
          commentTime={commentTime}
        />
      ))}
    </>
  );
}

export default App;
