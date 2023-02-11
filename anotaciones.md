# Apuntes

## Especificidad

Al momento de agregar estilos a elementos HTML, algunos pueden prevalecer por encima de otros.
Esto ocurre por la **especificidad**, esto es usado por los motores de navegación al momento de elegir
cual estilo debe ser plasmado en la pantalla al momento en que la página cargue.

Hay 6 tipos de especifidad:

* !important -> Se colocan en el archivo css (10000)

* Estilos en línea -> Estos se colocan como atributos en la etiqueta. (1000)

* #id (100)

* Clases, atributos y pseudoclases (10)

* Elementos y pseudoelementos (1)

* Selector universal (0)

## Display  

* Aquellos elementos que se son **block** abarcan toda la pantalla,los otros elementos se situan debajo del mismo y se pueden usar todas las propiedades del modelo de caja.

* Mientras que los tipos **inline** son aquellos que su espacio se limita al contenido o la información que lo 
contiene, no les afecta el margin-top ni el margin-bottom, ni tampoco el width ni el height.

* Los elementos **inline-block** son se trabajan como un elemento **block**, el cual se puede dimensionar normalmente tanto en height y width, igualmente con el modelo de caja. Además de que cuenta con las cualidades de **inline**, por lo que los otros elementos coloquemos, irán al lado de este.

## Border box

Se trata de que las dimensiones propuestas en el elementos, no sean afectadas por el padding, ya que este agregaría más pixeles o volvería más grande dicho elemento.

## Position

Tipos de posicionamiento:

1. Static -> Es el posicionamiento por defecto
2. Sticky -> Este se queda posicionado en una zona y no afecta al espaciado de los otros elementos
3. Fixed -> Este se queda posicionado en una zona y afecta al espaciado de los otros elementos
4. Relative -> Sirve como ancla para aquellos elementos hijos que se encuentren con un position: absolute.
5. Absolute -> No sigue el flujo normal de la página, se posiciona con el contenedor padre más próximo.
