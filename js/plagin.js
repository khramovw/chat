'use strict';

//date

var date = new Date();

var datenow = Date.now(); //текущее время в мс

var time = new Date(datenow); //текущее время дата

// time.getDate();
// time.getDay();
// time.getMonth();
// time.getFullYear();
// time.getUTCHours();
var options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric'
};
var dateRu = date.toLocaleString('ru', options);
console.log(date + ' \n' + datenow + ' \n' + time + ' \n' + dateRu + '\n\n');

var gatCarYear = function gatCarYear(info) {
    if (typeof info.age !== 'number' || info.age <= 0) return console.error('Age not find');
    var today = new Date();
    info.year = today.getFullYear() - info['age'];
    console.log(info);
    return info;
};

gatCarYear({
    name: 'Lexus',
    age: 4
});

//evre

var arr = [2, '1', 4, 7, 6, 8];

var everyres = arr.every(function (element) {
    return typeof element === 'number';
});

var every = function every(array, colbac) {
    if (!array.length) return console.error('Ups, arr not faund');
    var result = true;
    for (var i = 0, limit = array.length; i < limit; i++) {
        if (!colbac(array[i])) {
            result = false;
            break;
        }
    }
    return result;
};

// let res = evre(arr, function(element){
//     return typeof element === 'number';
// })

var res = every(arr, function (element) {
    return typeof element === 'number';
});

console.log(everyres, res);

var messages = [{
    id: '0001',
    message: 'Hello',
    time: 1513166039876,
    user: {
        id: 'abcd-1234',
        rank: 0,
        username: 'Moto',
        verified: false
    }
}, {
    id: '0002',
    message: 'Hi, piple. Wisual Studio Alt + Shift + F',
    time: 1513167509219,
    user: {
        id: 'abcd-1234',
        rank: 1,
        username: 'Flash',
        verified: false
    }
}, {
    id: '0003',
    message: 'Hello, world. Web Storm Ctr + Shift + L',
    time: 1513166039876,
    user: {
        id: 'abcd-1234',
        rank: 2,
        username: 'Admin',
        verified: false
    }
}];

var genereatMassge = function genereatMassge(messages) {
    if (!messages || !messages.length) return document.write('<h3 class="empty-message-list">No messages</h3>');
    var typeRank = {
        '0': {
            type: 'usser',
            color: '#cce5ff'
        },
        '1': {
            type: 'moderator',
            color: '#d4edda'
        },
        '2': {
            type: 'admin',
            color: '#fff3cd'
        }
    };

    for (var i = 0, limit = messages.length; i < limit; i++) {
        // document.write(`${messages[i].user.username}: ${messages[i].message}`);
        var name = messages[i].user.username;
        var message = messages[i].message;
        var type = typeRank[messages[i].user.rank].type;
        var color = typeRank[messages[i].user.rank].color;

        var view = '\n            <div class="alert" style="background:' + color + '">\n                <b>' + type + ' - ' + name + '</b>\n                <b>' + message + '</b>\n            </div>    \n        ';

        document.write(view);
    }
};

genereatMassge(messages);

//hw5
//1
var getDataDay = function getDataDay(year) {
    var dataday = new Date(year, 0, 1).toLocaleString('ru', { weekday: 'long' });
    return console.log(dataday);
};
getDataDay(2016);

var getDataDay0 = function getDataDay0(year) {
    return new Date(year, 0, 1).toLocaleString('ru', { weekday: 'long' });
};
var res0 = getDataDay0(2016);
console.log(res0);

//2

var strtodate = function strtodate(str) {
    var x = new Date(str);
    console.log(x);
};

strtodate('29.03.1985');

//3

var difference = (Date.now() - new Date(2017, 0, 1)) / 864e5 / 7;
console.log(Math.floor(difference));