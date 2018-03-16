let express = require('express');
let router = express.Router();
let favicon = require('serve-favicon');
router.get('/business',function (req,res) {
   res.render('../view/business',{title:'营业'});
});
router.get('/guest',function (req,res) {
    res.render('../view/guest',{title:'客户信息'});
});
router.get('/service',function (req,res) {
   res.render('../view/service',{title:'客服'})
});
router.get('/input',function (req,res) {
    res.render('../view/input',{title:'录入'})
});
router.get('/demo',function (req,res) {
    res.render('../view/demo',{title:'demo'})
});
router.get('/route',function (req,res) {
    res.render('../view/route',{title:'route'})
});
router.get('/cpt',function (req,res) {
    res.render('../view/cpt',{title:'测试'})
});
module.exports = router;