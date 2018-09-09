# Back End

## Part 1: Setting up

1. Make sure that **VSCode** and **NodeJS** are downloaded and installed properly
2. Download zip file from [https://github.com/himkwtn/thinc-first-code-freshmen](https://github.com/himkwtn/thinc-first-code-freshmen) and extract ( or clone the project if you have git)
3. Open the folder with vscode
4. Open the integrated terminal and install dependencies with the following command:

```bash
npm install
```

---

## Part 2: Basic Syntax

Navigate to **hello-world.js** for reference

1. variable declaration
   use **_let_** if the value may be changed later

    ```javascript
    let a = 5; // a = 5
    a = a + 5; // now a = 10
    ```

    use **_const_** for variable whose value will not be changed

    ```javascript
    const PI = 3.14; // PI = 3.14
    PI = 3; // error because PI can not be changed
    ```

2. Printing: use **console.log**
    ```javascript
    console.log("Hello World"); // will print "Hello World" to terminal
    const number = 42;
    console.log(number); // will print 42
    ```
3. Data Type

    - **number**: 1, 2, 3.456
    - **string**: text ex. "Hello World" both single and double quote can be used
    ```javascript
    "Hello World"
    'Hello World'
    ```
    - **boolean**: true/false
    - **array**: list of multiple variables

        ```javascript
        let numbers = [1, 1, 2, 3, 5, 8];
        let teletubbies = ["tinky winky", "dipsy", "lala", "poe"];

        //to access the value, use index

        console.log(numbers[2]); // will print 2.
        console.log(teletubbies[0]); //will print "tinky winky"
        //Note that the first index is zero
        ```

    - **object**: key-value pair.

        ```javascript
        let human = {
            first_name: "John",
            last_name:"Doe",
            age:20
        };

        //to access value, use the key Example:

        console.log(human.first_name); // will print "John"

        // can be nested

        let anotherHuman = {
            name: "Manud",
            address: {
                country: "Thailand",
                province: "Bangkok"
            },
            friends: [
                "Cat",
                "Dog",
                "Bird"
            ]
        };
        console.log(anotherHuman.address.country); // will print "Thailand"
        ```
4. Functions: accept input(s), do something with that input(s) and may return some value
    ```javascript
    function greeting(name){
        console.log("Hello " + name)
    }
    function add(num1, num2){
        return num1 + num2
    }

    greeting("World!"); // will print "Hello World!"

    const num3 = add(1,2);
    console.log(num3); //will print 3
    ```

---

## Part 3: Back End Activity

### 3.1: " **Hello World!**"

1. In the terminal, type

    ```bash
    npm start
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

5. Try changing the value of response and see waht happens.

### 3.2 **GET** / **POST** Request

1. GET Request: sends data via URL
    - **Query**
        - Example: a request is sent to the url /find-user **?id=5**
        - **?id=5** is the query
        - to use this data, **use req.query.\<variable-name>**
        ```javascript
        req = {

            //stuff

            query:{
                id: "5",
            }
        }

        router.get("/find-user", (req, res) => {
            const id = req.query.id;
            const user = findUserById(id)
            res.send(user);
        });
        ```
        - multiple variables is possible **?id=5&age=20&city=Bangkok**

    - **Parameters** (_Note that it can also be used with POST request_)
        - Example: a request is sent to the url /find-user **/5**
        - **/5** is the params
        - to use this data, use **req.params.\<params-name>**
        ```javascript
        req = {

            //stuff

            params:{
                id: "5",
            }
        }

        router.get("/find-user/:id", (req, res) => {
            const id = req.params.id;
            const user = findUserById(id)
            res.send(user);
        });

2. POST Request: sends data via http body in JSON(**J**ava**S**cript **O**bject **N**otation) format, can not be seen on URL

    - Example: login data sent to url __/login__
    ```json
    {
        "username": "Abcd",
        "password": "1234"
    }
    ```
    - to use this data, use **req.body.\<key>**
    ```javascript

    req = {

        //stuff

        body:{
            username: "Abcd",
            password: "1234"
        }
    }

    router.post("/login", (req, res) => {
        const username = req.body.username;
        const password = req.body.password;

        // do authentication stuff

        res.send("welcome!");
    });
    ```

### 3.3 Basic **CRUD** Operations

1. **Create**

    - POST Request to /api/students/create with the following body
    ```JSON
    {
        "name" : name,
        "faculty" faculty,
        "contact": {
            "phone": phone,
            "email": email,
            "line": line
        }
    }
    ```
    - function **createStudent** accepts a student (object), create a new student and return that student
2. **Read**

    - GET Request to /api/students/read/**:id** with id as parameter
    - function **findStudent** accepts id and return the student with that id
3. **Update**

    - POST Request to /api/students/update/:id with id as parameter and the following the body
    ```javascript
    {
        "subjects": [
            subject1,
            subject2,
            subjcet3,
            ...
        ]
    }
    ```
    - function **updateStudent** acccepts id and subjects array, update the student with that id and return the updated student

4. **Delete**

    - GET Request to /api/students/delete with id as query
    - function **deleteStudent** accepts id, delete the student with that id and return the deleted student
