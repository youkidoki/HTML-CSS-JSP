import { response } from "express";
import request from "request";

const url = "http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1";
const SERVICE_KEY = "ODU3IOJuwhlQpDyH%2BtzJTxvn3SgcoAT2ndARyEEdbdiDzeM5upHkjGO5H2J5ZIuNtREOc0%2FE4N6cGE77C5Wrrg%3D%3D";
const requestUrl = '${url}?serviveKey=${SERVICE_KEY}&seriesCd=01';

request(requestUrl, (err, response, body) => {
    if(err) throw err;
    console.log(body);
    });