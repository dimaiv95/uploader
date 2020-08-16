import express from "express";

const router = express.Router();

//GET:  /photos
//GET:  /photo/:photoID
//POST: /add-photo

router.get("/photos", (req, res, next) => {
    res
        .status(200)
        .json({
            photos: [
                { "id": 1, "name": "photo1.jpg", "path": "photo1.jpg" },
                { "id": 2, "name": "photo2.jpg", "path": "photo2.jpg" },
                { "id": 3, "name": "photo3.jpg", "path": "photo3.jpg" }
            ]
        });
});

router.get("/photo/:photoID", (req, res, next) => {
    res
        .status(200)
        .json({
            "id": 1,
            "name": "photo1.jpg",
            "path": "/images/photo1.jpg"
        });
});

router.post("/add-photo", (req, res, next) => {
    res
        .status(201)
        .json({
            "id": 2,
            "name": "photo2.jpg",
            "path": "/images/photo2.jpg"
        });
})


export default router;