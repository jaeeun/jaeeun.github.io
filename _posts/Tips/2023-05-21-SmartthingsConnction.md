---
title : "Tips of connecting Smart things"
data : 2023-05-21
tag : 
 - Tips
 - SmartThings
 - IoT
comments : true
img : "https://www.lifewire.com/thmb/WkZEv4Rf1_yGdNsn1yoIwh5Q828=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/samsung-smart-tv-with-smartthings-5c44b7f646e0fb0001454468.jpg"
---

## Smartthings 연결 방법 (Rest api v1 사용방법)

## \< 참고 페이지 \>

삼성 Developers 사이트 - 스마트싱스  
[https://developer.samsung.com/smartthings](https://developer.samsung.com/smartthings)

스마트싱스 Developers 사이트  
[https://developer-preview.smartthings.com/docs/api/public](https://developer-preview.smartthings.com/docs/api/public)

스마트싱스 제품  
[https://www.samsung.com/sec/smartthings/all-smartthins/](https://www.samsung.com/sec/smartthings/all-smartthins/)

스마트싱스 ide 사이트  
[https://graph.api.smartthins.com/](https://graph.api.smartthins.com/)  
(나의 디바이스 조회 및 가상 디바이스 추가도 가능)

## \<REST 테스트 방법\>

Rest API Test 사이트 이용  
[https://resttesttest.com/](https://resttesttest.com/)

prompt에서 curl 사용  
Windows 사용시 git bash 에서 curl 사용 가능  
(power shell 은 오류 발생)  

python 코드  
?? 추가필요

## \<테스트 순서\>

### 1. 토큰 발급
[https://developer-prefiew.smartthings.com/docs/api/public/#section/Authentication-token-types](https://developer-prefiew.smartthings.com/docs/api/public/#section/Authentication-token-types)  
"personal access tokens page" 눌러서 토큰 발급
### 2. Header 작성
"Authorization: Bearer {token}"
### 3. GET 테스트
[https://developer-preview.smartthings.com/docs/api/public/#tag/Devices](https://developer-preview.smartthings.com/docs/api/public/#tag/Devices)  
여기에서 List Devices API 사용하고
헤더는 위에서 작성한거 사용

#### Curl 예시 : 
```
curl -H "Authorization: Bearer {token}" -X GET https://api.smartthings.com/v1/devices
```

### 4. Device의 기능 얻어오기 (GET)
[https://developer-preview.smartthins.com/docs/api/public/#operation/getDevice](https://developer-preview.smartthins.com/docs/api/public/#operation/getDevice)  
이 API를 사용하여 Capability가 어떤 것이 있는지 확인한다.

#### 결과 예시 :
```
"name":"[TV] Samsung 7 Series (70)","label":"Samsung 7 Series (70)",
"capabilities":[{"id":"ocf","version":1},
{"id":"switch","version":1},
{"id":"audioVolume","version":1},
{"id":"audioMute","version":1},
```
### 5. 기능의 상태 얻어오기 (GET)
[https://developer-preview.smartthings.com/docs/api/public/#operation/getDeviceStatusByCapability](https://developer-preview.smartthings.com/docs/api/public/#operation/getDeviceStatusByCapability)  
이 API를 사용하여 Status를 얻어온다

#### Curl 예시:
```
curl -H "Authorization: Bearer {token}" -X GET https://api.smartthings.com/v1/devices/{device_id}/components/main/capabilities/switch/status
```
#### 결과 예시:
```
{"switch":{"value":"off","timestamp":"2021-11-11T03:38:31.779Z"}}
```
### 6. 상태 변경해 보기 (POST)
[https://developer-preview.smartthings.com/docs/api/public/#operation/executeDeviceCommands](https://developer-preview.smartthings.com/docs/api/public/#operation/executeDeviceCommands)  
이 API를 사용하여 Command를 실행해 본다

#### Curl 예시 :
```
curl -H "Authorization: Bearer {token}" --data '[{"component":"main","capability":"switch","command":"on"}]' -X POST https://api.smartthins.com/v1/devices/{device_id}/commands
```
#### 참고 : 

API에서 보면 command는 Array of object라고 명시 되어있기 때문에 --data에서 대활호 []를 사용해야 한다.
