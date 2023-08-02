1. Is JSX mandatory for React?

  no , JSX is different  react is different 
  anything that is done with JSX can also be done with just plain JavaScript or react. So JSX is not mandatory but is used for writing better and clean code instead of writing code using React.CreateElement.

2. Is ES6 mandatory for React?

  ES6 is not mandatory for React but is highly recommendable. The latest projects created on React rely a lot on ES6. React uses ES6, and you should be familiar with some of the new features like: Classes, Arrow Functions, Variables(let, const). ES6 stands for ECMAScript 6. ECMAScript was created to standardize JavaScript but it is not mandatory

3. {TitleComponent} vs {<TitleComponent/>} vs  {<TitleComponent></TitleComponent>} in JSX.

 {TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable or React element. The {} can embed a javascript expression or a variable or React element inside it.

 <TitleComponent/> : This value represents a functional Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value.

 <TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent but < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.

4. How can I write comments in JSX?
   {/*Like this*/}

5. what is <React.Fragment></React.Fragment> and <></> ?

 <React.Fragment></React.Fragment> is a feature in React that allows you to return multiple elements from a React component by allowing you to group a list of children without adding extra nodes to the DOM.
 it act as one parent inside jsx , as JSX can have only 1 parent so initially we wrapped it inside a div but our root element has 1 div already and this is the extra div so we used React.Fragment 
 <></> is the shorthand tag for React.Fragment. The only difference between them is that the shorthand version does not support the key attribute.

6. what is virtual DOM ?

  it is a representation of actual DOM , it is used to improve the efficiency of updating the user interface (UI) of web applications.
  we need virtual dom for React reconcilliation process , it is an Algorithm that react uses to find difference from one tree to other, it determines what needs to be updated/changed (that component and its children) in ui and what not.helps in improving performance

7. what is Reconcilliation in React ?

  Reconciliation is the process through which React update the user interface efficiently.
  When there are changes to the application's state or data, the framework compares the previous state with the updated state using the Virtual DOM.
  diff algorithm is used to compare previous Virtual DOM with the updated one, it identifies the differences, and then efficiently applying the minimal set of changes to the actual DOM to reflect the updated state of the user interface . This approach optimizes performance and responsiveness in web applications.
  
 
8. what is React Fiber?

  React Fiber is an internal reimplementation of the React reconciliation algorithm. It was introduced in React version 16 to enhance the performance and better support features like asynchronous rendering, error boundaries, and time-slicing (concurrent rendering).

  The name "Fiber" refers to a unit of work or a lightweight thread. With React Fiber, the rendering process can be paused, interrupted, and resumed, allowing for better control over the priority of updates and improving the overall responsiveness of the application.

9. Why we need keys in React ? 

  Keys in React are used to efficiently update dynamic lists by providing a stable identity to each item. They prevent unnecessary re-renders and help React distinguish between items, ensuring correct UI updates and preventing state loss. Use unique and stable keys for each item in the list for optimal performance.

  suppose there are 4 divs  and +1 div is introduced, React will get confused, it does not know what order it will have , it re-renders everything. we want to make react smart by giving it a key then it exactly re-renders what needs to be updated

  always give key whenever you are looking for something or doing .map() cause we need to uniquely identify each and every loop item.

10. can we use index as keys in React?

  Yes, you can use the index of an item in an array as a key in React, but it's generally not recommended unless you have specific reasons to do so.

  Using the index as a key can cause some issues, especially when the list is re-ordered or items are added or removed. If the list changes, the indexes may be rearranged, leading to unexpected behavior and potentially negatively impacting performance and rendering efficiency.

  When you don't have a unique identifier for the items in your list, and the list is static (not changing), using the index as a key might be acceptable. However, it's best to avoid using index as a key when the list is dynamic or can change over time.

11. what is props in React? ways  to write props

  In React, "props" is short for "properties." Props are a way to pass data from a parent component to a child component. They are a fundamental mechanism for sharing information and communication between components in a React application.

  Props are read-only and cannot be modified within the child component. The parent component passes data to the child component through props, and the child component can use that data to render its UI or perform other tasks.

  ways to write props 
     (i) Using JSX attribute
     (ii) Using Object destructuring (destructuring on the fly)
     (iii) spread operator

12. what is a config Driven UI ?

    Config-driven UI is an approach where the user interface is defined and controlled through configuration files or data, allowing for greater flexibility and customization without modifying the underlying code. It separates UI configuration from the application logic, enabling reusability and involving non-technical team members in UI definition.

    It is  driven by Data or configs[Controlling your ui using configs]

 