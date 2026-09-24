# Sitio de FotoFarma

Sitio público de **FotoFarma**, la app que convierte la foto de una receta médica en un
calendario de tomas con recordatorios. Dos páginas:

- `index.html` — el producto: qué hace, cómo funciona, funciones a fondo, privacidad, ficha técnica y preguntas.
- `plan-de-negocios.html` — el plan de negocios completo: mercado, competencia, modelo de ingresos,
  economía unitaria, proyección a tres años, métricas, riesgos, impacto, hoja de ruta y petición de capital.
  Trae botón para imprimir o guardar en PDF.

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
