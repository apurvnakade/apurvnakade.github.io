#!/bin/bash

#OUTPUT="./index.html"
for D in ./*; do
    if [ -d "$D" ]; then
        cd "$D"
        #rm $OUTPUT
        echo "<html>" >> $OUTPUT
        echo "<body>" >> $OUTPUT
        echo "<br><br><br><ul style=\"list-style: none;\">" >> $OUTPUT
        for f in *.pdf
        do
        	echo "<li><a href=\"./$f\">$f</li></a>" >> $OUTPUT
        done
        echo "</ul>" >> $OUTPUT
        echo "</body>" >> $OUTPUT
        echo "</html>" >> $OUTPUT
        cd ..
    fi
done


# ROOT="./"
# OUTPUT="./index.html"
#
# echo "<html>" >> $OUTPUT
# echo "<body>" >> $OUTPUT
# echo "<ul>" >> $OUTPUT
# for f in *.pdf
# do
# 	echo "<li><a href=\"./$f\">$f<\li><\a>" >> $OUTPUT
# done
# echo "</ul>" >> $OUTPUT
# echo "</body>" >> $OUTPUT
# echo "</html>" >> $OUTPUT

# i=0
# echo "<UL>" > $OUTPUT
# for filepath in `find "$ROOT" -maxdepth 1 -mindepth 1 -type d| sort`; do
#   path=`basename "$filepath"`
#   echo "  <LI>$path</LI>" >> $OUTPUT
#   echo "  <UL>" >> $OUTPUT
#   for i in `find "$filepath" -maxdepth 1 -mindepth 1 -type f| sort`; do
#     file=`basename "$i"`
#     echo "    <LI><a href=\"/$path/$file\">$file</a></LI>" >> $OUTPUT
#   done
#   echo "  </UL>" >> $OUTPUT
# done
# echo "</UL>" >> $OUTPUT
