#Namaste React

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
