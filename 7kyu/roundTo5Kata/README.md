<h1 align="centre">Task</h1>

Given an integer as input, can you round it to the next (meaning, "higher") 5?

<h1>Examples</h1>

input: output:
0 -> 0
2 -> 5
3 -> 5
12 -> 15
21 -> 25
30 -> 30
-2 -> 0
-5 -> -5
etc.

<h1>My Process</h1>

Take the number (n)
Divide it by 5 and get the decimal value
Use math.ceil to get the decimal value
Multiply by 5 to get result
