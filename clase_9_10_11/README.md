
# React Query - 08.CacheOptions 

En esta rama se realiza un cambio en la estructura de la aplicación, se agregan las rutas y las páginas. Además de empezar a trabajar con las opciones de Cache.



#### Archivos modificados 

| Archivo    | Descripción                |
| :--------|:------------------------- |
| `App.js` | Eliminación de la lógica de useQuery + importación del Componente Routes |


#### Archivos agregados

| Archivo    | Descripción                |
| :--------|:------------------------- |
| `routes/Routes.js` | Configuración de las rutas con React Router + Componente Layout  |
| `components/layout/Layout.js` | Layout que encierra a las páginas de nuestra aplicación + Componente Navbar  |
| `components/navbar/Navbar.js` | UI del Navbar + Component LinkItem |
| `components/navbar/NavbarStyles.js` | Estilos del componente Navbar | 
| `components/linkItem/LinkItem.js` | Componente NavLink de React Router dinámico |
| `components/linkItem/LinkItemStyles.js` | Estilos del componente LinkItem |
| `pages/bands/Bands.js` | UI Básica de la página bands + el useQuery del App.js previo + opciones de Cache (cacheTime) |
| `pages/bands/BandsStyles.js` | Estilos para la página Bands  |
| `pages/home/Home.js` | UI Básica del home + Componente ListOfTechnologies |
| `pages/home/HomeStyles.js` | Estilos para la página Home  |
| `components/listOfTechnologies/ListOfTechnologies.js` | Componente para el Home  |
| `components/listOfTechnologies/ListOfTechnologiesStyles.js` | Estilos para el componente ListOfTechnologies  |
| `media/queries.js` | Media Queries para la aplicación  | 


#### Archivos eliminados 

| Archivo    | Descripción                |
| :--------|:------------------------- |
| `AppStyles.js` | ❌ |
