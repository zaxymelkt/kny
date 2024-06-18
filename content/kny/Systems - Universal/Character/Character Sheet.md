---
title: Character Sheet
draft: false
tags:
---

# Overview
A Character Sheet displays a player's OC, which is used to join [[Progression#Events|Events]]. Creating an oc is a fairly simple process, follow along to get started on creating the OC.

## OC Creation
In the ``< bot-commands >`` channel or ``< oc-submission >`` channel type the following command:

- ``/character init <last name> <first name>``

your character sheet will be initialised. You will be able to easily view that sheet in the channel ``< {last name}-{firstname} >`` under the ``[ Character Sheet ]`` category. 

Input the following command to add/edit the character's personality: 

- ``/character edit personality <paragraph 1> [paragraph 2] [paragraph 3]`` 

Input the following command to add/edit the character's other properties:

- ``/character edit <property> [args]``

> [!hint] < property >
> Other examples of ``< property >`` is ``image-claim``, ``height``, ``weight``
> 

---
### Stat Point Allocation
In the ``< bot-commands >`` channel or ``< {last name}-{firstname} >`` channel type the following command to view your current [[Progression#Stat Points|Stat Point]] investment, points able to be invested, as well as invest those stats: 

- ``/character statistics --stats``

If you want to view another's stats input:

- ``/character inquiry <discord user> [args]``

in ``[args]`` by putting ``--stats`` it will only display their stat investment. 

---
## Talent Point Allocation
In the ``< bot-commands >`` channel or ``< {last name}-{firstname} >`` channel type the following command to view your current [[Progression#Talent Points|Talent Point]] investment, points able to be invested, as well as invest those stats: 

- ``/character statistics --tp``

If you want to view another's stats input:

- ``/character inquiry <discord user> [args]``

in ``[args]`` by putting ``--tp`` it will only display their talent point investment. 
