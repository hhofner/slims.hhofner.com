#!/bin/bash

# Define the absolute path to the blog directory
blog_dir="./src/content/blog"

# Check if the required directory exists
if [ ! -d "$blog_dir" ]; then
	echo "Error: Directory '$blog_dir' not found."
	exit 1
fi

# Check if the user provided a directory name
if [ -z "$1" ]; then
	echo "Error: Please provide a directory name as the first argument."
	echo "Usage: $0 <directory_name>"
	exit 1
fi

# Change to the blog directory
cd "$blog_dir" || {
	echo "Error: Failed to change directory to '$blog_dir'."
	exit 1
}

# Create the new directory
new_dir="$1"
mkdir "$new_dir" || {
	echo "Error: Failed to create directory '$new_dir'."
	exit 1
}

# Create the index.md file inside the new directory
index_file="./$new_dir/index.md" # Use absolute path for index.md
date_str=$(date +%Y-%m-%d)
metadata="---
title:
description:
date: $date_str
tags: []
---
"
# Use printf to avoid issues with backslashes and special characters in the metadata.
printf "%s" "$metadata" > "$index_file" || {
	echo "Error: Failed to create or write to file '$index_file'."
	exit 1
}

echo "Successfully created directory '$new_dir' and index.md file with metadata in '$blog_dir'."
exit 0
