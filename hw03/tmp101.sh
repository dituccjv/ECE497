#!/usr/bin/env bash
temp1=`i2cget -y 2 0x48`
temp2=`i2cget -y 2 0x49`
temp1=$(echo $temp1 | cut -c 3-)
xtemp2=$(echo $temp2 | cut -c 3-)
#echo ${temp1:2}
temp1c=$(echo "ibase=16;obase=A;$temp1" | bc)
temp2c=$(echo "ibase=16;obase=A;$temp2" | bc)
echo "$temp1c C"
echo "$temp2c C"
temp1F=$(echo "scale=3;$temp1c*9/5+32"|bc)
temp2F=$(echo "scale=3;$temp2c*9/5+32"|bc)
echo "$temp1F F"
echo "$temp2F F"
