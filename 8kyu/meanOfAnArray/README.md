<h1 align="centre">Task</h1>

It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

Return the average of the given array rounded down to its nearest integer.

The array will never be empty.

<h1 align="centre">Process</h1>

- Take the marks argument and run a reduce method adding them together to make a total
- Collect the average by taking the total and dividing it by the the amount of marks using .length method
- Average it down using Math.floor on the average
