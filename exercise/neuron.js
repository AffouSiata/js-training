/*
## neuron

### Instructions

Create a function called `neuron` that allows your AI/bot to learn how to data shape a given 
dataset into an object so that it can better navigate the data.

### Example

```js
neuron([
  'Questions: what is ounces? - Response: Ounce, unit of weight in the avoirdupois system',
  'Questions: what is ounces? - Response: equal to 1/16 pound (437 1/2 grains)',
  'Questions: what is Mud dauber - Response: Mud dauber is a name commonly applied to a number of wasps',
  'Orders: shutdown! - Response: Yes Sr!',
  'Orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.'
])

// output
{
  questions: {
    what_is_ounces: { questions: 'what is ounces?', responses: [
        'Ounce, unit of weight in the avoirdupois system',
        'equal to 1/16 pound (437 1/2 grains)'
    ] },
    what_is_mud_dauber: { questions: 'what is Mud dauber', responses: [
        'Mud dauber is a name commonly applied to a number of wasps'
    ] }
  },
  orders: {
    shutdown: { orders: 'shutdown!', responses: ['Yes Sr!'] },
    quote_something: { orders: 'Quote something!', responses: [
        'Pursue what catches your heart, not what catches your eyes.'
    ] }
  }
}
```

// /*/ // ⚡

// /*/ // ⚡

export const tests = []
const t = (f) => tests.push(f)

// empty dataset
t(({ eq }) => eq(neuron([]), {}))

// simple dataset
t(({ eq }) =>
  eq(
    neuron(['Orders: shutdown please! - Responses: no!']).orders
      .shutdown_please,
    { order: 'shutdown please!', responses: ['no!'] }
  )
)

// multiple questions
t(({ eq }) =>
  eq(
    neuron([
      'Questions: what is life? - Response: The condition that distinguishes animals and plants from inorganic matter',
      'Questions: what is life? - Response: Life is a characteristic that distinguishes physical entities that have biological processes',
    ]).questions.what_is_life,
    {
      question: 'what is life?',
      responses: [
        'The condition that distinguishes animals and plants from inorganic matter',
        'Life is a characteristic that distinguishes physical entities that have biological processes',
      ],
    }
  )
)

// multiple interactions
t(({ eq, ctx }) =>
  eq(
    neuron([
      'Questions: how are you? - Response: well thanks, and you?',
      'affirmations: i am fine - Response: cool',
      'affirmations: i am fine - Response: awesome',
      'Orders: turn on the lights! - Response: done',
    ]),
    ctx.multiInteractions
  )
)

// out of order
t(({ eq, ctx }) =>
  eq(
    neuron([
      'Questions: how are you? - Response: well thanks, and you?',
      'affirmations: i am fine - Response: cool',
      'Orders: turn on the lights! - Response: done',
      'affirmations: i am fine - Response: awesome',
    ]),
    ctx.multiInteractions
  )
)

// testing big dataset
t(({ eq, ctx }) => eq(neuron(ctx.multipleTypes), ctx.multResult))

Object.freeze(tests)

export const setup = () => ({
  multiInteractions: {
    affirmations: {
      i_am_fine: {
        affirmation: 'i am fine',
        responses: ['cool', 'awesome'],
      },
    },
    orders: {
      turn_on_the_lights: {
        order: 'turn on the lights!',
        responses: ['done'],
      },
    },
    questions: {
      how_are_you: {
        question: 'how are you?',
        responses: ['well thanks, and you?'],
      },
    },
  },
  multipleTypes: [
    'Questions: How did Bob Marley die? - Response: Nesta Robert Bob Marley, OM was a Jamaican singer-songwriter and musician.',
    'Questions: How did Bob Marley die? - Response: He was the rhythm guitarist and lead singer for the ska , rocksteady and reggae bands The Wailers and Bob Marley & The Wailers (1974–1981).',
    'Questions: how did crater lake get its color? - Response: Crater Lake is a caldera lake located in the south-central region of the U.S. state of Oregon .',
    'Questions: how did crater lake get its color? - Response: It is the main feature of Crater Lake National Park and famous for its deep blue color and water clarity .',
    'Questions: how much is a ream of paper? - Response: Various measures of paper quantity have been and are in use.',
    'Questions: how much is a ream of paper? - Response: Although there are no S.I. units such as quires and bales , there are ISO and DIN standards for the ream.',
    'Questions: how much is a ream of paper? - Response: Expressions used here include U.S. Customary units.',
    'Orders: shutdown! - Response: no!',
    'Orders: shutdown! - Response: Yes Sr!',
    'Orders: shutdown! - Response: goodbye!!',
    'orders: Quote something! - Response: Make improvements, not excuses. Seek respect, not attention.',
    'orders: Quote something! - Response: Life becomes easier and more beautiful when we can see the good in other people.',
    'orders: Quote something! - Response: Pursue what catches your heart, not what catches your eyes.',
  ],
  multResult: {
    questions: {
      how_did_bob_marley_die: {
        question: 'How did Bob Marley die?',
        responses: [
          'Nesta Robert Bob Marley, OM was a Jamaican singer-songwriter and musician.',
          'He was the rhythm guitarist and lead singer for the ska , rocksteady and reggae bands The Wailers and Bob Marley & The Wailers (1974–1981).',
        ],
      },
      how_did_crater_lake_get_its_color: {
        question: 'how did crater lake get its color?',
        responses: [
          'Crater Lake is a caldera lake located in the south-central region of the U.S. state of Oregon .',
          'It is the main feature of Crater Lake National Park and famous for its deep blue color and water clarity .',
        ],
      },
      how_much_is_a_ream_of_paper: {
        question: 'how much is a ream of paper?',
        responses: [
          'Various measures of paper quantity have been and are in use.',
          'Although there are no S.I. units such as quires and bales , there are ISO and DIN standards for the ream.',
          'Expressions used here include U.S. Customary units.',
        ],
      },
    },
    orders: {
      shutdown: {
        order: 'shutdown!',
        responses: ['no!', 'Yes Sr!', 'goodbye!!'],
      },
      quote_something: {
        order: 'Quote something!',
        responses: [
          'Make improvements, not excuses. Seek respect, not attention.',
          'Life becomes easier and more beautiful when we can see the good in other people.',
          'Pursue what catches your heart, not what catches your eyes.',
        ],
      },
    },
  },
})
