# 06 Exploring the world

Q1. what is Microservice?
   
   Microservices is an architectural style for designing complex software applications as a set of small, independent, and loosely coupled services.It breaks down the application into multiple smaller services that can be developed, deployed, and scaled independently.   

   Each microservice operates independently with its own codebase, database, and technology stack. This allows different teams to use different technologies best suited for their service.

   Advantages :
    - easier to test
    - easy to maintain
    - single responcibility
    - separation of concern
    - Easier to add new features and update individual services without affecting the entire system.

Q2. what is a Monolith Architechture ?
   
   A monolith architecture refers to a traditional and unified approach to building applications as a single unit. In a monolithic architecture, the entire application's codebase and functionality are tightly integrated and deployed as a single executable or codebase.

   It is a single big application, so everything like API's , SMS , Notifications, UI , JSP pages , data access etc used to be in same project. Suppose if we have to change one btn , we used to deploy this whole project/app.

   The application uses a single technology stack or framework throughout, ensuring uniformity across the entire codebase.
    
Q3. What is the difference between Monolith and Microservice?
   (i) In a monolithic architecture, the entire    application is built as a single unit. All components including the user interface, logic, and data access etc are tightly integrated within a single codebase 
      
   Microservices architecture breaks down the application into small, independent services, each focusing on a specific business capability  and can be developed, deployed, and scaled independently.

   (ii)Monoliths are deployed as a whole, any changes or updates to one part of the application require redeploying the entire system.

   Each microservice can be deployed independently, allowing for faster and more frequent updates without affecting the entire system.

   (iii)Limited scalability and technology diversity
   Scalable and allows diverse technology stacks

   (iv)Components communicate via in-memory calls
   Components communicate through APIs

   (v)Easier initially but complex as it grows
   More complex initially, but better maintainability and scalability.

Q4. Why do we need a useEffect() Hook?

    - to make API calls after initial render and update the UI 
    - in many cases, you need to perform certain tasks that are not directly related to rendering, such as fetching data from an API or setting up event listeners. The useEffect() hook provides a way to handle these side effects. 
    - Side effects like data fetching often involve asynchronous operations. The useEffect() hook can handle async operations by specifying an async function as its callback.
    - The useEffect() hook allows you to declare dependencies that trigger the effect when they change. By passing an array of dependencies as the second argument, you can ensure the effect is only executed when the specified dependencies change. This helps to optimize performance and prevent unnecessary re-renders.
    - useEffect() is a callback function given by React library it will called not immediately but whenever my useEffect() wants to be called. React ensures that it will be called at a specific time.

    useEffect(()=>{
      getRestaurants();
    },[]);

    after every initial render it will call the function that we put inside it.

    useEffect() hook is essential in React functional components to manage side effects, handle component lifecycle events, and ensure proper cleanup. It is a powerful tool that enables you to work with asynchronous operations and improve the overall efficiency of your React applications.
   
Q5. what is Optional Chaining?

    Optional chaining is a feature in that allows you to safely access properties and methods of an object without worrying about whether they exist or not. It prevents errors and exceptions when dealing with nested objects or properties that might be undefined or null.

    In JavaScript, optional chaining was introduced in ECMAScript 2020 (ES11) and is denoted by the question mark (?.).

    =>const data = json?.info?.restaurants ;


Q6. what is Shimmer UI?

    A shimmer UI is a visual technique used in user interfaces to indicate that content is loading or in the process of being fetched. It provides a subtle animation that gives users the impression that data is being populated or elements are loading, even before the actual content is ready to be displayed.

    The shimmer effect typically involves displaying a placeholder or a light, animated pattern that resembles a shining or shimmering light. This placeholder occupies the space where content will eventually appear. As the actual data is loaded, the shimmer animation fades out, revealing the real content.

Q7. What is the difference between Js expression and JS statement?

    - An expression returns a value is executed. It can be a combination of variables, constants, operators, and function calls that are evaluated to a single value. 
    
        2 + 3             // Produces the value 5
        x * y             // Produces the result of multiplying x and y
        myFunction(10)    // Produces the return value of myFunction with argument 10

    - A statement is a complete instruction that performs an action. Unlike expressions, statements do not necessarily produce a value. They are executed for their side effects, like modifying variables, controlling program flow, or interacting with the environment

     let x = 5;                // Declaration and assignment statement
     if (x > 3) {              // Conditional  statement 
      console.log("Hello");   // Function call statement
     }
     for (let i = 0; i < 10; i++) {  // Loop statement
       // ...
     }
 
Q8. What is conditional rendering ? explain with a code example

    - Rendering components based on conditions.
    - It is the technique of displaying different content or components based on specific conditions or states in the application. It allows you to show or hide elements dynamically, creating more interactive and personalized user interfaces. You can control what the user sees based on factors like user input, data availability, or application state.
    
    => return listOfRestaurants?.length === 0 ? (
         <Shimmer />
       ) : (dispaly restaurants)

       if the list of restaurants is "0" , then display "shimmer" otherwise display "restaurant lists".

Q9. what is CORS ?

     - CORS (Cross-Origin Resource Sharing) is a security feature in web browsers that controls how web pages from one domain can request resources from another domain. It prevents unauthorized access and ensures secure cross-origin requests by enforcing specific HTTP headers on the server side.
     - The Same-Origin Policy is enforced by browsers by default, which means that web pages from one domain are not allowed to make requests to another domain unless the target domain explicitly allows it
      
Q10. what is async await?

     async and await are features in JavaScript used to work with asynchronous code in a more readable and synchronous-like manner.

     async: It is used to define an asynchronous function that returns a Promise. Inside an async function, you can use the await keyword to pause the execution and wait for a Promise to resolve before continuing with the next line of code.

     await: It is used inside an async function to wait for the Promise to resolve. When await is used with a Promise, it pauses the execution of the function until the Promise is resolved or rejected. This allows you to write asynchronous code that looks and behaves more like synchronous code, making it easier to understand and manage.

     // async function getRestaurant to fetch Swiggy API data

     const fetchData = async ()=>{
        const data = await fetch(
            "Swiggy_API_URL"
        );
        const json = await data.json(); // we get the Swiggy API data in json format
    }

Q11. What is the use of 'const Json = await data.json();' in getRestaurants?

    - const Json = await data.json(); is used to convert the response from a fetch request into a JavaScript object so that we can easily work with the data in our code.
    - data.json() returns a promise resolved to a JSON object.