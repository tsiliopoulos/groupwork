let express = require('express');
let router = express.Router();

// create a reference to the db schema
let roomModel = require('../models/room');

module.exports.displayRoomList = (req, res, next) =>{
    roomModel.find((err, roomList) => {
        if(err) {
            return console.error(err);
        }
        else {
          res.json({success: true, roomList: roomList})
        }
    });
}

/*
module.exports.displayAddPage = (req, res, next) => {
    res.render('rooms/add', {
        title: 'Add New Room',
        displayName: req.user ? req.user.displayName : ""
    });
}

module.exports.processAddPage = (req, res, next) => {

    let newRoom = roomModel({
        "CourseCode": req.body.CourseCode,
        "Building": req.body.Building,
        "Room": req.body.Room,
        "Day": req.body.Day,
        "TimeStart": req.body.TimeStart,
        "TimeEnd": req.body.TimeEnd,
    });

    roomModel.create(newRoom, (err, roomModel) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the room list
            res.redirect('/room-list');
        }
    });
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    roomModel.findById(id, (err, roomObject) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else
        {
            // show the edit view
            res.render('rooms/edit', {
                title: 'Edit Room',
                room: roomObject,
                displayName: req.user ? req.user.displayName : ""
            });
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id;

    let updatedRoom = roomModel({
        "_id": id,
        "CourseCode": req.body.CourseCode,
        "Building": req.body.Building,
        "Room": req.body.Room,
        "Day": req.body.Day,
        "TimeStart": req.body.TimeStart,
        "TimeEnd": req.body.TimeEnd
    });

    roomModel.update({_id: id}, updatedRoom, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the room list
            res.redirect('/room-list');
        }
    })
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    roomModel.remove({_id: id}, (err) => {
        if(err) {
            console.log(err);
            res.end(err);
        }
        else {
            // refresh the room list
            res.redirect('/room-list');
        }
    });
}
*/
