/*
## Long Words

### Instructions

Create three functions that take as argument an array each:

- `longWords` that returns true if every element of the array is a string of at
least 5 characters.

- `oneLongWord` that returns true if at least one element of the array is a
string of at least 10 characters.

- `noLongWords` that returns true if there are no elements in the array that are
a string with at least 7 characters.

### Notions

- https://devdocs.io/javascript/global_objects/Array/every
- https://devdocs.io/javascript/global_objects/Array/some

// /*/ // ⚡

// /*/ // ⚡
export const tests = []
const t = (f) => tests.push(f)

//monkey patch of every

export const setup = () => {
  const everyCalls = []
  const _every = Array.prototype.every
  Array.prototype.every = function () {
    everyCalls.push(this)
    return _every.apply(this, arguments)
  }

  const someCalls = []
  const _some = Array.prototype.some
  Array.prototype.some = function () {
    someCalls.push(this)
    return _some.apply(this, arguments)
  }
  return { everyCalls, someCalls }
}

let arr1 = ['fill', 'carbon', 'chart', 'glare', 'express']
let arr2 = ['double', 'afford', 'coalition', 'reaction', 'persist']
let arr3 = ['leak', 'talk', 'bite', 'slip', 'free']
let arr4 = ['fixture', 'opponent', 'coincide', 'residential', 'relaxation']

t(({ eq }) => eq(longWords(arr1), false))
t(({ eq, ctx }) => eq(ctx.everyCalls[ctx.everyCalls.length - 1], arr1))
t(({ eq }) => eq(longWords(arr2), true))
t(({ eq, ctx }) => eq(ctx.everyCalls[ctx.everyCalls.length - 1], arr2))
t(({ eq }) => eq(longWords(arr3), false))
t(({ eq, ctx }) => eq(ctx.everyCalls[ctx.everyCalls.length - 1], arr3))
t(({ eq }) => eq(longWords(arr4), true))
t(({ eq, ctx }) => eq(ctx.everyCalls[ctx.everyCalls.length - 1], arr4))

t(({ eq }) => eq(oneLongWord(arr1), false))
t(({ eq, ctx }) => eq(ctx.someCalls[ctx.someCalls.length - 1], arr1))
t(({ eq }) => eq(oneLongWord(arr2), false))
t(({ eq, ctx }) => eq(ctx.someCalls[ctx.someCalls.length - 1], arr2))
t(({ eq }) => eq(oneLongWord(arr3), false))
t(({ eq, ctx }) => eq(ctx.someCalls[ctx.someCalls.length - 1], arr3))
t(({ eq }) => eq(oneLongWord(arr4), true))
t(({ eq, ctx }) => eq(ctx.someCalls[ctx.someCalls.length - 1], arr4))

t(({ eq }) => eq(noLongWords(arr1), false))
t(({ eq }) => eq(noLongWords(arr2), false))
t(({ eq }) => eq(noLongWords(arr3), true))
t(({ eq }) => eq(noLongWords(arr4), false))

Object.freeze(tests)