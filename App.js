//for passing multiple/nested div

// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//      {id:"child"},
//      React.createElement("h1",{},"I am an h1 tag")
//      )
//     );

// for passing two tags

// const parent=React.createElement(
//     "div",
//     {id:"parent"},
//     React.createElement(
//         "div",
//      {id:"child"},
//      [React.createElement("h1",{},"I am an h1 tag"),React.createElement("h2",{},"I am an h2 tag")]
//      )
//     );

    // for passing multiple child

    const parent=React.createElement(
        "div",
        {id:"parent"},
       [ React.createElement(
            "div",
         {id:"child"},
         [React.createElement("h1",{},"I am an h1 tag"),
         React.createElement("h2",{},"I am an h2 tag")]
         ),React.createElement(
            "div",
         {id:"child2"},
         [React.createElement("h1",{},"I am an h1 tag"),
         React.createElement("h2",{},"I am an h2 tag")]
         )]
        );


const heading=React.createElement("h1",{id:"heading"},"Hello World from React!");
console.log(heading)//give output as object
const root= ReactDOM.createRoot(document.getElementById("root"))

root.render(parent)