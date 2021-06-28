const express = require('express');
const router = express.Router();
const api = require('./api');



router.post('/login', (req, res, next) => {
    api.login(req, res, next);
});
router.post('/register', (req, res, next) => {
    api.register(req, res, next);
});
router.post('/GetBookInfo', (req, res, next) => {
    api.GetBookInfo(req, res, next);
});
router.post('/GetUserInfo', (req, res, next) => {
    api.GetUserInfo(req, res, next);
});
router.post('/GetUserBookInfo', (req, res, next) => {
    api.GetUserBookInfo(req, res, next);
});
router.post('/GetCommentInfo', (req, res, next) => {
    api.GetCommentInfo(req, res, next);
});
router.post('/GetDiaryInfo', (req, res, next) => {
    api.GetDiaryInfo(req, res, next);
});
router.post('/GetTreeNum', (req, res, next) => {
    api.GetTreeNum(req, res, next);
});
router.post('/getPoint', (req, res, next) => {
    api.getPoint(req, res, next);
});
router.post('/book', (req, res, next) => {
    api.book(req, res, next);
});
router.post('/diaryWrite', (req, res, next) => {
    api.diaryWrite(req, res, next);
});
router.post('/Comment_Write', (req, res, next) => {
    api.Comment_Write(req, res, next);
});
router.post('/writeDiary', (req, res, next) => {
    api.writeDiary(req, res, next);
});
router.post('/textorder', (req, res, next) => {
    api.textorder(req, res, next);
});
router.post('/checkDiaryDate', (req, res, next) => {
    api.checkDiaryDate(req, res, next);
});

router.post('/checkWatering', (req, res, next) => {
    api.checkWatering(req, res, next);
});

router.post('/addWater', (req, res, next) => {
    api.addWater(req, res, next);
});

router.post('/SendHugDiary', (req, res, next) => {
    api.SendHugDiary(req, res, next);
});
router.post('/GetHugDiaryInfo', (req, res, next) => {
    api.GetHugDiaryInfo(req, res, next);
});
router.post('/CancelHugDiary', (req, res, next) => {
    api.CancelHugDiary(req, res, next);
});
router.post('/SendHugComment', (req, res, next) => {
    api.SendHugComment(req, res, next);
});
router.post('/GetHugCommentInfo', (req, res, next) => {
    api.GetHugCommentInfo(req, res, next);
});
router.post('/CancelHugComment', (req, res, next) => {
    api.CancelHugComment(req, res, next);
});

module.exports = router;