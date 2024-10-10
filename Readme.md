# KoinX Backend Internship Assignment


## Installation

1. Clone this repository to your local machine using the following command:

   ```
   https://github.com/SHAKTHI-VEL/KoinX_Backend_Assignment.git
   ```

2. Change your current directory to the project folder:

   ```
   cd KoinX_Backend_Assignment
   ```

3. Run the following command to fetch the dependencies:

   ```
   npm install
   ```

4. Create the .env file and copy the contents of .env.example into it by typing the following command:
    ```
    cp .env.example .env
    ```

5. Finally start the server by typing the following command:
    ```
    node server.js
    ```

## API ENDPOINT

1. /stats, that will return the latest data about the requested cryptocurrency. [METHOD:-GET] :-
    ```
    /stats
    ```

    JSON BODY:-
    ```
    {
    "coin":"bitcoin"
    }
    ```
    
2. /deviation, that will return the standard deviation of the price of the requested cryptocurrency for the last 100 records stored by the background service in the database. [METHOD:-GET] :-
    ```
    /deviation
    ```

     JSON BODY:-
    ```
    {
    "coin":"bitcoin"
    }

    
