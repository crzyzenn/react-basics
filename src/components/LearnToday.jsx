import React from "react";

export default function LearnToday() {
  return (
    // Use React Framgment or <></> to enclose multiple parents.
    <>
      <h1>10th May 2021</h1>
      <ul>
        <li>Props and children in components</li>
        <li>Default props</li>
        <li>Conditional Rendering</li>
        <li>Lists & Keys</li>
        <li>Event Handling</li>
      </ul>
    </>

    // <React.Fragment>
    //   <h1>10th May 2021</h1>
    //   <ul>
    //     <li>Props and children in components</li>
    //     <li>Default props</li>
    //     <li>Conditional Rendering</li>
    //     <li>Lists & Keys</li>
    //     <li>Event Handling</li>
    //   </ul>
    // </React.Fragment>
  );
}
