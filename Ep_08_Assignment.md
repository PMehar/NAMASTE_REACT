# Lets get Classy

# Q1. How do you create Nested Routes react-router-dom configuration?

   We can create Nested Routes react-router-dom configuration as follows:

    1.  import createBrowserRoter from react-router-dom as named import (it help us create routing)
    2.  create router by creteBrowserRouter , it takes some configurations like list of paths , each path is an object which takes "url" for the path And takes elememt which shows what Component i have to load
    3.  errorElement is used in case of random url (page not found)

    const router = createBrowserRouter([
      {
        path: "/",
        element: <Parent />
        errorElement: <Error />,
      }
      {
        path: "/about",
        element: <About />,
      }
    ])

    4. we do nested routing using children as follows

    const nestedRouter = createBrowserRouter([
        {
            path: "/",
            element: <Parent />,
            children: [
                {
                    path: "/contact",
                    element: <Contact />,
                },
                {
                    path: "/about",
                    element: <About />,
                }
            ],
            errorElement: <Error />,
        }
    ])

    5. we can make multiple parent and multiple child as per need

# Q2. Read about createHashRouter createMemoryRouter from React Router docs.

    - createHashRouter is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL".
    [It is commonly used when you need to support older browsers or environments that don't support the HTML5 History API. ] 
    Other than that, it is functionally the same as createBrowserRouter

    - createMemoryRouter Instead of using the browsers history a memory router manages it's own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment.
    [The MemoryRouter is useful for scenarios where you want to render components in memory, rather than manipulating the browser's URL. It's typically used for testing and server-side rendering]

# Q3. what is the order of life cycle method calls in Class Based Components?

     Following is the order of lifecycle methods calls in Class Based Components:

    1. constructor() [first constructor is called]

    2. render () [then render is called]

    3. componentDidMount() [if there are multiple chilrens then it baches the render() of all the child and after render of all child is complete componentDidMount is called]

    4. componentDidUpdate() [after componentDidMount (loading/Mounting) is happen then componentDidUpdate() is called , if it has new data like API calls/ any state changes(this.setState , then it render first then it call componentDidUpdate())]

    5. componentWillUnmount()[After componentDidMount (updating) happen unmounting will happern but only when we go to other page/component , it is also used for clean up purpose ]

# https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

# Q4. Why do we use componentDidMount?

    - componentDidMount is a lifecycle method in React class based components that is called automatically after the component is rendered to the DOM for the first time. 
    -  It's used to perform tasks that require access to the DOM or actions that should only happen after the component has been successfully mounted(rendered).
    - This method is called during the Commit phase of Mounting in React Life-cycle Method
    - Common use cases include fetching data from APIs, initializing third-party libraries, attaching event listeners etc
    - if we want to render something(Shimmer/any component/page)onto our ui as quickly as possible then make API call and get the data & update put onto ui then we use  componentDidMount().

# Q5. Why do we use componentWillUnmount show with example
 - componentWillUnmount() is useful for the cleanup in the app when we switch routes or change the component.
 - Since we are working with a SPA(Single Page Application) the component process always runs in the background even if we switch to another route. So it is required to stop those processes before leaving the page. 
 - If we revisit the same page, a new process starts even faster (2x) that affects the performance loss of aur app. For example,

    componentDidMount(){

        this.timer = setInterval(()=>{
            console.log("NAMASTE REACT OP");
        },1000);
    
        console.log("Component Did Mount");

    }

    - During componentDidMount() a timer is set with an interval of 1sec to print messge in console after every second.
    - When the component is unmounted (users moves to a different page), the timer will be running in the background, which we might not even realize and when we revisit it starts a new process with 2x speed ,  when again do this (Unmounting and revisit ) it again  starts a new process with 3x speed causing huge performance issue. To avoid such situations the cleanup can be done in componentWillUnmount

        componentWillUnmount(){
            clearInterval(this.timer)
            console.log("Component Will Unmount");
        }

    - clearInterval(this.timer) used to clear the interval before unmounting (swiching to another page) of the component.

# Q6. (Research) why do we use super (props) in constructor
     
    - In React class components, the super(props) call within the constructor is used to ensure that the parent class's constructor is called before initializing the subclass component. This is essential because, in JavaScript, a subclass must call the super() method before accessing this in the constructor. The super(props) call is necessary to correctly set up the component and its inheritance chain.

    - When you create a class component in React, it implicitly extends the React.Component class, and the constructor of your component becomes a subclass of React.Component. The React.Component constructor takes an optional props argument, which is used to initialize the component's properties.

    - By calling super(props), you are calling the constructor of the parent React.Component class and passing the props object to it. This allows React to set up the props for your component correctly, making them accessible as this.props within your component's methods.

    example:

    constructor(props) {
        super(props);

        this.state = {
            name: "Dummy",
        },
        console.log("Constructor");
    }

    render() {
        console.log("Render");
        return (
            <div className="user-card">
                <h2>Name : {this.props.name}</h2>
            </div>
        );
    }

    calling super(props) in the constructor ensures that the props are properly set up, and you can access them within the component's render method using this.props.name 

# Q7. (Research) why Can't we have the callback function of use effect async?

    - React's useEffect hook cannot have an async callback function directly. The reason for this is that React expects the useEffect callback function to return either a cleanup function or nothing (undefined).
    - An async function always returns a Promise, which means that if you use an async function as the callback for useEffect, you would be returning a Promise, not the expected cleanup function or undefined. This behavior would lead to unexpected results and potential issues with React's rendering and cleanup mechanism.
    - However, you can work around this limitation by defining a separate async function inside the useEffect callback and calling it immediately. This way, you can still use async/await syntax within the effect:

    useEffect(()=>{
        const fetchdata = async()=>{
            // Perform asynchronous operations(API fetch)
            const data = await fetch('https://api.example.com/data');
            const result = await data.json();
        };
        fetchdata() // Call the async function immediately
    }, []);

    By defining and calling the async function inside useEffect, you ensure that you are not returning the Promise itself from the effect and that the effect runs correctly without causing issues.
