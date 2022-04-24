# useState vs useReducer 💪🏻

Tanto useState como useReducer tienen el mismo objetivo: manejar el estado local de nuestros componentes. La diferencia está en el camino que nos ofrecen para llegar a una solución. No hay ganadores, simplemente hay herramientas y paradigmas que se adaptan mejor a nuestros objetivos.

## Que es el useReducer?

La palabra _reducer_ siempre nos hace pensar en Redux, pero no se tiene que entender Redux para usar el hook useReducer.  
useReducer devuelve un array de 2 elementos, similar al hook useState. El primero es el estado actual y el segundo es una función de envío (dispatch).  
Al useReducer se le pasa una función reductora (reducer) y un valor inicial (initialState). Su reductor recibe el estado actual y una acción (action), y devuelve el nuevo estado.

## 3 Ejemplos de como podríamos usar useReducer 🤓

## Primer caso

### ➕ _Contador_ ➖

-   Usamos un reducer para sumar y restar en un contador.
-   El reducer está codeado dentro del mismo componente
-   Nos manejamos solo con tipos de acciones como por ejemplo "sumar" y "restar".

## Segundo caso

### 📝 _TodoApp_ ✏️

-   Declaramos las acciones que vamos a ejecutar en nuestra app. Estás acciones las declaramos y las exportamos dentro de una carpeta llamada _actions_ para luego importarlas en el reducer.
-   El reducer ya no está en el mismo componente sino que lo aislamos al igual que las acciones. Creamos una carpeta llamada _reducers_ y dentro lo creamos y lo exportamos. Dentro de esta carpeta también podríamos tener el estado inicial de nuestro reducer.
-   En nuestro componente vamos a despachar las acciones y, esta vez, también vamos a mandar un payload con la información dentro de nuestro dipatch acompañado del tipo de acción.

## Tercer caso

### 💻 _Rick & Morty_

#### En este último caso vamos a utlizar un reducer pero dentro de un customHook. Vamos a crear un hook customizado por nosotros para poder hacer llamados a una API, en este caso, a la de Rick & Morty.

-   Al igual que en el caso anterior vamos a declarar las acciones que vamos a ejecutar en nuestra app.
-   El useReducer va a estar dentro del customHook y vamos a retornar el state para luego usarlo en el componente principal.
-   En este customHook vamos a hacer la llamada a la API y vamos a despachar las acciones para ir actualizando el estado.
-   Por último vamos a consumir ese estado en nuestro componente para mostrar los personajes.
