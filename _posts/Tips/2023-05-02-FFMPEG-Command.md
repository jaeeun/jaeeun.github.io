---
title : "FFMPEG command 모음"
data : 2023-05-02
tag : 
 - Tips
 - FFMpeg
comments : true
img : "https://ahmadawais.com/wp-content/uploads/2021/05/FFmpeg.jpg"
---

# FFMPEG command 모음

**영상 자르기**
   ffmpeg -i input.mp4 -ss 00:00:00 -t 00:00:05 out.mp4

**영상 회전**
0 : 90도 시계 반대 방향으로 돌리고 상하 반전 (기본값)
1 : 90도 시계 방향으로 돌린다
2 : 90도 시계 반대 방향으로 돌린다.
3 : 90도 시계 방향으로 돌리고 상하 반전 시킨다.

ffmpeg -i in.mp4 -yf "transpose=1" out.mp4

**변환 중 품질 유지**

ffmpeg -i test.avi -c:v libx264 -c:a libvo_aacenc out.mp4

**Window Media Player 에서도 재생 가능하게**
ffmpeg -i in.mp4 -pix_fmt yuv420p out.mp4

**convert mp3 to wav**
ffmpeg -i in.mp3 -acodec pcm_u8 -ar 22050 song.wav

**Vodeo to Frames**
ffmpeg -i in.mp4 -f image -v error folder/%06d.png

**Frames to Video**
ffmpeg -framerate 30 -c:v libx264 -i %06d.png video.mp4
ffmpeg -framerate 30 -i %06d.jpg video.mp4