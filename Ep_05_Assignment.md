Episode 5:lets get hooked!

Q1. what is the difference between Named Export, default export and *as export?
   (i) Default export :
       Default exports are useful when you have a primary component or function to export from a file. You can have only one default export per file, and when importing, you can use any name you prefer for it.
       this is the default way to export the file, 

       [A component/module is  a self contained unit that can expose assets to their module using EXPORT and acquire assets from other modules using IMPORT]

       => export default Component;
       => import Component from "path";
    
    (ii)Named export :
       you can export individual components or functions as named exports from a file and then import and use them in other files. This is commonly used when you have multiple components or functions to export from a single file.
       it exports multiple Components in same file
       if we created a new file which have 3 Components and we want to export all of these components then we can use Named export 

       => export const Component =>{...};
       => import {Component} from "path";

       [also we can wrap multiple components/objects in a single Component/Object and can export default ]

    (iii)*as
       it export multiple components or functions as properties of a single object. This can be convenient when you have a lot of exports from a single file and want to import them collectively.

       =>import *as Obj from "path";
       
       it will import everything and then we can use obj.Title also  

Q2. what is the importance of config.js file?
       
        config.js file is a dedicated file in a software project that stores unchanging values, configuration settings, and other constants used throughout the application. It improves code organization, readability, and maintainability by centralizing these values in one place, making it easier to manage and update them when needed. Instead of using literal values directly in the code, constants provide descriptive names and promoting code consistency and reusability.
        we can put there img_url (constant data), Suppose i want to use it in  some other folder then i just have to import this from one place insted of copy-pasting.

Q3. what are react hooks?
       React Hooks are functions provided by the React library that allow developers to use state and other React features in functional components. Before the introduction of hooks, state management and other features were primarily available in class components using the setState method and lifecycle methods. Hooks enable developers to use state and lifecycle features without writing class components, making it easier to share logic between components and reuse code.
       React Hooks improved code readability, and enhance the developer experience in React applications.

Q4. why do we need a useState Hook?

    React cant keep track of each local variable. Everytime you want your variable to be in sync with the UI you need to use [useState()]  state variable.
    React keeps track of all state variables and it will automatically re-render the component.

    Whenever (state) variable updated , whole Component re-renders (destroying the body component and creating new body once again, it is happening very fast and this is updating as well) , Reconcilliation(diff Algorithm ) happening behind the scenes it just re-renders the updated part.

    it keeps data layer in sync with UI layer ,maintains the state

    const [state, setState] = useState();