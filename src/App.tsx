import React, {FormEvent, useState} from 'react';

// @ts-ignore
import Values from 'values.js'
import SingleColor, {SingleColorType} from "./SingleColor";

function App() {
  const [color, setColor] = useState('')
  const [error, setError] = useState(false)
  const [list, setList] = useState(new Values('#9f6072').all(20))

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      let colors = new Values(color).all(20)
      setList(colors)
      setError(false)
    } catch (error) {
      setError(true)
    }
  }
  return (<>
      <section className="container">
        <h3>color generator</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder='#9f6072'
            className={`${error ? 'error' : null}`}
          />
{/*          <div>
            <input type="radio" id="contactChoice1" name="contact" value="email" checked/>
            <label htmlFor="contactChoice1">Email</label>

            <input type="radio" id="contactChoice2" name="contact" value="phone"/>
            <label htmlFor="contactChoice2">Phone</label>

            <input type="radio" id="contactChoice3" name="contact" value="mail"/>
            <label htmlFor="contactChoice3">Mail</label>
          </div>*/}
          <button className="btn" type="submit">submit</button>
        </form>
      </section>

      <section className="colors">
        {
          list.map((color: SingleColorType, index: number) => {
            console.log(color)
            // @ts-ignore
            return <SingleColor key={index} {...color} index={index} hexColor={color.hex}/>
          })
        }
      </section>
    </>
  );
}

export default App;
