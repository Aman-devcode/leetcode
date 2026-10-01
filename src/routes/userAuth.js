const express=require('express');
const authrouter=require('router');
//Register Router
authrouter.post('/register',register);
//Login Router
authrouter.post('login',login);
//logout Router
authrouter.post('logout',logout);
//Getprofile Router
authrouter.get('getProfile',getProfile);