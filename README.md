#Namaste React

- Let see How React work under the hood? (Free code camp)
  -At first, we need to download a bundler such as parcel, vite, or parcel etc....
-

#parcel

- Dev Build
- Local Server
- HMR (Hot Module Replacement)
- File Watching Algortihm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification of file
- Bundle all the files
- Consitent Hashing
- Code splitting
- Differential Bundling - to support older browsers
- Error Handling
- HTTPS
- Tree Shaking - Remove unused code s

#Food Ordering app layout
/\*

- Header
  - Logo
  - Nav Items

\*Body

- Search
- CardContainer
  - Cards
    Img
    Name of Res, Star Rating, Cusine, Delivery time

\*Footer

- CopyRight
- Links
- Address
- Contact

\*/

Two types of export/import

- Default (export default <component name>)
- Named Export Import (export const Component)

#React hook
(Normal JS uitility function)

- useState() - Superpowerful state variable in react
- useEffect()

- whenever state variables update, react triggers a reconcialiation cycle (re-renders the component)

- during the re rendering cycle react is finding the difference between older virtual dom and newer virtual dom.

- virtual dom is object representation of the real dom.

- Episode 7

  - Routing

  - While using the react never use the anchor tag. ?? because the whole page got refreshed while using anchor tag. (Import LINK from react-router-dom instead of "href" we have to use "to".)

# Routing in Web Apps

- Client side Routing
  - All the components are already loaded into our apps in these kind of routing.
- Server side Routing
  - It means to make the network call and the page is coming from the server

#class based components are the class which uses render method and return some pieces of jsx.

-- what is class in javaScript ? What is class based component on react?

-- Life Cycle in React (Links redirect you to the image)
https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

-- How class component work? (suppose if you have one parent and two child component having all the component did mount)

- Parent constructor is called
- Parent Render is called

  - First Child Construtor is Called
  - First Render is Called

  - Second Child Construtor is Called
  - Second Render is Called

  - Over here DOM gets updated - In Single Batch
    -First Component did Mount called
  - Second Component Did Mount called

-Parent Component did mount called

-HOW WHOLE LIFECYLCE METHOD WORKS?

- MOUNTING -
  CONSTRUCTOR IS CALLED
  RENDERING IS DONE WITH THE DUMMY DATA OR EMPTY DATA
  <JSX IS RETURNED>
  COMPONENT DID MOUNT IS CALLED
  <API IS CALLED>
  THIS.SETSTATE -> STATE VARIABLE IS UPDATED

  -- UPDATE
  RENDER (API DATA)
  <JSX DATA IS FILLED WITH API DATA>
  COMPONENT DID UPDATE IS CALLED

  -- TAILWIND CSS

  - npm install -D tailwindcss

  -- Suspense and lazy loading in react????
