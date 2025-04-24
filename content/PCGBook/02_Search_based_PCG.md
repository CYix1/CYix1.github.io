online link: [chapter02.pdf](https://www.pcgbook.com/chapter02.pdf)

---

Search-based Procedural content generation is the use of evolutionary computation and similar methods to generate game content.


Represent content so it will become searchable => create evaluation function.
# Definitions

A Search-based approach to solving a content generation problem consists of following core components:

- **A search algorithm** is the "engine" of a Search-based method. Often a relatively simple evolutionary algorithm works well enough. Sometimes more sophisticated (e.g taking constrains into account) or specialized algorithms are better

- **A content representation** of artefacts you want to create, e.g levels, quests or winged kittens. The content representation defines and limits what content can be generated and determines whether effective search is possible.

- **One or more evaluation Functions**. An evaluation function is a function from an artefacts to a number indicating the quality of the artefact. E.g the playability of a level, the intricacy of a quest or the aesthetic appeal of a winged kitten. (the hardest part)

# Evolutionary search algorithms

- inspired by darwinian evolution

- population of individuals (condidate solutions) are evaluated in each generation

- the fittest(highest evaulated) individual gets the chance to reproduce (lowest ones are removed)

- A generation can be divided into selection and reproduction phase.

- Reproduction with recombination or crossover of characteristics Or small random changes (mutation)

- Genetic algorithms rely more on recombination and less on mutation.

- Using multiple evaluation functions, since it is hard to describe every quality inside one number

- **Single objective evolutionary algorithm**: evaluation algorithm could beccombines as a weighted usm.

- **Multi objective evolutionary algorithm**, optimized for several objectives at the same time.

Include evolution strategy example #TODO

  

## Other types of search algorithms

- exhaustive search algorithm, brute force through all possible configutations.

- random serach

- solver-based approaches, see [[08_Answer_Set_programming_(ASP)]]

  

# Content representation

- The solutions in the generation space are usually encoded as genotypes. E.g instructions for creating a Game level

- Genotypes are later converted into phenotypes, the actual entities of the game. E.g actual game level

> [!Example] Example representations of a level in Super Mario Bros
> - Directly, as a level map (each genotype equals a "block" in phenotype )
> - more indirectly, as a list of positions and properties of different entities
> - even more indirectly, as a repository of different reusable patters and a list of how they are distributed across the level map
> - Very indirectly, as a list of desirable properties such as number of gaps, enemies, coins, width of gaps
> - Most indirectly, as a random number seed

 - The larger the search space, the harder it is (in general) to find a certain solution!
 - high locality, small change in genotype results in a small change to the phenotype and fitness value.
 - idk what they talked about with expressive range etc.

# Evaluation Functions
- function which assigns a fitness/evaluation value to each candidate.
- no good evaluation function => "no good content"
- three distinctions of evaluation functions: **direct**, **simulation-based**, and **interactive**

## Direct evaluation functions
- mapping between generated content to a content quality value
- fast and relatively easy to implement but hard to devise
- **Theory-driven function**
	- guided by intuition and/or qualitative theories of player experience.
- **Data-driven function**
	- based on quantitative measures of player experience. 
	- approximation of mapping through questionnaires or physiological measurements
Examples missing #TODO
## Simulation-based evaluation functions
- Use of AI agents to play and estimate the generated contents quality
- **static function**
	- Assumption of maintaining agent behaviour during gamepla
- **dynamic function**
	- Agent that adapts during gameplay
Examples missing #TODO


## Interactive evaluation functions
- evaluation based on interaction with a human.
- **implicit** and **explicit** collection of data 
- explicit is more reliatble and accurate
- implicit is more noisy and based on assumptions.
Examples missing #TODO 
  
  
  

# Example Games
## StarCraft
**Representation**:
- The maps are represented as vectors of real numbers
- Genotype-to phenotype process: intepreted directly or further processed 
- results in a matrix which can be automatically converted into a Starcraft map
**Evaluation**:
- Different evaluation functions mostly based on calculations of free space and shortest paths
- functions adress base placement, resource placement and paths between bases
- E.g. enough space to grow a base, equal access to nearby resources or choke points
**Algorithm**:
- Uses SMS-EMOA (a state of the art multiobjective evolutionary algorithm)
- SMS-EMOA used to evolve combinations of two to three objectives.
- partial conflicts between several objectives were found
- => impossible to maximize all objectives 
- but interesting and reasonably fair maps were found
## Racing tracks
**Representation**: 
- tracks are represented as vectors of real numbers
- interpreted as control points of splines
**Evaluation**:
- track personalization based on modelling the playing style of that player.
- => teaching a neural network to play like that player
- candidate track is evaluatied in a simulation-based manner
- measurements of appropriate challenge and diversity for the player
**Algorithm**:
- Used cascading elitism (based on μ +λ ES)
## Board game rules
**Representation**:
- board layouts and rules are represented as strings
**Evaluation**:
- using different values for a weighted sum
- E.g how long was the game, did it end in a draw, how many rules were used
**Algorithm**:
- A relatively standard genetic algorithm was used.
  
## Galactic Arms Race
**Representation**: many neural networds, which increases its complexity over generations
**Evaluation**: fitness value assigned to each weapon, on the usage of the weapon. the more the weapon is played, the more probable the weapon will evolve.
**Algorithm**: collective, distributed evolutionary algorithm
# Further resources