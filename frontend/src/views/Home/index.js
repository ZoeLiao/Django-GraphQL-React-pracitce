import React from 'react'
import { Graphics } from 'pixi.js'
import { PixiComponent, Stage } from '@inlet/react-pixi'

const Rectangle = PixiComponent('Rectangle', {
  create: props => new Graphics(),
  applyProps: (instance, _, props) => {
    const { x, y, width, height, fill } = props

    instance.clear()
    instance.beginFill(fill)
    instance.drawRect(x, y, width, height)
    instance.endFill()
  }
})

function Home (props) {
  return (
    <div>
      <Stage>
        <Rectangle x={100} y={100} width={500} height={300} fill={0xff0000} />
      </Stage>
    </div>
  )
}

export default Home
