# Objects

## Object vs Set vs Map

Which uses Objects (a hash table, essentially). One immediate advantage of using Objects is that you can return early if you detect a duplicate, whereas with Sets, you have to convert the entire array to a Set before you can decide if there are duplicates. => 

- Small array, using Sets faster
- Larger array, using Objects becomes significantly faster.

> What about `Map`?
