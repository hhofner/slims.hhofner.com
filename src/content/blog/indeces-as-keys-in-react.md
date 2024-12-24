---
title: Using indeces as keys in React
description: An explanation of a React fundamental
date: 2022-05-18
status: published
tags: [react frontend ui optimization]
---

## Introduction

Using the index of an array as a key in React is considered to be an anti-pattern and is not recommended.

## The Problem

This [article](https://robinpokorny.medium.com/index-as-a-key-is-an-anti-pattern-e0349aece318) by Robin Pokorny explains it well.

The key is how React knows if something is unique or not in a list. By looking at the key, it can understand if it exists, or where it should be positioned.

However, the indeces "never change" when swapping items. Let's say you want to swap two items in a list and you're using indeces as keys. What's the difference then, between
`[ 1, 2, 3, 4, 5 ]` and `[ 1, 2, 3, 4, 5 ]` ? Essentially that's what _React sees_. But if you use more unique keys that are actually tied to the underlying object, you can see why this makes sense:

**Before update:**
`[ "title1_1646", "title2_9913", "title4_8135", "title3_0013", "title5_1224" ]`

**After update:**
`[ "title1_1646", "title2_9913", "title3_0013", "title4_8135", "title5_1224" ] `

From this you can clearly see the swap change, and are then able to render optimally. Remember, a lot of React is about comparing before & after states.
