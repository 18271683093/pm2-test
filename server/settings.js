/**
 * Created by dell on 2017/5/14.
 */
let md5 = require('./md5.js');
let user = 'admin';
let pass = md5('admin');
let avatar = 'avatar.jpg';//头像
let intro = 'Never too old to learn';
let nickname = 'VueBlog';
module.exports = {
    dbUrl: 'mongodb://127.0.0.1:27017/vueblog',
    user: user,
    pass: pass,
    avatar: avatar,
    intro: intro,
    nickname: nickname
}