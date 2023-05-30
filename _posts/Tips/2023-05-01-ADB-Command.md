---
title : "ADB Commands"
data : 2023-05-01
tag : 
 - Tips
 - Android
comments : true
img : "https://www.howtogeek.com/wp-content/uploads/2016/10/android-logo-adb.png"
---

## ADB 커멘드

```
adb logcat BodyAnimationActivity:D AndroidRuntime:E

adb shell wm density 560
adb shell wm density reset
```
**RAM 체크**
```
adb shell dumpsys meminfo (pid)
```

**녹화**
```
adb shell screenrecord /sdcard/000.mp4
adb shell screenrecord --time-limit 10 /sdcard/record.mp4
adb shell screenrecord --bit-rate 10000000 /sdcard/000.mp4
```

**system app 삭제**
```
adb remount
adb shell su -c setenforce 0
adb shell rm system/priv-app/PeopleStripe/PeopleStripe.apk

ndk-build -B -j5
```

**카메라 무음**
```
adb shell settings put system csc_pref_camera_forced_shuttersound_key 0
```

**ADB user data 날리기**
```
adb shell dd if=/dev/zero of=/dev/block/persistent bs=1 count=1024
```