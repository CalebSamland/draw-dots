import './App.css';
import { useState} from 'react';

function App() {
  // started this project at 4:40pm
  // completed at 6:20pm (1:40h)
  // X Make sure that the entire screen is surrounded by the div - check it's border
  // - On each click, save the location of the click in an array 


  const [circles, setCircles] = useState([])
  const [removedCircles, setRemovedCircles] = useState([])

  const addCircle = (e) => {
    if (circles.length < 1) {
      setCircles([[e.clientX, e.clientY]])
    } else {
      setCircles([...circles, [e.clientX, e.clientY]])
    }
  }

  const removeCircle = () => {
    if (circles.length === 0) return
    let removedCircle = circles.pop()
    if (removedCircles.length < 1) {
      setRemovedCircles([removedCircle])
    } else {
      setRemovedCircles([...removedCircles, removedCircle])
    }
    setCircles([...circles])
  }

  const reAddCircle = () => {
    if (removedCircles.length === 0) return
    setCircles([...circles, removedCircles[removedCircles.length - 1]])
    removedCircles.pop()
  }

  return (
    <div className='App'>
      <div className='controls'>
        <button onClick={removeCircle}>Undo</button>
        <button onClick={reAddCircle}>Redo</button>
      </div>
      <div className="clickable" onClick={(e) => addCircle(e)}>

        {
          circles.map(circle => {
            return (
              <div
                className='circle'
                style={{top: `${circle[1]}px`, left: `${circle[0]}px`}}>
              </div>
            )
          })
        }
      </div>


    </div>
  );
}

export default App;