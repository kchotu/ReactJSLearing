/**
 * <div id="parent">
 *   <div id="child">
 *    <h1>i am h1 tag</h1>
 *    </h2> i am h1 tag</h2>
 * </div>
 * 
 * 
 */


// const heading=React.createElement("h1",
//     {id:"heading",xyz: "abc"}
//     , "Hello world from React!");
//     console.log(heading); // object
//         const root= ReactDOM.createRoot(document.getElementById("root"));
//         root.render(heading);

const parent=React.createElement(
    "div",
        {id:"parent"},
        React.createElement(
            "div",
            {id: "child"},[
            React.createElement("h1",{},"i am h1 tag"),
            React.createElement("h1",{},"i am h2 tag"),
            ])
    );
        console.log(parent); // object
           const root= ReactDOM.createRoot(document.getElementById("root"));
           root.render(parent);