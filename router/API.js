const request = require('request')
const serviceKey = 'ODU3IOJuwhlQpDyH%2BtzJTxvn3SgcoAT2ndARyEEdbdiDzeM5upHkjGO5H2J5ZIuNtREOc0%2FE4N6cGE77C5Wrrg%3D%3D'

var xhr = new XMLHttpRequest();
var url = 'http://apis.data.go.kr/1471000/FoodNtrIrdntInfoService1/getFoodNtrItdntList1'; /*URL*/
var queryParams = '?' + encodeURIComponent('ServiceKey') + '=' + serviceKey; /*Service Key*/
queryParams += '&' + encodeURIComponent('desc_kor') + '=' + encodeURIComponent('바나나칩'); /**/
queryParams += '&' + encodeURIComponent('pageNo') + '=' + encodeURIComponent('1'); /**/
queryParams += '&' + encodeURIComponent('numOfRows') + '=' + encodeURIComponent('3'); /**/
queryParams += '&' + encodeURIComponent('bgn_year') + '=' + encodeURIComponent('2017'); /**/
queryParams += '&' + encodeURIComponent('animal_plant') + '=' + encodeURIComponent('(유)돌코리아'); /**/
queryParams += '&' + encodeURIComponent('type') + '=' + encodeURIComponent('json'); /**/
xhr.open('GET', url + queryParams);
xhr.onreadystatechange = function () {
    if (this.readyState == 4) {
        alert('Status: ' + this.status + 'nHeaders: ' + JSON.stringify(this.getAllResponseHeaders()) + 'nBody: ' + this.responseText);
    }
};

xhr.send('');
