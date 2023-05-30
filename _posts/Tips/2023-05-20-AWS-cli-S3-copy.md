---
title : "AWS cli S3 저장 방법"
data : 2023-05-20
tag : 
 - Tips
 - AWS
comments : true
img : "https://res.cloudinary.com/acloud-guru/image/fetch/c_thumb,f_auto,q_auto/https://acg-wordpress-content-production.s3.us-west-2.amazonaws.com/app/uploads/2020/06/awss3cs-3-1024x640.png"
---

# AWS cli S3 저장 방법

**[AWS CLI 설치]**
msiexec.exe /i [https://awscli.amazonaws.com/AWSCLIV2.msi](https://awscli.amazonaws.com/AWSCLIV2.msi)

(설치 완료 후 cmd 껐다 켬)

**[설치 확인]**
aws --version

**[AWS CLI 환경설정]**
aws configure
(아래 키 입력)
Access key ID,Secret access key
AKIAW2Z6QLUWUTEFMXNI,ASjGEgTKPLtwVVw9Mced8SYRVI39DRrgJHVH7QZx
AWS Access Key ID [None]:
AWS Secret Access Key [None]:
Default region name [None]: ap-northeast-2
Default output format [None]: json

**[조회]**
aws s3 ls s3://ddiyong

**[삭제]**
aws s3 rm s3://digitalhuman.ces/DigitalHumanCES.egg

**[업로드]**
aws s3 cp d:\Workspace\DigitalHumanCES.egg

**[다운]**
aws s3 cp s3://digitalhuman.ces/DigitalHumanCES.egg d:\