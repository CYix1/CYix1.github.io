online link: [chapter01.pdf](https://www.pcgbook.com/chapter01.pdf)

---

# Definition
note: mostly [pcgbook]

**Procedual Content Generation (PCG)**:
PCG is the algorithmic creation of game content with limited or indirect user input. In other words, PCG refers to computer software
that can create game content on its own, or together with one or many human players
or designers.  [pcgbook]

**Content**:
includes ... 
- levels
- maps
- game rules
- textures
- stories
- items
- quests
- music
- weapons
- vehicles
- characters
- etc.

NPC AI does not count towards content according to [pcgbook]

**Games** according to [pcgbook]
Includes...
- video games
- computer games
- board games
- card games
- puzzles
- etc.

> [!tip] **IMPORTANT**
> It is important that the content generation system takes the design, affordances and constraints of the game that it is being generated for into account.

> [!example] Examples of PCG
> - A software Tool to create dungeons for *The Legend of Zelda*, without human input
> - A System that creates weapons in a space shooter, according to the collective action of the players 
> - Generating complete, playable and balanced board games
> - game engine middleware that rapidly populates a game world with vegetation
> - a graphical design tool that lets a user design maps for a strategy game, while
continuously evaluating the designed map for its gameplay properties and suggesting
improvements to the map to make it better balanced and more interesting.

> [!example] Examples of things not consideres PCG [pcgbook]
> - a map editor, user places/removes items, no generation of its own
> -  an artifical player for a board game
> - a game engine capable of integrating automatically generated vegetation


# Why use PCG?
excursion to some debate about pcg and artists? #TODO 
- "removes" the need to have human designers or artist to generate that content
	- DOES NOT THREATENING JOBS 
- augment the creativity of individual human creators
- enable completely new types of games
- generate content tailored to the player

## Games that use PCG
- Elite
- Rogue 
- Spelunky
- Dwarf Fortress
- Diablo
- Spore
- Civilization IV
- Minecraft
- Tiny wings
- No Man Sky
- etc. #TODO ?
## Desirable Properties
- *Speed*: requirements for speed vary wildly, milliseconds to months
- *Reliability*: capable of guaranteeing that the content they generate satisfies some given quality citeria.
- *Controllability*: content generators could need some control, by human or an algorithm, specify some aspects of the content to be generated.
	- Many possible dimensions to control!
- *Expressivity and diversity*: generate a diverse set of content
	- Extreme of non-expressivity: level "generator", same level, one stone changes color
	- Extreme of expressivity: "level" generator that assembles senseless or unplayable levels
>[!note]
>Measuring expressivity is a non-trivial topic, designing level generators that generate diverse content without compromising on quality is even less trivial.
- *Creativity and believability*: content to not look like it has been designed by a procedural content generator

## Taxonomie of PCG

| Taxonomie                         | Description                                                                  |
| --------------------------------- | ---------------------------------------------------------------------------- |
| Online                            | Generate content online, as the player is playing the game                   |
| Offline                           | During the development of the game or before the start of a game session     |
| Necessary                         | Required for the completion of a level, always be correct e.g level in mario |
| Optional                          | Optional content, auxiliary rewards                                          |
| Degree and dimensions of control: | Seeds, set of parameters                                                     |
| Generic                           | content generation  without taking player behaviour into account             |
| Adaptive                          | content generation based on analysed player behaviour                        |
| Stochastic                        | recreating the same game is usually not possible                             |
| Deterministic                     | regeneration of the same content given the same start point is possible      |
| Constructive                      | content is generated in one pass                                             |
| Generate-and-test                 | generate and test until satisfactory solution                                |
| Automatic generation              | limited input from game designer                                             |
| Mixed-authorship                  | human designer or player cooperates with the algorithm to generate           |
table add another column with example? #TODO 

## Metaphors for PCG #TODO 
- Tools
- Materials
- Designers
- Domain experts
## Types of PCG

- [[02_Search_based_PCG]]
- [[03_Constructive_Methods]] 
- [[04_Fractal_and_noise]] 
- [[05_Grammars]] 
- [[06_Rules_and_mechanics]] 
- [[07_Planning_with_applications_to_quests_and_story]] 
- [[08_Answer_Set_programming_(ASP)]] 
- [[09_Representation_ for_search_based_methods]]
- [[10_The_experience_driven_perspective]] 
- [[11_Mixed_initiative_content_creation]] 
- [[12_Evaluating_content_generators]] 



| Method                         | Power/Advantage                | Peril/Disadvantage                   |
| ------------------------------ | ------------------------------ | ------------------------------------ |
| Constructive                   | simple to author customization | repetitiveness in content ad hoc     |
| constraint-based               | design guarantees declarative  | translating to constraints debugging |
| Optimization/ search based PCG | generality emergence           | fitness function speed               |
| Grammars                       | emergence, easy to author      | prone to over- and under- generation |

