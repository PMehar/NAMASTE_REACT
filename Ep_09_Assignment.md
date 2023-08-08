# Q1. When and why do we need lazy()?


   - if  you make 1 js file of 1000's of components , the size of that file will increase alot , js file size increase by how many component it holds , if you dont optimize it , it will take a lot of time to load , your app will become very slow
   - To optimize it and for making large scale production ready app you need to break it down into smaller logical bundles/chunks (logical separation )[bundle should have enough code for a Mojor feature in our website , small applications within the big application ]
   - we dont want to put load on a single bundle , your request for that js file does not become so heavy  that it takes a lot of time to get into the browser that is why we do lazy loading / bundle chuhnking /dynamic loading /on demand loading /dynamic import 

   eg.: to make 2 different bundles (main app , Grocery) i will not import Grocery directly like use do till now  instead i will import it using lazy(), it will not load code for grocery , it will , main app will load initially , when we click on grocery and go to this page then only code for grocery will load there in a separate bundle

   - Lazy loading is a design pattern where resources, such as images, videos, or data, are loaded only when they are needed, rather than loading them all at once when the page initially loads.

   => const Grocery = lazy(()=>{
         import("/path");
      })

# Q2. what is suspence?

    - Suspense in lazy loading involves displaying a fallback or placeholder content while the actual content is being loaded in the background. This way, users don't experience empty or partially loaded sections of a web page or application. Instead, they see a temporary representation of the content, which reduces the perception of slow loading times and provides a better overall user experience.

    - When the required content is fully loaded and ready to be displayed, the placeholder content is replaced . By using suspense in lazy loading, developers can avoid interruptions, improve perceived performance, and ensure a smoother user interaction with the application.

    - This concept is often used in modern web development, especially in Single Page Applications (SPAs) or applications built with frameworks like React, Angular, or Vue.js. These frameworks provide built-in support for lazy loading and suspense mechanisms to make it easier for developers to implement efficient and user-friendly lazy loading behaviors.

    - Suspence wraps the coomponent inside it which is not available at the moment 

    <Suspence><Grocery/></Suspence>

    - it has a placeholder "fallback" (we can render anything like shimmer/ dyno game until the page loads/ code is not available)

    <Suspence fallback = {<h1>Loading...</h1>}><Grocery/></Suspence>

# Q3. Why we got this error: A component was suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix this, updates that suspend should be wrapped with start transition? How does suspense fix this error?

    - it does not load the code for the Grocery component , when i click  on this component then only the code for it will load , this code is taking time to come onto the browser/web page.

    - React tried to load Grocery compponent but the code was not there this is why react suspended rendering , middle state cause the error . To handle this state React gives us Suspence component which comes from react

    - Suspence wraps the coomponent inside it which is not available at the moment 

    - it has a placeholder "fallback" (we can render anything like shimmer/ dyno game until the page loads/ code is not available)

    this way suspence fix the error

# Q4. Advantages and Disadvantages of using this code splitting pattern?

    Advantages:

    1.Faster Initial Load Times: 
     Code splitting allows you to load only the necessary code for the initial page, reducing the initial bundle size. This results in faster load times for the user, especially for large applications where not all code is required right away.

    2.Better Performance:
     Smaller initial bundles mean reduced parsing and compilation times, leading to better application performance. Additionally, loading components or modules on-demand (when needed) can improve perceived performance by avoiding unnecessary data and resource fetching.

    3.Improved User Experience: 
     Code splitting accelerates the initial UI display, prioritizing content (shimmer or anything ) until the page loads, and loading remaining components/resources (the page you want to) gradually, leading to an enhanced user experience.

    4.Optimized Caching: 
     When different parts of your application are split into separate chunks, it's easier to implement caching strategies. 

    5.Simplified Maintenance: 
     Code splitting can help improve the organization of your codebase by encouraging separation of concerns and modularity. This, in turn, can lead to easier maintenance and code readability.

    Disadvantages:

    1.Complexity:
     Implementing code splitting can add complexity to your application architecture and build process. You'll need to carefully manage how and when to split code to avoid potential issues like circular dependencies or unexpected behavior.

    2.Requires Tooling Support: 
     Code splitting often requires the use of specific tools and libraries, such as Webpack or Babel, which might require configuration and setup. Developers need to be familiar with these tools to implement code splitting effectively.

    3.Potential Overhead: 
     While code splitting can improve performance, there might be some overhead associated with dynamic imports and chunk loading. It's essential to carefully profile and optimize your application to strike the right balance.

    4.Dependency on Network: 
     Code splitting relies on the user's network to fetch additional chunks as needed. If the user has a slow or unreliable internet connection, the application might suffer from increased load times and potential flickering as components are loaded on demand.

    5.Increased Initial Request Count: 
     Code splitting can lead to an increased number of initial HTTP requests since chunks are loaded asynchronously. While modern browsers can handle this well, it's crucial to manage the number of chunks and their sizes to avoid performance degradation.

# Q5. When and why do we need suspense?

    - Suspense is used for optimizing performance, handling asynchronous data fetching, and providing a smoother user experience through lazy loading and graceful error handling.

    When do we need Suspense?

    Lazy Loading:
     When you want to load certain components or data only when they are needed, Suspense allows you to handle the loading state and display fallback UI while waiting for the data to be fetched.

    Asynchronous Data Fetching:
     When fetching data from an API or other external source, Suspense is useful to handle loading states and ensure the UI doesn't break or display incomplete data while waiting for the data to arrive.

    Why do we need Suspense?

    Enhanced User Experience: 
    Suspense enables smoother transitions and loading experiences for users by avoiding jarring UI updates and providing feedback on loading progress.

    Performance Optimization:
     By deferring the rendering of certain parts of the UI until data or components are available, Suspense improves perceived performance and reduces unnecessary loading, resulting in a more responsive application.

    Error Handling:
     Suspense allows you to handle errors gracefully during data fetching, showing appropriate error UIs and informing users when there's a problem with data retrieval.

    Seamless Loading States:
     Managing loading states with Suspense ensures a more polished user interface, giving users a more seamless experience while content is being fetched.
