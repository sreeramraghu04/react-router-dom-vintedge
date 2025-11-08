1. what is a route parameter/url parameter ?
   a portion our route part that is a place holder for what will eventually be the actual segment in the url of the page

2. add whatever you need to add for the component below to display the route parameter in H1 tag ?

3. what is the primary reason to use a nested route ?
   whenever we have some shared ui between routes in our app

4. what is a layout route ?
   it is a parent route for some nested route that contains just the portions of the ui that will be shared
   it will use an outlet component

5. what does an outlet component do ?
   we use it any time we have a parent route that is wrapping children route it renders the matching child route element

6. what is an index route ?
   it is the default route we want to render when the path of the parent route matches

7. relative path ?

8. relative link ?

- pending:

  - usesearchparams / queryparams
    access the search params in the home component using the hook from react rouder dom set a variable holds search params(creating a state using usesearchparams hook)
    save the value of the brand of the product from the search params object to a variable called brand filter
    log the value of the brand filter to the console

  - hook = use search params
  - uselocation
  - loader function
  - usenavigate
