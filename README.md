#Machine Test - Solutions

## Project Structure

-`q1-paginated-table`
- `solution/`
    - `index.html`
    - `js/`
        - `questions.js`
    - `css/`
        - `styles.css`

## Question 1: Paginated Table (Angular)

## How to run:

1. Clone the repository
2. Navigate to the `q1-paginated-table` directory
3. npm install
4. ng serve
5. Open `http://localhost:4200` in a web browser

Features:
-Fetches users form https://reqres.in/api/users
-Dropdown to select rows per page (5,10,20)
-Dynamic page navigation buttons
-Data re-fetched from API on every page/row change



Questions 2-5 - Vanilla JavaScript 

Open the file directly in any browser:

index.html 

Q2 – Debounce function demo: click the button rapidly, counter only increments after you stop for 500ms

Q3 – Missing number finder: click the button to find the missing number in each array

Q4 – User list manipulation: add "David" or remove the first user from the list

Q5 – Login form validation: shows error if fields are empty, logs "Form Submitted" on success



## Questions:

1. Paginated Table in Angular

Using Angular, create a component that displays a paginated table of data fetched from the REST API:

GET: https://reqres.in/api/users/

Requirements:
* Implement pagination where users can navigate between pages dynamically.
* Add a dropdown to select the number of rows per page (e.g., 5, 10, 20).
* Display page numbers at the bottom of the table for easy navigation.
* Fetch data dynamically from the API on each page change.

2. Implement a Debounce Function

Write a function debounce that limits the rate at which a function func is called. The debounce function should return a new function that will only call func after it stops being invoked for a specified wait time (in milliseconds).

3. Find the Missing Number in a Sequence

You are given an array containing n distinct numbers taken from the range 1 to (n+1). One number is missing from the sequence. Your task is to find the first missing number.

Constraints:
* The array contains n elements.
* The sequence is supposed to be from 1 to (n+1), with only one missing number.
* Find only the first missing number if multiple numbers are missing.

Function Signature:

function findMissingNumber(arr) {
    // Your code here
}

const arr1 = [3, 7, 1, 2, 8, 4, 5];
const arr2 = [1, 2, 4, 5, 6];

console.log(findMissingNumber(arr1)); // Output: 6
console.log(findMissingNumber(arr2)); // Output: 3

4. Modify User List in HTML

In an HTML playground, assume the following structure exists:

<div id="user-list">
  <ul>
    <li>Alice</li>
    <li>Bob</li>
    <li>Charlie</li>
  </ul>
</div>

Tasks:
* Write JavaScript code to add a new user "David" to the list.
* Modify the script to remove the first user from the list.

5. Form Validation in JavaScript

Given the following HTML login form:

<form id="login-form">
  <input type="text" id="username" placeholder="Enter username" />
  <input type="password" id="password" placeholder="Enter password" />
  <button type="submit">Login</button>
</form>
<div id="error-message"></div>

Requirements:

* Write JavaScript code to validate that both fields are not empty when the form is submitted.
* If validation fails, display an error message inside the #error-message div.
* If validation passes, log "Form Submitted" to the console.