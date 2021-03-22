# React Ecommerce project (React, Redux, Firebase, Hooks)

# Deploy

[GitHub Pages](https://jlaguilargomez.github.io/react_ecommerce-project/.)

# Resources

[Empezando - React](https://es.reactjs.org/docs/getting-started.html)

---

# Intro

## Arquitectura de aplicación

Tengo que comenzar a prestar mucha más atención a la arquitectura de las aplicaciones. Es fundamental entender el flujo de comunicación existente entre los diferentes componentes de esta y cómo interfiere en el crecimiento futuro de la app.

Al principio de la introducción de frameworks para JS, estos se basaban en un desarrollo **imperativo**:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57e68a9c-448e-4ea4-ada1-28cf4ff22b21/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/57e68a9c-448e-4ea4-ada1-28cf4ff22b21/Untitled.png)

La modificación de ciertos elementos implicaba el cambio de estado de muchos otros, y todo de forma directa en el DOM. Esto empezaba a ser bastante complicado de gestionar en grandes aplicaciones. Ahí fue cuando el equipo de Facebook, con React, dió con la idea adecuada en el momento adecuado (**declarative**), estableciendo una serie de conceptos que luego serían "copiados" por Angular (sin JS) y Vue, entre otros muchos.

La idea fundamental, explicada de una forma "burda" es:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77578d9c-4125-487b-99d1-0509a7e835fa/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/77578d9c-4125-487b-99d1-0509a7e835fa/Untitled.png)

### Virtual DOM

**VirtualDOM**: "dime qué cuál quieres que sea el nuevo estado de la aplicación y los cambios que quieres que ocurran, que yo me encargo de buscar la forma más óptima de llevar a cabo dichos cambios en conjunto, ¡pero tú no toques nada directamente! "

**En React, los componentes no dejan de ser funciones, que reciben un "input" y devuelven un estado concreto de dicho componente.**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/63a34e58-4347-490a-a554-b0aefd90b18c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/63a34e58-4347-490a-a554-b0aefd90b18c/Untitled.png)

### Conceptos fundamentales de la librería REACT

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

### Creamos aplicación PWA

Creamos la aplicación mediante el siguiente comando:

`npx create-react-app crwn-clothing --template cra-template-pwa`

Con la plantilla de React configurada para PWA.

### Node SASS

Instalamos `node-sass` teniendo en cuenta la versión que funciona correctamente para nuestra instalación de Node: `npm install node-sass@4.14.1`

**Tener muy en cuenta, los componentes y relaciones que vamos a establecer en nuestra aplicación (punto 1 de la última imagen). Generaremos 2 carpetas base para guardar esto: `components` y `pages`**

### Atributo STYLE

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

## Routing: configuración de index.js y App.js

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

## Navegación por componentes

Cualquier componente renderizado mediante `ReactRouting` recibe lo siguientes PROPS al crearse: _history_, _location_, _match_

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e7f3e1b1-f4ff-47ec-9d2d-ef0bb3c77eb5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e7f3e1b1-f4ff-47ec-9d2d-ef0bb3c77eb5/Untitled.png)

Esto facilita el acceso a determinados valores internos de la ruta en los componentes. Un ejemplo:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b96393ff-763f-48b3-aba7-f8e5ab2a1f12/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b96393ff-763f-48b3-aba7-f8e5ab2a1f12/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/625578fd-2b10-4610-81b5-4a8c5866a538/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/625578fd-2b10-4610-81b5-4a8c5866a538/Untitled.png)

Date cuenta que al navegar entre páginas en una SPA, la navegación es virtual. Y más en React con el DOM virtual (no estamos navegando realmente, sino que se está produciendo un cambio de elementos del DOM).

Es por esto por lo que se hace necesario también modificar el "historial" de navegación de forma "simulada".

Para ello tenemos un método propio de la librería, `Link` o un método propio del API de navegación del navegador:

### Link component

**Ojo que `link` lo importamos de `'react-router-dom'`**

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e154568c-437d-4781-a3a5-2fe010a54d8e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e154568c-437d-4781-a3a5-2fe010a54d8e/Untitled.png)

Método usado habitualmente con la librería

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/36546f03-0b84-40b8-ae0f-dd10fa8b5eff/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/36546f03-0b84-40b8-ae0f-dd10fa8b5eff/Untitled.png)

Navegación dinámica y cambio del historial de navegación

### Modificando "history"

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

# Components + Forms

Vamos a crear la página de "shopping", que tendrá el siguiente aspecto:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e89fc38-84fe-4870-83f2-943a3865ff6a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3e89fc38-84fe-4870-83f2-943a3865ff6a/Untitled.png)

Una vez creados los componentes de la galería, creamos el HEADER.

Este se incrustará en la aplicación con una estructura similar al `app.component.ts` de Angular:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68963281-a858-4c51-ab81-2d4669692366/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68963281-a858-4c51-ab81-2d4669692366/Untitled.png)

Imaginemos que el `switch` es el `router-outlet`

## Importing SVG in React

_In the previous lesson, you may have seen the strange syntax: **`import** { ReactComponent **as** Logo }`_

_This is a new special syntax when importing SVG in React. The `ReactComponent` import name is special and tells Create React App that you want a React component that renders an SVG, rather than its filename. You can read more about it here, but keep in mind that this is a React library special syntax:_

[_https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files_](https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files)

## Forms in React

Uno de los componentes más comunes en cualquier página son los formularios. En este caso vamos a crear formularios de registro y de "loggin" en la aplicación.

Debemos crear la lógica necesaria para poder dar de alta a nuevos usuarios en el servidor, así como permitir que los usuarios ya registrados puedan acceder a la página.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c2a277b-0fea-4d75-9366-f84863230ab5/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6c2a277b-0fea-4d75-9366-f84863230ab5/Untitled.png)

Utilizaremos FIREBASE para gestionar las autorizaciones de usuarios.

Como es lógico, trataremos de generar tantos componentes reutilizables como se posible en nuestros formularios.

El caso mas obvio es el de los inputs `FormInput` y el de los botones `CustomButton` en los que, como vemos en la imagen adjunta, podremos configurar a través de sus PROPS y decidir los eventos que se lanzarán en cada caso.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8a310db1-82e4-4752-b720-9b177423032d/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8a310db1-82e4-4752-b720-9b177423032d/Untitled.png)

### Estado del formulario

Otra CUESTIÓN muy importante que debes tener en cuenta... ¿dónde albergaremos el estado de los formularios?

Imaginemos la siguiente composición:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/307fb400-2066-4629-b131-de5f65516674/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/307fb400-2066-4629-b131-de5f65516674/Untitled.png)

En la que la página `/signIn` es el componente 7 y cada uno de los formularios viven en 8 y 3...

¿Dónde albergamos el estado de estos, en 7 o quizá en el componente más "arriba" de la aplicación, en este caso 0?

_[🧙🏿‍♂️ si estuvieramos trabajando con REDUX lo tendríamos bastante clarinete, ¿no?]_

**¡SORPRESA!, cada uno de los formularios tendrá su propio estado. ¿Por qué?, porque si lo trasladamos a 7 o 0, cada vez que cambiemos 8, 3 renderizará todo el arbol dependiente del componente del estado, lo que implica cálculos extra que no nos interesan. Además... el estado de 8 no influye en 3 y viceversa.**

Siempre, siempre, ten en cuenta estos 3 epígrafes:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bfced32d-4537-4523-87bf-f8f4b3e763fa/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bfced32d-4537-4523-87bf-f8f4b3e763fa/Untitled.png)

### Cambiar valores del formulario dinámicamente y de forma reutilizable

Ojo al método que utiliza para hacer esto de una forma cómoda, usando el `name` del input como declaración.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7fe2f2d3-ae98-441d-be93-96d3e8cced15/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7fe2f2d3-ae98-441d-be93-96d3e8cced15/Untitled.png)

### Configurando FormInputComponent y estilando con variables y mixin

Creamos una configuración dinámica de cada campo INPUT para poder reutilizarlos en los diferentes formularios:

```jsx
const FormInput = ({ handleChange, label, ...otherProps }) => (
  <div className='group'>
    <input className='form-input' type='text' onChange={handleChange} {...otherProps} />
    {label ? <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>{label}</label> : null}
  </div>
);
```

En el estilo del componente, hemos utilizado variables de SASS, así como `@mixin`:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26afcf80-df75-445b-96a2-2b79df2c4031/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26afcf80-df75-445b-96a2-2b79df2c4031/Untitled.png)

### Configurando CustomButtomComponent con "otherProps" y props.children

Crearemos un componente reutilizable nuevamente ("presentational component"), para que sea lo suficientemente flexible para poder ser utilizado en múltiples sitios

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7dd065b-4a0f-4093-93c1-dd54ccc6446f/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a7dd065b-4a0f-4093-93c1-dd54ccc6446f/Untitled.png)

Vemos un tema importante ...

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f8917c5c-c706-4d2f-ab07-a8d504931347/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f8917c5c-c706-4d2f-ab07-a8d504931347/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ba97cee2-b4fa-42f7-9e37-1a8defd03093/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ba97cee2-b4fa-42f7-9e37-1a8defd03093/Untitled.png)

Para configurar el botón, le añadimos como atributo `otherProps`, para que estos, se adhieran al componente `<button>` tal cuál, es decir, como `type="submit" value="Submit"`

Diferente es el caso de `props.children`, este es un PROP particular que se basa en recoger como PROP lo que la etiqueta del componente contenga entre su contenido. Se explica mejor

```jsx
const Picture = (props) => {
  return (
    <div>
      <img src={props.src} />
      {props.children}
    </div>
  );
};
```

```jsx
//App.js
render () {
  return (
    <div className='container'>
      <Picture key={picture.id} src={picture.src}>
          //what is placed here is passed as props.children
      </Picture>
    </div>
  )
}
```

Se explica bien en estos artículos:

[A quick intro to React's props.children](https://codeburst.io/a-quick-intro-to-reacts-props-children-cb3d2fce4891)

[Composición vs. herencia - React](https://es.reactjs.org/docs/composition-vs-inheritance.html)

---

# Firebase + User Authentication

## Section overview

Hemos creado los formularios pero... ¿qué pasa con la funcionalidad?

Utilizaremos FIREBASE para manejar esto. Evidentemente NO vamos a memorizar ni a aprender cómo usar esta herramienta al detalle, ¡para eso tenemos la documentación!

[firebase](https://www.npmjs.com/package/firebase)

## Firebase Introduction

Utilizaremos FIREBASE como servidor para nuestra aplicación.

Podemos simplificar muchísimo lo que es un BACKEND para nuestra aplicación mediante el siguiente esquema:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68207dcc-512d-4775-83e5-14f6670bc518/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68207dcc-512d-4775-83e5-14f6670bc518/Untitled.png)

Gracias a FIREBASE podemos gestionar estas 3 patas que necesitaremos en nuestra app sin complicarnos mucho la vida con el backend.

## Note about Firebase version

_Hello everyone!_

_A crucial thing to note is that for the project we are building, the package version we just installed should be firebase 6.0.2. Since the creation of this course, firebase's javascript SDK library has updated and changed how a few of the objects look in the console. Have no worry, the concepts and patterns that you'll learn have not changed, but things may not look the same in the course when you `console.log`  the objects when using a newer version._

**\*I highly advise you to use the latest version of firebase! An older version like 6.0.2 may cause issues with newer versions of other packages we are using.** Everything about the api is the same as what you'll see throughout the course, it's just that newer versions of firebase have added extra properties on the objects, so what you'll see in your console.log versus what you'll see in the course will be different, but the properties you see in the course are indeed on the objects so everything will work exactly the same in the course! all the patterns you'll learn throughout this course will work the same!\*

## Adding a project to Firebase

Creamos un nuevo proyecto en FB con el nombre de **"crown-db"**

Utilizaremos FB en su versión gratuita, suficiente para lo que queremos llevar a cabo con la aplicación.

Creamos una nueva aplicación web:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2e2cc4da-d54f-4849-8ecb-5474b587458a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2e2cc4da-d54f-4849-8ecb-5474b587458a/Untitled.png)

Y nos quedamos con lo que nos interesa, la SDK de configuración:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aa3d7505-87e1-4f77-9535-fb302672489c/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aa3d7505-87e1-4f77-9535-fb302672489c/Untitled.png)

E, imprescindible, instalamos la librería de FIREBASE:

[firebase](https://www.npmjs.com/package/firebase)

## Note about Github

_In the upcoming lessons, we will be adding firebase to our React application. One thing to note is that we will be adding a config object that we get from firebase into our files, and in that config object is an API key. Typically it is good practice not to expose your API key publicly, but in the case of firebase, we have to do so because this is how firebase knows the application is ours! This is perfectly safe, and the intended purpose of this public API key. If you commit your code to Github, you may get a warning from GitGuardian having caught a google key, but GitGuardian has acknowledged that this is not an issue [here](https://twitter.com/search?q=firebase%20api%20key%20gitguardian&src=typd)!_

_How we secure our data is actually done with security rules in the firebase dashboard, but we will cover that in a later lesson! So please continue the course without worry :)_

## Google Sign In Authentication

Una vez instalada la librería de FIREBASE en el proyecto, vamos a configurarla

### Firebase base config

Creamos un fichero `firebase/firebase.utils.js` en el que insertaremos las credenciales dadas al iniciar la aplicación en FIREBASE y configuraremos los módulos que necesitamos:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5184a217-e87a-457e-b26f-752a134dae6b/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5184a217-e87a-457e-b26f-752a134dae6b/Untitled.png)

### Configuración módulos

Terminamos de configurar el archivo con la configuración que vamos a utilizar (principalmente el de _autenticación_ y _firestone_ [almacenamiento]):

```jsx
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyB5U5Ly9Hcz2ZuY3jkjlXIsdoEbgdD-HqU',
  authDomain: 'crwn-db-184a3.firebaseapp.com',
  projectId: 'crwn-db-184a3',
  storageBucket: 'crwn-db-184a3.appspot.com',
  messagingSenderId: '444987592494',
  appId: '1:444987592494:web:5f1793646db2add42934bf',
  measurementId: 'G-7TZLEQBTD0'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
```

### Autenticación google

Vamos al panel de control de FIREBASE y habilitamos el loggin mediante google en nuestra aplicación:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aaeeeac4-ba0a-4c2d-a453-969397fcd7bf/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/aaeeeac4-ba0a-4c2d-a453-969397fcd7bf/Untitled.png)

El correo de soporte es habitualmente el mismo que el de la cuenta de FIREBASE

Quedará entonces habilitado:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0ea8bfb9-2c6f-449d-ab3a-85a9fa553a5d/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0ea8bfb9-2c6f-449d-ab3a-85a9fa553a5d/Untitled.png)

Podemos ahora pues hacer la prueba dentro de la aplicación, dotando a uno de nuestros botones de la funcionalidad que al hacer click, abra la modal de autenticación de google:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3871686c-418f-4f5a-a8db-cf2b7634d79e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3871686c-418f-4f5a-a8db-cf2b7634d79e/Untitled.png)

### Manejo de usuarios autenticados

Ya podemos autenticar a los usuarios. De hecho en el panel de contro de FIREBASE podemos ver aquellos que han aceptado el login a través de la modal pero...

**_¿cómo hacemos que la aplicación sepa quién está y quién no está autenticado y le dé acceso acorde a este?_**

Utilizaremos el módulo `auth` que hemos exportado previamente en el archivo `firebase.utils.js`:

```jsx
export const auth = firebase.auth();
```

Uno de los TOP de **FIREBASE** es que maneja **observables** y que la autenticación de usuarios persiste activamente hasta que hacemos logout:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26241bef-dbf9-409a-9942-af1f89fadcc4/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/26241bef-dbf9-409a-9942-af1f89fadcc4/Untitled.png)

**Gracias a la subscripción que permite el método AUTH de FIREBASE, nos ahorramos el tener que estar haciendo FETCH en cada cambio de la aplicación, pues se maneja automáticamente.**

Al igual que hacemos con cualquier subscripción, debemos DES-SUSCRIBIRNOS al finalizar el ciclo de vida del componente:

```jsx
unSubscribeFromAuth = null;

  componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log('user', user);
    });
  }

  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
```

### Logout

Vamos ahora a darle al usuario la posibilidad de hacer LOGOUT mediante el botón que crearemos en el menú superior.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/672ae22f-ed00-4c63-acad-7ac41c28012f/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/672ae22f-ed00-4c63-acad-7ac41c28012f/Untitled.png)

Para esto, el componente `Header` debe ser consciente de cuándo un usuario está autenticado o no.

```jsx
<Header currentUser={this.state.currentUser}></Header>
```

Pasamos el STATE que controla la autenticación, al HEADER, para que pueda servirse de él y mostrar un contenido u otro en función del mismo.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/214d703b-41f3-400a-aa2c-37c2867df15e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/214d703b-41f3-400a-aa2c-37c2867df15e/Untitled.png)

**OJO, muy importante, a la hora de ejecutar una función con un evento HTML, ten en cuenta que no le puedes pasar la función directamente, necesitas ejecutar el CALLBACK:** `onClick = {() => auth.signOut()}`

## Firebase Firestore

Vamos a crear una base de datos para los archivos de nuestro proyecto.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1ecbf555-4f9e-4a32-87dd-cfbfc4066653/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1ecbf555-4f9e-4a32-87dd-cfbfc4066653/Untitled.png)

Una vez creada una BBDD en modo TEST, accedemos al menú de configuración.

Crearemos una BBDD NoSQL, esto es, como un JSON a lo bestia.

2 tipos de datos:

- _Collections_
- _Documents_

Creamos una de ejemplo:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dfe313d3-4f4a-407c-9900-c5b6522b2808/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/dfe313d3-4f4a-407c-9900-c5b6522b2808/Untitled.png)

Para poder acceder a los datos almacenados en la misma, lo haremos de la siguiente forma:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3335e367-1f72-4fb6-80be-8a7baa3002b4/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3335e367-1f72-4fb6-80be-8a7baa3002b4/Untitled.png)

## Storing user data in firebase

Nos estamos autenticando con los usuarios a través de google, pero estos no se están registrando en nuestra BBDD. Tenemos que buscar una forma de gestionarlo, y lo haremos a través de FIRESTORE

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/afea6f45-338c-4eb0-9c64-87e17a7a671e/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/afea6f45-338c-4eb0-9c64-87e17a7a671e/Untitled.png)

De todos los datos que nos devuelve el objeto de usuario al autenticarse, los que realmente puede que necesitemos son los campos como: _user, email, phone ...._ pero el más importante sin duda es el de `uid`, ya que es el identificador único de usuario (nos permitirá manejar permisos y personalizar contenido)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c74465d2-9ed1-4b76-a19c-c7806995d69f/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c74465d2-9ed1-4b76-a19c-c7806995d69f/Untitled.png)

Vamos a gestionar este "guardado" de usuarios desde la propia aplicación.

Crearemos una función que nos permita recoger el objeto que devuelve la autenticación y guardar las propiedades que consideremos oportunas en la BBDD.

### Firestore return

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/45b8361f-2e3b-4299-9627-7e07df0bb777/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/45b8361f-2e3b-4299-9627-7e07df0bb777/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8926df44-99ce-4f28-ad38-50731a2c59c7/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8926df44-99ce-4f28-ad38-50731a2c59c7/Untitled.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e26831e1-b79d-4715-882d-d2b9d30409d4/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e26831e1-b79d-4715-882d-d2b9d30409d4/Untitled.png)

Creamos la función encargada del almacenamiento de usuario entre las utilidades del archivo `firebase.utils.js`:

```jsx
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  console.log(snapShot);

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    // Si el usuario no existe, vamos a crearlo
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  } else {
    console.log('user already exists');
  }

  return userRef;
};
```

Y la ejecutamos al iniciar la aplicación en `App.js`, pasándole el usuario logueado:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/63a2dd3d-0365-4df4-bacf-5485b0252751/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/63a2dd3d-0365-4df4-bacf-5485b0252751/Untitled.png)

SI nos fijamos en la fución, estamos diciéndo que, si el usuario no existe, cree un nuevo valor en la dirección de memoria `users/{identificadorUsuario`

Llevamos a cabo el flujo y verificamos en FIREBASE que el usuario ha sido creado:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e0ec01a-8e5e-4af7-8a63-91ff3df22fe7/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9e0ec01a-8e5e-4af7-8a63-91ff3df22fe7/Untitled.png)

## Note: firestore update regarding permissions

There has been a recent update in Firebase's database for new users where by default, there is a permission rule that disables reading from the database after 30 days! If this is not changed, some of you may start to see an error in your application saying `FirebaseError: Missing or insufficient permissions.`

This can be quickly fixed by navigating to the rules tab in the database of your firestore console.

![https://img-b.udemycdn.com/redactor/raw/2020-01-23_12-59-29-e7d47ff716daba6fa334cbe0f6fea0f5.png?secure=Htt8wmXBxz6hyt3wbzDusA%3D%3D%2C1610091997](https://img-b.udemycdn.com/redactor/raw/2020-01-23_12-59-29-e7d47ff716daba6fa334cbe0f6fea0f5.png?secure=Htt8wmXBxz6hyt3wbzDusA%3D%3D%2C1610091997)

You will land on this page, which manages the permissions for your database. We will cover this section in greater depth later in the course.

The text you can edit, and the part to focus on is line 4 and 5:

![https://img-b.udemycdn.com/redactor/raw/2020-01-23_13-06-17-e3af9771c13c0032b3a61c64b85ea375.png?secure=YkuuLxT9Qwk-Ug7eGEdC3w%3D%3D%2C1610091997](https://img-b.udemycdn.com/redactor/raw/2020-01-23_13-06-17-e3af9771c13c0032b3a61c64b85ea375.png?secure=YkuuLxT9Qwk-Ug7eGEdC3w%3D%3D%2C1610091997)

If you do not see `request.time < timestamp.date(year, month, day);` on line 5, you don't need to worry about this. If you do, just remove it, and replace the `: if` with a `;` on line 4.

Your final result should look like:

![https://img-b.udemycdn.com/redactor/raw/2020-01-23_13-07-01-6c96157500d57e0b3ea02df4027673a4.png?secure=QNM0Vlg9Qbl1Edc3hjdHqg%3D%3D%2C1610091997](https://img-b.udemycdn.com/redactor/raw/2020-01-23_13-07-01-6c96157500d57e0b3ea02df4027673a4.png?secure=QNM0Vlg9Qbl1Edc3hjdHqg%3D%3D%2C1610091997)

With that you should be good to continue on!

## Storing user data in our APP!!

Hemos autenticado al usuario, lo hemos almacenado en la BBDD de FIREBASE y... ¡nos hemos cargado el estado del componente que era el que lo gestionaba hasta ahora!

Tenemos pues que volver a hacer "consciente" a la aplicación de que el usuario se ha identificado correctamente.

Obtenemos los datos del usuario autenticado, al iniciarse la aplicación en `App.js`

```jsx
componentDidMount() {
    this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          console.log('snapShot: ', snapShot.data());

        })
      }
    });
  }
```

Esto es lo que devuelve la consola:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/32d3cff9-60c6-432b-850a-e6f4b4523e52/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/32d3cff9-60c6-432b-850a-e6f4b4523e52/Untitled.png)

Sabiendo esto, vamos a almacenar los datos del documento dentro del estado del componente:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4498971-6c66-45ae-9622-63fd61a7e348/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4498971-6c66-45ae-9622-63fd61a7e348/Untitled.png)

## Sign up component

Creamos el componente de registro, utilizando los componentes previos como `FormInput` y `CustomButton`

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/918e65d5-d782-4ed8-89d9-470fe384fd5a/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/918e65d5-d782-4ed8-89d9-470fe384fd5a/Untitled.png)

Vuelvo a destacar el modo en el que "almacena" en el state los valores del formulario:

```jsx
handleChange = (event) => {
  const { name, value } = event.target;

  this.setState({ [name]: value });
};
```

Para poder realizar el inicio de sesión con email y pass, tenemos que habilitarlo en el menú de configuración de FIREBASE:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7d1363d7-78a1-4c77-891e-225e32a0c900/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7d1363d7-78a1-4c77-891e-225e32a0c900/Untitled.png)

## Sign up- Sign in with email and pass

Manejamos ambos eventos de forma asíncrona (`async-await`), y usamos el método `auth` de `firebase.utils.js`

### Sign up

En el registro, no sólo pasamos el registro sino que también guardamos al usuario en la BBDD

```jsx
handleSubmit = async (event) => {
  event.preventDefault();

  const { displayName, email, password, confirmPassword } = this.state;

  if (password !== confirmPassword) {
    alert('Password must be equal');
    return;
  }

  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    await createUserProfileDocument(user, { displayName });

    this.setState({
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    });
  } catch (error) {
    console.error(error);
  }
};
```

### Sign in

```jsx
handleSubmit = async (event) => {
  event.preventDefault();

  const { email, password } = this.state;

  try {
    await auth.signInWithEmailAndPassword(email, password);
    this.setState({ email: '', password: '' });
  } catch (error) {
    console.log(error);
  }
};
```

## Note to Custon Button

One quick note due to the frequency of this question popping up! If you see that your sign in with google button causes the email and password fields to trigger asking the user to fill these in, simply add the property `type="button"` to our google sign in button! The reason this happens is because any buttons inside of a form element will cause the form to treat the button as `type="submit"` by default. We don't want that for our google sign in button though, so just make sure to add `type="button"` to our google sign in CustomButton.

Your code might look like:

```html
<CustomButton type="button" onClick="{signInWithGoogle}" isGoogleSignIn> Sign in with Google </CustomButton>
```

## Section review

Recapitulemos.

Cuando el usuario llega por primera vez a nuestra aplicación y se da de alta, sus datos son almacenados en la base de datos que tenemos configurada para tal fin en FIREBASE.

Si el usuario ya está dado de alta y quiere acceder a la aplicación, este dispone de un LOGIN para ello, mediante el cual contactará con FIREBASE. Si el usuario existe, se almacenará el estado de este en un componente de estado de la aplicación

---

# Redux 1

## Section overview

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ad09324f-191f-411f-a5f1-6e83309cd2a8/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ad09324f-191f-411f-a5f1-6e83309cd2a8/Untitled.png)

Tengamos en cuenta algo que hemos mencionado antes, **REACT**, es una librería de UI, por lo que según la aplicación va creciendo, manejar el estado se vuelve cada vez más complejo.

Usaremos **REDUX** para manejar los estados de una forma global y más sencilla (ya que es una librería creada explícitamente para este fin).

Nos vamos a centrar principalmente en este concepto:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fbab052e-0f52-4c15-b3ec-785cd2107b96/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/fbab052e-0f52-4c15-b3ec-785cd2107b96/Untitled.png)

## Redux introduction

[https://indra.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15160164#labs](https://indra.udemy.com/course/complete-react-developer-zero-to-mastery/learn/lecture/15160164#labs)
