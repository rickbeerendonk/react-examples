/*! European Union Public License version 1.2 !*/
/*! Copyright © 2017 Rick Beerendonk          !*/

import React, { useReducer, useCallback, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './App.css';

const initialState = {
  items: [0, 1, 2],
  lastId: 2
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const newLastId = state.lastId + 1;
      return {
        ...state,
        items: [...state.items, newLastId],
        lastId: newLastId
      };
    }
    case 'REMOVE_ITEM':
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload)
      };
    default:
      return state;
  }
};

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const nodeRefs = useRef(new Map());

  const handleAdd = useCallback(() => {
    dispatch({ type: 'ADD_ITEM' });
  }, []);

  const handleRemove = useCallback(key => {
    dispatch({ type: 'REMOVE_ITEM', payload: key });
  }, []);

  return (
    <>
      <button onClick={handleAdd}>Add</button>
      <hr />
      <TransitionGroup>
        {state.items.map(key => {
          if (!nodeRefs.current.has(key)) {
            nodeRefs.current.set(key, React.createRef());
          }
          const nodeRef = nodeRefs.current.get(key);
          return (
            <CSSTransition
              key={key}
              nodeRef={nodeRef}
              classNames="item"
              timeout={500}
              unmountOnExit
            >
              <div
                ref={nodeRef}
                onClick={() => handleRemove(key)}
                className="item"
              >
                {key}
              </div>
            </CSSTransition>
          );
        })}
      </TransitionGroup>
    </>
  );
};

export default App;
