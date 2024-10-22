# Weather App

## Descripción del Proyecto

La **Weather App** es una aplicación diseñada para proporcionar información meteorológica actualizada y precisa a los usuarios. A través de una interfaz intuitiva y amigable, la app ofrece datos sobre la temperatura, humedad, pronóstico a corto y largo plazo, y alertas meteorológicas para diversas ubicaciones en todo el mundo. Utilizando **WeatherAPI** para obtener datos meteorológicos en tiempo real, la aplicación se asegurará de que los usuarios tengan acceso a información relevante sobre el clima en su área y en cualquier otro lugar que deseen consultar.

## Problemática

En la actualidad, muchas personas dependen de información meteorológica precisa para planificar sus actividades diarias. Sin embargo, a menudo enfrentan los siguientes problemas:

1. **Inexactitud de los Datos:** Las aplicaciones actuales pueden ofrecer pronósticos poco precisos o desactualizados, lo que puede llevar a decisiones incorrectas, como salir sin abrigo en un día lluvioso.
2. **Interfaz Confusa:** Algunas aplicaciones meteorológicas presentan información de manera compleja y no intuitiva, dificultando que los usuarios encuentren rápidamente la información que buscan.
3. **Falta de Personalización:** Muchas aplicaciones no permiten a los usuarios configurar alertas o seguir el clima en ubicaciones específicas que les interesan, lo que limita su utilidad.

## Características Principales

1. **Interfaz de Usuario Intuitiva:** La aplicación tiene un diseño limpio y fácil de usar, con información claramente presentada sobre el clima actual y pronósticos futuros.
2. **Datos en Tiempo Real:** Utilizando **WeatherAPI**, la app proporciona actualizaciones instantáneas sobre condiciones climáticas, temperatura y precipitaciones.
3. **Búsqueda de Ubicaciones:** Los usuarios pueden buscar manualmente ubicaciones específicas para consultar la información meteorológica de cualquier lugar del mundo.
4. **Pronóstico Extendido:** Los usuarios pueden acceder a pronósticos a corto y largo plazo (7-14 días) para planificar actividades futuras.
5. **Alertas Personalizables:** Los usuarios pueden configurar alertas para condiciones meteorológicas severas, como tormentas o altas temperaturas, asegurando que siempre estén informados.
6. **Información Histórica:** La app ofrece datos históricos sobre el clima, permitiendo a los usuarios consultar condiciones pasadas para análisis o referencia.

## Tecnologías y Herramientas

- **React.js** para la interfaz interactiva.
- **React Router** para la navegación entre vistas.
- **Chart.js** para la visualización de datos en gráficos.
- **Axios** para las solicitudes HTTP.
- **Tailwind CSS** para el diseño.
- **WeatherAPI** para la obtención de datos climáticos en tiempo real.

## Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/Hendricksoncala/weather-app.git
cd weather-app
npm install
```

Crear un archivo .env
```bash
VITE_API_KEY=la_api_key
VITE_BASE_URL=https://api.weatherapi.com/v1
```

y por ultimo 
```bash
npm run dev
```


## Authors

- [@](https://www.github.com/Hendricksoncala) Hendrickson Cala

