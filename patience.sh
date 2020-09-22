#!/bin/bash

start=`date +%s`

while true
do
  end=`date +%s`
  runtime=$((end-start))
	echo "patience is a virtue ${runtime}"

  sleep 60
done
