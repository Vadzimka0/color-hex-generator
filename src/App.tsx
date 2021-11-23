import React, {FormEvent, useState} from 'react';

// @ts-ignore
import Values from 'values.js'
import SingleColor, {SingleColorType} from "./SingleColor";
import {SuperSelect} from "./components/SuperSelect";
import SuperButton from "./components/SuperButton";
import SuperInputText from "./components/SuperInputText";

const amountArr: number[] = [4, 10, 20, 50, 100]

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [value, onChangeOption] = useState(amountArr[1])
  const [list, setList] = useState(new Values('#9f6072').all(100 / value))

  const mappedList = list.map((color: SingleColorType, index: number) => {
    // @ts-ignore
    return <SingleColor key={index} {...color} hexColor={color.hex}/>
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(100 / value)
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
    }
  }
  return (<>
      <section className="container">
        {/*<h3>color generator</h3>*/}
        <form onSubmit={handleSubmit} className="form">
          <SuperInputText
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#9f6072'
            className={`${error ? 'error' : null}`}
          />
          <SuperSelect
            options={amountArr}
            value={value}
            onChangeOption={onChangeOption}
          />
          <SuperButton>submit</SuperButton>
        </form>
      </section>

      <section className="colors">
        {mappedList.filter((color: any) => (color.props.type === 'tint'))}
      </section>
      <div>Divider</div>
      <section className="colors">
        {mappedList.filter((color: any) => (color.props.type === 'shade'))}
      </section>
    </>
  );
}

export default App;
