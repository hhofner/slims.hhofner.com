---
title: Setting up Zed with eslint only formatting
date: 2024-08-17
description: "How to set up Zed with ESLint only formatting"
tags: ["programming"]
---

I was trying to set up the Zed editor with ESLint only formatting yesterday, and to save future someone
some time, I wanted to post this. In my path to reducing dependencies, I wanted to explore formatting
options with other than ESLint. I have always opted for Prettier and had no real opinions on how formatting
should behave, but was easily convinced otherwise after
looking at [Anthony Fu's]() [ESLint configuration](https://github.com/antfu/eslint-config) and the formatting rules that come along
with it.

However at the time of writing in Zed, you can't set it such that *only* eslint formatting runs, and
so you have to set it such that the default formatter is an external one that does nothing, and
then have it run ESLint's fix command after. In other words:

```json
"languages": {
	"Vue.js": {
		"formatter": {
			"external": {
				"command": "cat << EOF",
				"arguments": []
			}
		},
		"code_actions_on_format": {
			"source.fixAll.eslint": true
		}
	}
}
```
