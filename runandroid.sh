echo("adb start-server")
echo("adb reverse-tcp:8081 tcp:8081")
echo("sudo yarn react-native run-android")
adb start-server
adb reverse tcp:8081 tcp:8081
sudo yarn react-native run-android
