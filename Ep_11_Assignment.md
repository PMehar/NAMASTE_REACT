# Q1. what is prop drilling?

    - Prop drilling is a term used in React to describe the process of passing props through multiple levels of nested components in order to get the data from a top-level parent component to a nested/ deeply nested child component that needs it.
    - Components in the middle of the component tree don't actually use the prop being passed but are required to pass it down to their child components.

   🔴 challenges and issues:

    Complexity: 
    As your component tree grows, the number of components involved in passing the prop increases, making the code more complex and harder to maintain.

    Readability: 
    The code can become harder to read and understand, especially for someone new to the codebase, because it's not immediately clear why certain props are being passed.

    Maintenance: 
    If the data structure or the number of layers in your component tree changes, you may need to update many components to accommodate these changes.

    Performance: 
    In some cases, unnecessary prop passing can impact performance, as each component that receives a prop needs to re-render when that prop changes.

# Q2. What is lifting the state up?

    "Lifting the state up" is a key concept in React, referring to the practice of managing and controlling the shared state of multiple components by moving that state to a common ancestor component higher up in the component tree

    In React applications, you often have a component hierarchy where child components need to share and update data. Instead of managing the state separately within each child component, you can "lift" the state to a common parent component. This parent component becomes the source  for the shared state, and it passes down the state as props to its child components.

    before lifting the state up each children was maintaining there own state and they does not share the state,  after this we can maintain the state in its parent  cause now parent has control over children

    in case of collapsible according parent will decide whether to show what

    Advantage :

    Consistent Data: 
     Centralized management ensures all components access up-to-date data.
    Simpler Logic:
     Child components stay focused and avoid complex state handling.
    Easy Debugging: 
     Centralized state helps tracing and debugging shared state issues.
    No Prop Drilling: 
     State lift minimizes passing data through multiple components.
    Better Performance: 
     Centralized state improves optimization possibilities.

# Q3. What are Context Provider and Context Consumer ?

   - Context API is a way to manage state that needs to be accessed by multiple components without having to pass the state down through all levels of the component tree. - - The Context API consists of two main components: the Context Provider and the Context Consumer.

   Context Provider:
    The Context Provider is a component that provides the context to its child components. It acts as a wrapper around a portion of your component tree and allows you to pass data (state) down to components that are nested deeply within the tree. The data provided by the Context Provider can be accessed by any of its descendant components.

   Context Consumer:
    The Context Consumer is a component that consumes the data provided by the Context Provider. It allows components deep in the tree to access the data without the need to explicitly pass it as props through intermediate components.

   the Context Provider and Context Consumer work together to establish a data flow that simplifies the process of sharing state across multiple components in a React application. The Provider sets up the context and provides data, while the Consumer accesses and uses that data.

# Q4. If you don't pass a value to the provider does it take the default value ?

    Yes, if you don't pass a value to a Context Provider, it will take the default value specified in the createContext function. 