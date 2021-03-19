case $1 in
	"start" )
		echo "yarn react-native start" 
		yarn react-native start ;;
	"start clean" )
		echo "yarn react-native --reset-clear" 
		yarn react-native start --reset-clear ;;
	* )
		echo "unknow parameter" ;;
esac
	

