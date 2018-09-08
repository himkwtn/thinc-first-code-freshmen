# Part 1: Setting up

1. Make sure that **VSCode** and **NodeJS** are downloaded and installed properly
2. Download zip file from https://github.com/himkwtn/thinc-first-code-freshmen and extract ( or clone the project if you have git)
3. Open the folder with vscode
4. Open the integrated terminal and install dependcies with the following command:

```bash
$ npm install
```

# Part 2: Basic Syntax

Navigate to **hello-wolrd.js** for reference

1. varibale declaration
   use **_let_** if the vaule may be changed later

    ```javascript
    let a = 5; // a = 5
    a = a + 5; // now a = 10
    ```

    use **_const_** for variable whose value will not be changed

    ```javascript
    const PI = 3.14; // PI = 3.14
    PI = 3; // error because PI can not be changed
    ```

2. Data Type

-   **number**: 1, 2, 3.456
-   **string**: text ex. "Hello Wolrd" both single and double quote can be used
-   **boolean**: true/false
-   **array**: list of multiple variables

```javascript
let numbers = [1, 1, 2, 3, 5, 8];
let teltubies = ["tinky winky", "dipsy", "lala", "poe"];
//to access the value, use index
numbers[2]; // is equal to 2.
//Note that the first index is zero
```

-   **object**: key-value pair.

```javascript
let = human {
    first_name: "John",
    last_name:"Doe",
    age:20
}
//to access value, use the key ex.
human.first_name // is "John"
```

# Part 3: Back End Activity

## Part 3.1: Hello World!

1. In the terminal, type

```bash
$ npm start
```

2. Go to any web browser and type [localhost:3000](localhost:3000) into the url
3. Click the **Click Me** button!
4. Go to file **routes/api.js** and find the lines

```javascript
router.get("/hello-world", (req, res) => {
	const response = "Hello World!";
	res.send(response);
});
```

5. Try changing the value of response and see happens.
