#!/bin/bash

# Start the json-server instances on different ports for each course

echo "Starting json-server for Learning paths..."
json-server --watch learning_paths.json --port 3001 &
echo "Learning paths server started on port 3001"

echo "Starting json-server for JLPT Preparation..."
json-server --watch jlpt_course/lessons.json --port 3002 &
echo "JLPT Preparation server started on port 3002"

echo "Starting json-server for Casual Japanese..."
json-server --watch casual_japanese/lessons.json --port 3003 &
echo "Casual Japanese server started on port 3003"

echo "Starting json-server for Business Japanese..."
json-server --watch business_japanese/lessons.json --port 3004 &
echo "Business Japanese server started on port 3004"



# Wait for all servers to start
wait
