# Zillow Clone Actualizacion

Un clon de Zillow hecho en React con Vite hace dos años. Lo actualize para aplicarle arquitectura frontend — mapas, autenticación, filtros, rutas, todo el paquete pero mucho mejor que anterior.

## Que tiene el proyecto ?

- **Mapa de Google Maps** en `/buy` y `/rent` con marcadores de colores según el tipo de propiedad (azul para venta, azul oscuro para renta, gris para vendidas). Le das click a un marcador y te muestra una card con la info de la casa, y si le das click a esa card te abre el detalle completo.

- **Búsqueda funcional** desde el home — escribes algo y presionas Enter, si mencionas "rent" o "apartment" te manda a `/rent`, si no te manda a `/buy` con el filtro aplicado automáticamente.

- **Filtros** de camas, baños, tipo de propiedad y orden de precio en las páginas de compra y renta.

- **Detalle de propiedad** con galería de fotos, tabs de overview / detalles / escuelas / mercado, calculadora de hipoteca estimada y botones de contacto.

- **Portafolio de agentes** — en `/agentFinder` cada agente tiene un botón "View portfolio" que abre un modal con su bio completa, estadísticas, y las propiedades que tiene en venta y renta.

- **Manage Rentals** en `/manageRentals` — un dashboard para propietarios con tabs de propiedades, pagos, contratos y solicitudes de mantenimiento. Si no estás logueado te pide que inicies sesión primero.

- **Advertise** en `/advertise` — página para agentes con planes de precio, testimonios y formulario de contacto.

- **Login / Signup** con modal, Google Sign-In, validación de formulario y todo. Está conectado a Firebase .

- **Casas guardadas** — el corazón en cada card guarda la propiedad en este es necesario estar logeado para darle el corazon a la card.

- **Totalmente responsivo** — funciona en móvil, tablet y desktop.

## Las Ruta y Que hace

`/` Pagina de inicio con buscador, carruseles y estadísticas del mercado
`/buy` Propiedades en venta con mapa y lista
`/rent` Propiedades en renta con mapa y lista
`/sell` Opciones para vender tu casa
`/homeLoans` Calculadora de hipoteca, tabla de tasas y pre-calificación
`/agentFinder` Directorio de agentes con portafolios
`/manageRentals` Dashboard de gestión de rentas (requiere login)
`/advertise` Planes de publicidad para agentes
`/saved` Casas que guardaste

---

## Stack

- React 18 + Vite
- React Router 6
- Tailwind CSS v4
- Google Maps (`@react-google-maps/api`)
- Firebase Auth
- React Icons
