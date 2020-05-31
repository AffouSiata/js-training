/*
## interpolation

### Instructions

Create a function called `interpolation` that takes an object with 5 properties
`step`, `start`, `end`, `callback` and `duration`.
This function must calculate the interpolation points, (x, y),
from the `start` position to `end` position depending on the number of `steps`.
All the points must be calculated in the duration time.

For each interpolation point you must execute and pass as parameters to the callback the interpolation point ([x, y])


### Example

```
steps = 5
start = 0
end = 1
duration = 10

   t
   |
10 |___________________. <- execute callback([1.0, 10])
   |                   |
   |                   |
 8 |_______________.   |
   |               |   |
   |               |   |
 6 |___________.   |   |
   |           |   |   |
   |           |   |   |
 4 |_______.   |   |   |
   |       |   |   |   |
   |       |   |   |   |
 2 |___.   |   |   |   |
   |   |   |   |   |   |
   |___|___|___|___|___|__d
   0  0.2 0.4 0.6 0.8  1
```


### Notions

- https://javascript.info/settimeout-setinterval

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)
const run = async ({ step, start, end, duration, waitTime = 15 }) => {
  let arr = []
  const round = (nbr) => Math.round(nbr * 100) / 100
  const callback = (el) => arr.push(Array.isArray(el) ? el.map(round) : round(el))
  interpolation({ step, start, end, callback, duration })
  await new Promise(s => setTimeout(s, waitTime))
  return arr
}

// testing duration time, forbid loops
t(async ({ eq }) => {
  const { length } = await run({ step: 5, start: 0, end: 4, duration: 28 })
  return eq(length, 2)
})

// testing duration time stamp
t(async ({ eq }) => {
  const {length} = await run({ step: 5, start: 0, end: 4, duration: 10, waitTime: 0 })
  return eq(length, 0)
})

// testing the amount of times the callback was called
t(async ({ eq }) => {
  const { length } = await run({ step: 5, start: 0, end: 1, duration: 10 })
  return eq(length, 5)
})

// testing the interpolation points
t(async ({ eq }) =>
  eq(
    await run({ step: 5, start: 0, end: 1, duration: 10 }),
    [
      [0, 2],
      [0.2, 4],
      [0.4, 6],
      [0.6, 8],
      [0.8, 10],
    ]
  )
)

// testing with different values
t(async ({ eq }) =>
  eq(
    await run({ step: 3, start: 1, end: 2, duration: 10 }),
    [
      [1, 3.33],
      [1.33, 6.67],
      [1.67, 10],
    ]
  )
)

// testing with `duration` inferior to `step`
t(async ({ eq }) =>
  eq(
    await run({ step: 10, start: 2, end: 6, duration: 4 }),
    [
      [2, 0.4],
      [2.4, 0.8],
      [2.8, 1.2],
      [3.2, 1.6],
      [3.6, 2],
      [4, 2.4],
      [4.4, 2.8],
      [4.8, 3.2],
      [5.2, 3.6],
      [5.6, 4],
    ]
  )
)

// testing with `start` superior to `end`
// inverted straight line
t(async ({ eq }) =>
  eq(
    await run({ step: 5, start: 6, end: 2, duration: 6, waitTime: 10 }),
    [
      [6, 1.2],
      [5.2, 2.4],
      [4.4, 3.6],
      [3.6, 4.8],
      [2.8, 6],
    ]
  )
)

Object.freeze(tests)