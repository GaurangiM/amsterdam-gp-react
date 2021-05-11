| Section           | Max Points | Self | Evaluator |
| ----------------- | ---------- | ---- | --------- |
| 1 Navigation      | 5          | 0/5  | 0/5       |
| 2 Contact Details | 4          | 0/4  | 0/4       |
| 3 Availability    | 7          | 0/7  | 0/7       |
| 4 Sign up         | 8          | 0/8  | 0/8       |
| 5 Patient DB      | 16         | 0/16 | 0/16      |
| 6 Patient Details | 5          | 0/5  | 0/5       |
| 7 Express server  | 7          | 0/7  | 0/7       |
| 8 Styling         | 2          | 0/2  | 0/2       |
| 9 Finishing up    | 6          | 0/6  | 0/6       |
| Total             | 60         | 0/60 | 0/60      |

| 1. Navigation - Criteria                                  | Points | Self | Evaluator |
| --------------------------------------------------------- | ------ | ---- | --------- |
| 4 Static Routes are implemented using react router        | 1      |    1  |           |
| Each route renders a different component                  | 1      |      |           |
| A navbar can be used to navigate between the static pages | 1      |      |           |
| 2 Buttons link to the correct pages                       | 1      |      |           |
| The navbar indicates what page you are on                 | 1      |      |           |
| Total                                                     | 5      |      |           |

| 2. Contact Details - Criteria                                          | Points | Self | Evaluator |
| ---------------------------------------------------------------------- | ------ | ---- | --------- |
| Phone number is displayed on both pages                                | 0.5    |      |           |
| Wether the practice is open right now is displayed on both pages       | 0.5    |      |           |
| Wether the practice is open or closed is dynamic, not hardcoded        | 2      |      |           |
| To display this information the same component is reused on both pages | 1      |      |           |
| Total                                                                  | 4      |      |           |

| 3. Availability - Criteria                                        | Points | Self | Evaluator |
| ----------------------------------------------------------------- | ------ | ---- | --------- |
| Doctor availabilty is displayed on the who is on duty page        | 1      |      |           |
| The data is fetched from the api, not hardcoded                   | 2      |      |           |
| If the data is still being fetched, display "loading" to the user | 2      |      |           |
| The data is displayed using .map                                  | 1      |      |           |
| There is a warning in the console regarding "key" props           | -1     |      |           |
| Doctor availability is displayed using an html `table` element    | 1      |      |           |
| Total                                                             | 7      |      |           |

| 4. Sign up - Criteria                                                            | Points | Self | Evaluator |
| -------------------------------------------------------------------------------- | ------ | ---- | --------- |
| A form is displayed on the Patient Signup page                                   | 1      |      |           |
| The form has inputs for firstName, lastName, email, phoneNumber & submit         | 0.5    |      |           |
| The form has a select input for gender, and a date input for dateOfBirth         | 0.5    |      |           |
| The state of the form is controlled using React useState hook(s)                 | 2      |      |           |
| When the form is submitted, the user input for all form fields is console.logged | 2      |      |           |
| When the form has been submitted, we show a success message to the user          | 2      |      |           |
| The success message is an alert, prompt or confirm popup                         | -1     |      |           |
| Submitting the form refreshes the page                                           | -2     |      |           |
| Total                                                                            | 8      |      |           |

| 5. Patient DB - Criteria                                                  | Points | Self | Evaluator |
| ------------------------------------------------------------------------- | ------ | ---- | --------- |
| The `name`, `id` & `dateOfBirth` is displayed for all patients            | 1      |      |           |
| The data for each patient is displayed using a seperate component         | 2      |      |           |
| The data is displayed using .map                                          | 1      |      |           |
| There is a warning in the console regarding "key" props                   | -1     |      |           |
| The patients are sorted by their `lastName` using .sort                   | 2      |      |           |
| The data for the patients is fetched from the api, not hardcoded          | 1      |      |           |
| Each patient displayed has a `show details` button                        | 0.5    |      |           |
| The show details button links to the detail page for that patient         | 1.5    |      |           |
| The page has a `select` input for the 3 doctors names and `all`           | 1      |      |           |
| When `all` is selected, all patients are displayed                        | 1      |      |           |
| Selecting the name of a doctor filters the patients that are displayed    | 3      |      |           |
| The names of the doctors in the `select` input are fetched, not hardcoded | 2      |      |           |
| Total                                                                     | 16     |      |           |

| 6. Patient Details - Criteria                                                 | Points | Self | Evaluator |
| ----------------------------------------------------------------------------- | ------ | ---- | --------- |
| 1 Dynamic route is implemented using React Router for the patient detail page | 1      |      |           |
| The page displays the firstname, lastname, gender, dateOfBirth of a patient   | 0.5    |      |           |
| The page displays the email, phoneNumber & prescriptions of a patient         | 0.5    |      |           |
| The data on the page is fetched from the api, not hardcoded                   | 2      |      |           |
| The data of all the patients is fetched from the api on this page             | -1     |      |           |
| Total                                                                         | 5      |      |           |

| 7. Express server - Criteria                                                                   | Points | Self | Evaluator |
| ---------------------------------------------------------------------------------------------- | ------ | ---- | --------- |
| There is a file called server.js & a package.json, in your server repository                   | 0.5    |      |           |
| package.json contains a script called `server`, which runs the server.js file with node        | 0.5    |      |           |
| package.json contains a script called `server-dev`, which runs the server.js file with nodemon | 0.5    |      |           |
| running server.js starts an express server which listens on port 4000                          | 1      |      |           |
| Requests to http://localhost:4000/patients get a response of an array with 10 patients         | 1      |      |           |
| Requests to http://localhost:4000/doctors get a response of an array of 3 doctors              | 1      |      |           |
| Requests to http://localhost:4000/patients/:id get a response of 1 patient object with that id | 2.5    |      |           |
| Total                                                                                          | 7      |      |           |

| 8. Styling - Criteria                                                  | Points | Self | Evaluator |
| ---------------------------------------------------------------------- | ------ | ---- | --------- |
| Student has applied at least 5 style rules                             | 1      |      |           |
| Styles are split up across at least 2 css files created by the student | 1      |      |           |
| Total                                                                  | 2      |      |           |

| 9. Finishing up - Criteria                                                       | Points | Self | Evaluator |
| -------------------------------------------------------------------------------- | ------ | ---- | --------- |
| Student performed an accurate self assessment (within 7 points of the evaluator) | 2      |      |           |
| Student can reflect on their process by writing a reflection of ~200 words       | 2      |      |           |
| Student has committed at least once per section                                  | 1      |      |           |
| Student has pushed their repository using git                                    | 1      |      |           |
| Total                                                                            | 6      |      |           |