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


## "useCallback"
evita calculos inecesarios en funciones

##
La primera (JSON.stringify) se encarga de transformar los objetos en cadenas de texto mientras que, la segunda (JSON.parse) se encarga de transformar cadenas de texto en objetos.

## custom hooks 
-se usa para separar logica 
-Reglas de los hooks
No invocar hooks desde loops, condicionales o funciones anidadas.
Todo custom hook debe iniciar por la palabra use
2 componentes compartiendo el mismo hook no comparten el mismo estado
Un hook puede invocar a otro hook
Los hook solo deben usarse en componentes funcionales
Deben utilizarse en el nivel superior de los componentes

## react-redux, aquí podrás encontrar dos custom hooks que son muy útiles al momento de usar esta biblioteca: useSelector y useDispatcher
useSelector: nos permite elegir de qué contenido en nuestro estado queremos leer información para usarla en nuestro componente.
useDispatcher: nos permite ejecutar las acciones hacia nuestro estado.

## React Router  contiene diferentes custom hooks para acceder a varias funcionalidades e información de la navegación del usuario en nuestra aplicación.
useHistory: nos permite acceder a los métodos de navegación para movernos a través de ella de la forma que lo veamos más conveniente.
useLocation: nos permite acceder a la información de la URL actual en la que se encuentran nuestros usuarios.
useParams: nos permite acceder a un objeto con la información de los parámetros que tendremos en la ruta que estamos navegando, por ejemplo, el slug de un blogpost.
useRouteMatch: funciona al igual que los componentes <Route>, pero este hook también nos permitirá saber si existe algún match adicional que podremos usar para mostrar o no otra información en la misma vista.
