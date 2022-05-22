## Express 설치하기
```
$ npm init -y
$ npm install express
$ npm install mysql
```
## git 설정
```
$ git init
$ git add .
$ git commit -m "first commit"
$ git branch -M v3_MySQL
$ git remote add origin https://github.com/bizzy91/proverload.git
$ git push -u origin v3_MySQL
```

## Database

생성
```
mysql> CREATE DATABASE express_db;
```
확인
```
mysql> SHOW DATABASE;
```
선택
```
mysql> USE express_db;
```
삭제
```
mysql> DROP DATABASE express_db;
```
## Table

생성
```
mysql> CREATE TABLE users (id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, name VARCHAR(255) NOT NULL;
```
값 추가
```
mysql> INSERT INTO users (id, name) VALUES (1, 'bizzy1');
```
값 수정
```
mysql> UPDATE users SET name='bizzy2' WHERE id = '1';
```
값 삭제
```
mysql> DELETE FROM users WHERE id = 1;
```
모든 데이터 조회
```
mysql> SELECT * FROM users;
```
## 진행 상황

DB 생성 완료

Table 생성 완료

값 추가, 수정, 삭제, 조회 가능
