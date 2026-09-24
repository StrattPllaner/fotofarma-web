# Sitio de FotoFarma

Sitio público de **FotoFarma**, la app que convierte la foto de una receta médica en un
calendario de tomas con recordatorios. Cinco páginas:

- `index.html` — inicio: solo lo principal (qué es, el problema, los tres pasos y un resumen de las funciones).
- `funciones.html` — cada función a detalle, con capturas reales, accesibilidad y ficha técnica.
- `privacidad.html` — dónde viven los datos, qué permisos pide la app y lo que la app no es.
- `preguntas.html` — preguntas frecuentes, agrupadas en tres bloques.
- `plan-de-negocios.html` — el plan completo en dieciséis secciones, con índice lateral y
  botón para imprimir o guardar en PDF.

Las páginas comparten barra y pie; si cambias uno, cámbialo en los cinco archivos.

## Cómo está hecho

HTML y CSS a mano, sin dependencias ni paso de compilación. Tipografía Instrument Sans e
Instrument Serif (Google Fonts). Las capturas de `assets/img/` son pantallas reales de la app.

Para verlo en local:

```bash
python3 -m http.server 5177
```

## Antes de presentarlo

En el plan de negocios hay texto resaltado en amarillo (`.editable`) con los datos del equipo:
sustitúyelo por los nombres reales. Las cifras de mercado son de referencia pública y las
proyecciones son estimaciones propias; conviene verificarlas contra la edición más reciente
de cada fuente.

## Enlaces

- App: https://strattpllaner.github.io/Fotofarma2/
- Código de la app: https://github.com/StrattPllaner/Fotofarma2
