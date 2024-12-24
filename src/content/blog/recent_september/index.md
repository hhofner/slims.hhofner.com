---
title: Recent (September)
description: Stuff
date: 2022-09-13
tags: [personal recent]
---

## Link-a-roo
Here are some links that I found cool/interesting:

- https://learngitbranching.js.org/ : interactive and 
  visual way of learning Git. Much easier to approach than 
  git's documentation.
- https://100.atnfu.me : from the legend himself, Anthony Fu's 
  100 day challenge of making fun, cool and sometimes interactive 
  visuals.
- https://withblue.ink/2020/05/17/how-and-why-to-sign-git-commits.html : nice explanation of how & why you should sign your git commits.
- https://andybrewer.github.io/mvp/ : a plug & play stylesheet. No classes!
- https://alexanderell.is/posts/websockets-from-scratch/ : "writing a websocket server from scratch". I dream that I someday have the time and patience to write one myself in Zig.

## MATH

This is a trivial topic for many, but let's say you want to "map" 
the range 0 to 1500, to a range of -1 to 1. How would you do that?
Let's make it a bit more "interesting", but let's say you don't want 
a linear mapping but rather something more smooth. 

This is a long winded way of saying that I truly appreciate 
simple calculus mathematics. The above can be done with a sigmoid 
function. Again, a bit trivial, but at times it seems like magic.

Here's an example of when you might want to use a sigmoid function.
Let's say you want to map the coordinates of your mouse to some sort
of element transform or value. Often these are not as big as the 
value of the mouses' x position (which can be in the thousands). 
Using a simple function like:

```javascript
  function sigmoid(z) {
    return (5 / (1 + Math.exp((z-750)/50))) - 1;
  }
```

Would allow you essesntially transform the mouses x-coordinate (or y)
values to something more suitable for HTML/CSS properties, and not
in a linear pattern that can sometimes be disorienting with 
animations.

## Git

Gitting gud is one of my developer goals. Here's an awesome squasher:

```bash
  git reset --soft HEAD~3 &&
  git commit
```

No `git rebase` or `git merge --squash`! Wonderful. Taken from this Stackoverflow thread: https://stackoverflow.com/questions/5189560/how-do-i-squash-my-last-n-commits-together

## Games

Splatoon 3 was released this last week and with me trying to keep 
up with the times, I decided to purchase it. Not being a regular 
gamer, Splatoon was challenging right off the bat. Unlike some other 
other shooters I am used to, Splatoon & its players recommend you 
use the controllers gyroscope to aim rather than just the right joy 
stick. I've been trying to "stick" to this, but it's pretty challenging 
and I still have yet to see the benefits. The game is still very fun
however.
