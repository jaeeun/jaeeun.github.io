---
layout : post
title : "Transform Matrix to Euler"
data : 2022-04-28
tag:
- Graphics
comments: true
img : "http://upload.wikimedia.org/math/9/d/3/9d3a5ff0a89abaf2f3bccc9341476f4b.png"
---

# Euler / Matrix

## Matrix to Euler (ZXY)

<http://community.foundry.com/discuss/topic/94083/different-euler-values-same-result-how-to-unify?mode=Post&postID=843277>

```cpp
rotOrder == 'ZXY':

if m[1][2] < 1:
  if m[1][2] > -1:
    X = math.asin(-m[1][2])
    Y = math.atan2(m[0][2],m[2][2])
    Z = math.atan2(m[1][0],m[1][1])
  else: # m[1][2] = -1
  # Not a unique solution: Z - Y = math.atan2(-m[0][1],m[0][0])
    X = math.pi/2
    Y = -math.atan2(-m[0][1],m[0][0])
    Z = 0.0
else: # m[1][2] = 1
  # Not a unique solution: Z + Y = math.atan2(-m[0][1],m[0][0])
  X = -math.pi/2
  Y = math.atan2(-m[0][1],m[0][0])
  Z = 0.0
```



---

(ZXY) Euler to Matrix 

<https://www.geometrictools.com/Documentation/EulerAngles.pdf>

### Factor as RzRxRy  

```
cos(z)*cos(y)-sin(z)*sin(x)*sin(y), -cos(x)*sin(z), cos(z)*sin(y)+cos(y)*sin(z)*sin(x), 0.0f;

cos(y)*sin(z)+cos(z)*sin(x)*sin(y), cos(z)*cos(x), sin(z)*sin(y)-cos(z)*cos(y)*sin(x), 0.0f;

-cos(x)*sin(y), sin(x), cos(x)*cos(y), 0

0, 0, 0, 1
```

