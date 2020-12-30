# react_ecommerce-project

# Resources

[Empezando - React](https://es.reactjs.org/docs/getting-started.html)

---

# Intro

Tengo que comenzar a prestar mucha más atención a la arquitectura de las aplicaciones. Es fundamental entender el flujo de comunicación existente entre los diferentes componentes de esta y cómo interfiere en el crecimiento futuro de la app.

Al principio de la introducción de frameworks para JS, estos se basaban en un desarrollo **imperativo**:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57e68a9c-448e-4ea4-ada1-28cf4ff22b21/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57e68a9c-448e-4ea4-ada1-28cf4ff22b21/Untitled.png)

La modificación de ciertos elementos implicaba el cambio de estado de muchos otros, y todo de forma directa en el DOM. Esto empezaba a ser bastante complicado de gestionar en grandes aplicaciones. Ahí fue cuando el equipo de Facebook, con React, dió con la idea adecuada en el momento adecuado (**declarative**), estableciendo una serie de conceptos que luego serían "copiados" por Angular (sin JS) y Vue, entre otros muchos.

La idea fundamental, explicada de una forma "burda" es:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77578d9c-4125-487b-99d1-0509a7e835fa/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77578d9c-4125-487b-99d1-0509a7e835fa/Untitled.png)

**VirtualDOM**: "dime qué cuál quieres que sea el nuevo estado de la aplicación y los cambios que quieres que ocurran, que yo me encargo de buscar la forma más óptima de llevar a cabo dichos cambios en conjunto, ¡pero tú no toques nada directamente! "

**En React, los componentes no dejan de ser funciones, que reciben un "input" y devuelven un estado concreto de dicho componente.**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/63a34e58-4347-490a-a554-b0aefd90b18c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/63a34e58-4347-490a-a554-b0aefd90b18c/Untitled.png)

Los conceptos principales que hacen de React la librería que es, son los siguientes:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e90514c0-8bc7-4695-8efa-eefcbcca1e7a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e90514c0-8bc7-4695-8efa-eefcbcca1e7a/Untitled.png)

Salvo el último, coinciden con frameworks como Angular

El precepto de permitir que el flujo de comunicación sólo se establezca "aguas abajo", mejora el mantenimiento del código ya que hace más facil la depuración de este. Podemos conocer de donde "vienen" los errores.

**React se encarga principalmente de UI, la visualización de componentes dependiendo de su estado. Para el resto de cosas se hace necesaria la integración de librerías externas.**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/87503a97-85c8-4d7f-8b5b-53d968d64832/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/87503a97-85c8-4d7f-8b5b-53d968d64832/Untitled.png)

React sería los "robots" destacados. Para el resto de integraciones necesitaríamos recursos diferencias. Esto es lo que hace que sea una librería tan "flexible"

**Los dos "robots" señalados tienen relación con las dos librerías que "importamos" al crear un nuevo componente en React: `React` y `ReactDOM`**

Debes tener claras **tres ideas** siempre que trabajes con React:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/47e50919-49d4-4fc5-999f-a93db44f7334/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/47e50919-49d4-4fc5-999f-a93db44f7334/Untitled.png)

---

# Setting Up E-commerce Project

¡Vamos a crear un E-commerce y a publicarlo online!

[Complete-React-Course-Course-Guideline.pdf](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2fb5fac9-ec00-41c3-af1f-88165e0be433/Complete-React-Course-Course-Guideline.pdf)

Creamos la aplicación mediante el siguiente comando:

`npx create-react-app crwn-clothing --template cra-template-pwa`

Con la plantilla de React configurada para PWA.

Instalamos `node-sass` teniendo en cuenta la versión que funciona correctamente para nuestra instalación de Node: `npm install node-sass@4.14.1`

**Tener muy en cuenta, los componentes y relaciones que vamos a establecer en nuestra aplicación (punto 1 de la última imagen). Generaremos 2 carpetas base para guardar esto: `components` y `pages`**

Podemos modificar estilos de forma dinámica en JSX con el atributo `style`

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9884edc4-5ea3-479a-affd-814c9c0fa177/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9884edc4-5ea3-479a-affd-814c9c0fa177/Untitled.png)

Ten en cuenta que cuando haces **:hover** sobre una etiqueta de CSS, se abrirá un pequeño menú que te indicará el selector que se está aplicando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c989007b-1b7e-4883-b8b4-74307baae61e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c989007b-1b7e-4883-b8b4-74307baae61e/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/477f0516-bc7d-42d3-b0f8-96fecb348f12/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/477f0516-bc7d-42d3-b0f8-96fecb348f12/Untitled.png)

---

# Routing in React

Recuerda que React, de base, provee las herramientas necesarias para lidiar con la UI. No incluye librerías para manejar la navegación como sí que hace Angular.

Te deja elegir si quieres usar Routing o no y qué librería var a incluir para ello.

Utilizaremos **React Routing**:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1ccffeaf-8a5c-4e9d-89e7-30676b7d49dc/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1ccffeaf-8a5c-4e9d-89e7-30676b7d49dc/Untitled.png)

[React Router: Declarative Routing for React](https://reactrouter.com/)

Esta librería maneja internamente la API del navegador que se encarga de guardar y crear rutas de navegación (para poder navegar a través de ellas).

Para el uso de rutas, configuramos en primera instancia el componente base `index.js`

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
```

Y nos vamos al que va a ser la raíz de las rutas: `App.js`

```jsx
import React from 'react';
import HomePage from './pages/homepage/homepage.component';
import { Switch, Route } from 'react-router-dom';

import './App.scss';

const HatsPage = () => <h1>HATS PAGE</h1>;
function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}></Route>
        <Route path='/hats' component={HatsPage}></Route>
      </Switch>
    </div>
  );
}
```

Presta atención a la importancia del atributo `exact` que hace que la ruta deba ser estrictamente `'/'` para poder renderizar lo indicado.

Cualquier componente renderizado mediante `ReactRouting` recibe lo siguientes PROPS al crearse: _history_, _location_, _match_

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e7f3e1b1-f4ff-47ec-9d2d-ef0bb3c77eb5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e7f3e1b1-f4ff-47ec-9d2d-ef0bb3c77eb5/Untitled.png)

Esto facilita el acceso a determinados valores internos de la ruta en los componentes. Un ejemplo:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b96393ff-763f-48b3-aba7-f8e5ab2a1f12/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b96393ff-763f-48b3-aba7-f8e5ab2a1f12/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/625578fd-2b10-4610-81b5-4a8c5866a538/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/625578fd-2b10-4610-81b5-4a8c5866a538/Untitled.png)

Date cuenta que al navegar entre páginas en una SPA, la navegación es virtual. Y más en React con el DOM virtual (no estamos navegando realmente, sino que se está produciendo un cambio de elementos del DOM).

Es por esto por lo que se hace necesario también modificar el "historial" de navegación de forma "simulada".

Para ello tenemos un método propio de la librería, `Link` o un método propio del API de navegación del navegador:

**Ojo que `link` lo importamos de `'react-router-dom'`**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e154568c-437d-4781-a3a5-2fe010a54d8e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e154568c-437d-4781-a3a5-2fe010a54d8e/Untitled.png)

Método usado habitualmente con la librería

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/36546f03-0b84-40b8-ae0f-dd10fa8b5eff/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/36546f03-0b84-40b8-ae0f-dd10fa8b5eff/Untitled.png)

Navegación dinámica y cambio del historial de navegación

Para que un componente "child" pueda acceder al `history` del navegador, podemos pasarlo como PROPS a través de los sucesivos padres o podemos hacerlo bien, con la Factory Function `withRouter()` de la librería:

```jsx
const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => (
  <div
    className={`${size} menu-item`}
    onClick={() => {
      history.push(linkUrl);
    }}>
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

// Nos permite poder acceder al "history"
export default withRouter(MenuItem);
```

**Muy importante lo que vamos a ver a continuación, usando el SPREAD OPERATOR para no tener que ir pasando los parámetros individualmente como PROPS**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/09738083-6a37-44fa-ba26-6d6a4811aa80/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/09738083-6a37-44fa-ba26-6d6a4811aa80/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5a057571-84f1-49e0-a990-7b1990e4f010/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5a057571-84f1-49e0-a990-7b1990e4f010/Untitled.png)

---

# Forms + Components

Vamos a crear la página de "shopping", que tendrá el siguiente aspecto:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e89fc38-84fe-4870-83f2-943a3865ff6a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e89fc38-84fe-4870-83f2-943a3865ff6a/Untitled.png)

Una vez creados los componentes de la galería, creamos el HEADER.

Este se incrustará en la aplicación con una estructura similar al `app.component.ts` de Angular:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68963281-a858-4c51-ab81-2d4669692366/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68963281-a858-4c51-ab81-2d4669692366/Untitled.png)

Imaginemos que el `switch` es el `router-outlet`
