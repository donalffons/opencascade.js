#!/bin/bash

start=`date +%s`

while true
do
	echo "patience is a virtue"
  end=`date +%s`
  runtime=$((end-start))
  echo $runtime

  sleep 300
done
