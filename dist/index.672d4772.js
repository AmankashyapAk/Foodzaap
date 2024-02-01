// let root = document.getElementById("root");
// let heading = document.createElement("h1");
// heading.innerHTML = "Hello World Js";
// root.appendChild(heading);
// const heading= React.createE
const heading = React.createElement("h1", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am H1"),
        React.createElement("h2", {}, "I am H2")
    ]),
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "I am H1"),
        React.createElement("h2", {}, "I am H2")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading); // dd

//# sourceMappingURL=index.672d4772.js.map
