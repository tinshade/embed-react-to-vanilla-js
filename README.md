# Embed React JS into Vanilla JS / HTML Websites

## Objective

The goal is to demonstrate being able to server a Vite + ReactJS based micro-frontend component in a vanilla HTML / JS page.

[Link to official documentation](https://react.dev/learn/add-react-to-an-existing-project)

## Approach

1.  Create a vite application with ReactJS as the base template and configure it to have the following config in vite.config.js file:

```
export default defineConfig({
   plugins: [react()],

   ...

   define: {
        // Other env variables can be defined in this way too!
        // This, however, is compulsory.
       "process.env.NODE_ENV": JSON.stringify("production"),
   },
});
```

2.  Develop the frontend UI component as you normally would in ReactJS, with hooks and all component-level logic in place
3.  Build the project with `npm run build` command. Notice the creation of a new **dict** folder with `dict/assets/index<hash>.css` and `dict/assets/index<hash>.js` files. These are the two files needed for the import to work.
4.  In the target HTML / JS file, import the required UI libraries such as Bootstrap CDN and inject the following code:

```
   <head>
       ...
       <link href="./dist/assets/index-<hash>.css" crossorigin rel="stylesheet" />
   </head>
   <body>
       ...
       <div id="root"></div>
       <script type="module" src="./dist/assets/index-<hash>.js" crossorigin></script>
       ...
   </body>
```

5. Finally, run the HTML / JS file using the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extention in VS Code or any other preferred way.
   **NOTE**: Opening the HTML file directly in the browser might cause CORS error
