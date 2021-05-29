# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


e550e43021ea921e6994d8dc319ba792

18714cde-e059-46bf-9843-c7323c1e783f jooble

FoyaR8pXGf6lpA2mI1QQ4eg5eMZspnUL polygon


'tsc filename.ts -w' to run compiler
(argument: type) to assign argument values

// explicit types
variableName: type
arrayName: type[] = []

**union type for arrays**
mixedArray: (type1|type2)[] = []
variableName: type1|type2

**objects**
objName: object
objName: {
    key: type,
    key: type,
}
**dynamic types(any)**
varName: any = whatever
arrayName: any[] = []
objName: {key: any, key2: any, key3: any}

**ts config for workflow**
run 'tsc --init'
in tsconfig:
change rootDir to ts dir
change outDir to js dir
run 'tsc -w' to compile all files
add quotes "include": ["folderName"] in tsconfig to override compiler to only root and out inputs.

**functions**
can declare a function or:
let funcName: Function
// optional params:
funcName = (param?: type )
// default params:
funcName = (param: type = defaultValue)
// return value
funcName = (param: type): returnType => {
    return
}

**type alias**
type AliasName = type1 | type2
type ObjWithAlias = {key1: type, key2: AliasName}

**function signature**
// example 1
let greet: (a: string, b: string) => void;
greet = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

// example 2
let calc: (a: number, b: number, c: string) => number
calc = (num1: number, num2: number, action: string) => {
    if (action === 'add'){
        return num1 + num2
    } else {
        return num1 - num2
    }
}

// example 3
let logDetails: (obj: {name: string, age: number }) => void
logDetails = (person: {name: string, age: number }) => {
    console.log(`${person.name} is {person.age} years old`)
}