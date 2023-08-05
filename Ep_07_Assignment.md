# Finding the Path 

# Q1 what are various ways to add images into our App ? Explain with code examples.

    1.Using the img tag form local:
     <img src="/image.jpg" alt="image" />
    
    2.Using CDN links :
      <img src="https://cdn.example.com/image.jpg" alt="image" />
    
    3.importing from another components(constant files):
    => export const LOGO_URL = "https//example.com/logo.png" ;

    =>import {LOGO_URL} from "path";

    <img src={LOGO_URL}/>
     

# Q2 what would happen if we do console.log(useState())? 
     
    it will log an array containing two elements [undefined, ƒ]:

    -The first element will be the current state value which is undefined.
    -The second element will be a function that allows you to update the state. ƒ bound dispatchAction() is the function used to update the state 

# Q3 How will useEffect() behave if we dont add a dependency array ?
     
    if we dont add a dependency array like :
      useEffect(()=>{...});
    then useEffect() will be called after every render of the component, it is the default behaviour of useEffect function

# Q4 what is SPA ?

    Single Page Application (SPA) is a web application that operates on a single web page. It dynamically updates the content as users interact with the app, without need to reload entire pages from the server . It just changes the components without making network call. 

    They use client-side routing to handle navigation without contacting the server.

# Q5 what is difference between Client side Routing and Server side Routing
   
   - Client-side routing handles navigation on the client-side using JavaScript, avoiding page reloads for smoother user experience.
   - Server-side routing handles navigation on the server-side, resulting in page reloads for each route change.
   - Client-side routing is faster and more responsive
   - Server-side routing is better for SEO and initial load time.