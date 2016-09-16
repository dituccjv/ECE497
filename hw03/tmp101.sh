temp1=`i2cget -y 2 0x48`
temp2=`i2cget -y 2 0x49`
temp1c=$((temp1))
temp2c=$((temp2))
echo "$temp1c C"
echo "$temp2c C"
((temp1F=$temp1c*9/5 + 32))
((temp2F=$temp2c*9/5 + 32))
echo "$temp1F F"
echo "$temp2F F"




