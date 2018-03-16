let express = require('express');
let router = express.Router();
let Guest = require('../model');
router.get('/',function (req,res) {
   res.render('../view/index',{title:'首页'});
});
router.post('/',function (req,res) {
   let guest = req.body;
   guest:req.body;

});
module.exports = router;