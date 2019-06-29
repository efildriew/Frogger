# Fogger

## Description

Un cuadrado verde avanzará por una carretera con obstaculos moviles e intentará llegar al otro lado.

## MVP (DOM - CANVAS)

Proyecto en Canvas

Hacer:

- Que el cuadrado verde se mueva a través del grid y llegue al otro lado
- Que aparezcan en scroll diferentes clases de obstaculos a izquierda y derecha
- Que al colisionar con un obstaculo se pierda un intento (vidas)
  . Que al superar las filas de obstaculos y llegue a meta finalice el juego

## Backlog

- Definir los sprites de la rana y de los obstaculos
- Añadir una parte después de la carretera (un río), donde la rana tiene que cruzar por encima de los obstaculos
- Cambiar el final del juego, en vez de solamente cruzar, hay que cruzar y ponerse en un sitio concreto
- Añadir temporizador
- Añadir puntuación
- Añadir ciertos objetos random que hacen aumentar la puntuación
- Conseguir que los obstaculos del río se "hundan" y refloten (tortugas)
- Cambiar nivel de dificultad, quitando vidas y tiempo
  .
  .
  .
- Añadir Easter Egg, el mismo juego pero con todos los sprites cambiados.

## Data structure

Clases:

- Rana:

  - A donde mira
  - Avanzar

- Coches
  - Dirección
  - Velocidad
  - Frecuencia

## States y States Transitions

- splashScreen: Pantalla de presentación con el título del juego y un "Insert Coin".
- gameScreen: Pantalla fija. De abajo a arriba veremos: punto inicial de la rana, carretera, punto final.
- gameoverScreen: Encima de la gameScreen, ocupando aprox el 50% de la pantalla en el centro, añadir "game over".
- winScreen: igual que game over, pero con "you win".

## Task

Trello!

## Links

### Trello

[Link url](https://trello.com/b/QqQdFCYE/proyecto-modulo-1)

### Git

URls for the project repo and deploy
[Link Repo](http://github.com)
[Link Deploy](http://github.com)

### Slides

URls for the project presentation (slides)
[Link Slides.com](https://slides.com/marcvalles/frogger#/)
