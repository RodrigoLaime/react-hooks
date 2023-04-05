## Supongamos que queremos manejar el estado de un contador que puede ser incrementado o decrementado por el usuario. En lugar de usar useState, podemos usar useReducer para manejar el estado del contador. Primero, definimos nuestra función reductora que maneja las acciones y actualiza el estado del contador:

javascript
Copy code
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
## Esta función toma el estado actual y una acción, y devuelve un nuevo estado. En este caso, la función maneja dos acciones: increment y decrement, que incrementan y decrementan el valor del contador en 1, respectivamente.

## A continuación, podemos usar useReducer para manejar el estado del contador en nuestro componente de React:

javascript
Copy code
import { useReducer } from 'react';

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div>
      <p>Contador: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>Incrementar</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrementar</button>
    </div>
  );
}

## Aquí, useReducer se utiliza para inicializar el estado del contador a 0 y devolver el estado actual y la función dispatch. Luego, en el onClick de los botones, llamamos a la función dispatch y pasamos una acción correspondiente para actualizar el estado del contador.

Con esto, hemos creado un contador simple que utiliza useReducer para manejar su estado.