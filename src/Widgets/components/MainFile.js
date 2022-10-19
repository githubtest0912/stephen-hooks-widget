import React from 'react'
import Accordion from './Accordion'

const items = [
    {
        title: 'What is React?',
        content: 'React is a frent end javascript library'
    },
    {
        title: 'Why use React?',
        content: 'React is a favorite JS library'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating component'
    }
]

const MainFile = () => {
  return (
    <div><Accordion items={items}/></div>
  )
}

export default MainFile