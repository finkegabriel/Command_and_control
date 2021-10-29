import React, { useRef, useEffect } from 'react';
import interact from 'interactjs';
import Button from './components/button';
import Header from './components/header';
import ReactTouchEvents from "react-touch-events";;

const baseStyles = {
  main: {
    position: "sticky",
    height: '75%',
    width: '100%',
  },
  drag1:{
    width: '25%',
    minHeight: '6.5em',
    margin: '1rem 0 0 1rem',
    backgroundColor: '#29e',
    color: 'white',
    borderRadius: '0.75em',
    padding:'4%',
    touchAction: 'none',
    userSelect: 'none',
    transform: 'translate(0px, 0px)',
  },
  drag2:{
    width: '25%',
    minHeight: '6.5em',
    margin: '1rem 0 0 1rem',
    backgroundColor: '#29e',
    color: 'white',
    borderRadius: '0.75em',
    padding:'4%',
    touchAction: 'none',
    userSelect: 'none',
    transform: 'translate(0px, 0px)',
  }
}

function App() {
  // initialize the canvas context
  useEffect(() => {

  }, []);


  interact('.draggable')
    .draggable({
      // enable inertial throwing
      inertia: true,
      // keep the element within the area of it's parent
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: 'parent',
          endOnly: true
        })
      ],
      // enable autoScroll
      autoScroll: true,

      listeners: {
        // call this function on every dragmove event
        move: dragMoveListener,

        // call this function on every dragend event
        end(event) {
          var textEl = event.target.querySelector('p')

          textEl && (textEl.textContent =
            'moved a distance of ' +
            (Math.sqrt(Math.pow(event.pageX - event.x0, 2) +
              Math.pow(event.pageY - event.y0, 2) | 0))
              .toFixed(2) + 'px')
        }
      }
    })

  function dragMoveListener(event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
  }

  // this function is used later in the resizing and gesture demos
  window.dragMoveListener = dragMoveListener


  return (
    <div>
      <div id="drag-1" style={baseStyles.drag1} class="draggable">
        <p> You can drag one element </p>
      </div>
      <div id="drag-2" style={baseStyles.drag2} class="draggable">
        <p> with each pointer </p>
      </div>
    </div>
  );
}

export default App;
