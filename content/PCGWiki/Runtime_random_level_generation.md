[runtime-random-level-generation](http://pcg.wikidot.com/pcg-algorithm:runtime-random-level-generation)

* originated from rogue (random placed rooms and corridors)
* provides infinite game space, constrained by generation rules

connectivity types:

* set of stairs, doors, elevators
* victory conditions
* no explicit connection between levels, but accessable through hub/menu
* connected seamlessly

Connectivity within a level:

* all parts needs to be connected
  
  * or a game mechanic supports removing walls etc.
* distinction between persistent and non-persistent levels

* useful for storing huge worlds in a limited amount of storage

* useful for saving work designing the level

Connectivity Between levels:
Graph representation
levels (nodes) | connection (edges)

* Sequential: all exits from the current level lead to one or two adjacent levels.
* Tree: a Software engineering tree.. look it up if you don't know

Spatial layout of multiple levels:

* grid
* may conform to Euclidean space
* can be non-euclidean
* 
