create database catdreamdb;

use catdreamdb;

delete from catdreamdb; -- 내용삭제
drop database catdreamdb; -- 완전삭제




create table member(
	id varchar(15) primary key,  -- 아이디
    password varchar(30) not null, -- 비밀번호
    name varchar(10), -- 이름
    birth date, -- 생년월일 날짜
    gender varchar(2),  -- 성별
    email varchar(30),  -- 이메일
    phone varchar(15) not null,  -- 휴대폰 번호
    jobrank varchar(5) -- 직급
);

insert into member(id,password,name,birth,gender,email,phone,jobrank)
values('hjg8013','123456','황준호','1997-12-15','남자','hjg8012@naver.com','01029128013','관리자');

select * from member;

create table board(
bno int primary key auto_increment,
title varchar(50) not null,
content text,
writer varchar(15),
regdate datetime default now(),
cnt int default 0,
memberId varchar(15)
);

select * from board;

create table reply(
	rno int primary key auto_increment,
    bno int,
    reply varchar(1000) not null,
    replyer varchar(15),
    replydate datetime default now(),
    memberId varchar(15)
);

select * from reply;

create table attach(
	uuid varchar(50) primary key,
    uploadpath varchar(100),
    filename varchar(100),
    image int,
	bno int
);


select * from attach;