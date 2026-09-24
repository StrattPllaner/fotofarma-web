# Sitio de FotoFarma

Sitio público de **FotoFarma**, la app que convierte la foto de una receta médica en un
calendario de tomas con recordatorios. Tres páginas:

- `index.html` — todo el producto en una sola página, por secciones numeradas: estado, problema,
  cómo funciona, una receta de principio a fin, las seis funciones, pantallas y accesibilidad,
  tecnología, privacidad, preguntas y bitácora.
- `plan-de-negocios.html` — el plan en dieciséis secciones, con índice lateral y botón para
  imprimir o guardar en PDF.
- `terminos.html` — los términos y el aviso de privacidad, el mismo texto que la app pide aceptar.

Una sola tipografía (Instrument Sans) y los colores de la marca —aguamarina y lila— en el letrero
y en los acentos.

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
