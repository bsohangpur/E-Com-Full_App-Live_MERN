const express = require('express').Router();
const BlogData = require('../Database/Blog/blogData');
const Uploads = require('../app')


//add blog data
express.post('/data', Uploads.array('image'), async (req, res) => {

    const blogimg = req.files.map((file) => { return file.path });
    const blogimgalt = req.files.map((file) => { return file.originalname });

    const Data = new BlogData(
        {
            title: req.body.title,
            creater: req.body.creater,
            content: req.body.content,
            categories: req.body.categories,
            tags: req.body.tags,
            image: blogimg,
            imageAlt: blogimgalt
        }
    );
    const Send = await Data.save();

    try {
        res.send(Send)
    }
    catch (e) {
        res.send(e)
    }
})

//adding blog comments data on same blog id.
// express.put("/data/:id", async (req, res) => {
//     const id = req.params.id;

//     try {
        
//     }
//     catch (e) {
//         res.send(e)
//     }
// })


//get the value from api
express.get('/data', async (req, res) => {

    try {
        const BlogGet = await BlogData.find({})
        res.send(BlogGet)
    }

    catch (e) {
        res.send(e)
    }

})


// getting blog by id and update the info
express.put('/data/:id', Uploads.array('image'), async (req, res) => {
    const id = req.params.id;
    const blogimg = req.files.map((file) => { return file.path });
    const blogimgalt = req.files.map((file) => { return file.originalname });

    try {
        if (req.files.length !== 0) {
            const Data = await BlogData.findByIdAndUpdate(id, {
                title: req.body.title,
                creater: req.body.creater,
                content: req.body.content,
                categories: req.body.categories,
                tags: req.body.tags,
                image: blogimg,
                imageAlt: blogimgalt
            })
            res.send(Data)
        }
        else if(req.body.comments !== undefined) {
            const Data = await BlogData.findByIdAndUpdate(id,
                {
                 $push: {
                     comments:req.body.comments
                 }
                }
             )
             const data = Data.push(Data)
             res.send(data)
        }
        else {
            const Data = await BlogData.findByIdAndUpdate(id, {
                title: req.body.title,
                creater: req.body.creater,
                content: req.body.content,
                categories: req.body.categories,
                tags: req.body.tags
            })
            res.send(Data)
        }
    }

    catch (e) {
        res.send(e)
    }
})



//deleting the data by id
express.delete('/data/:id', async (req, res) => {
    try {
        const Id = req.params.id
        const Delete = await BlogData.findByIdAndDelete(Id, req.body);
        res.send(Delete);
    } catch (e) {
        res.send(e)
    }
})


//get the blog from there id.
express.get('/data/:id', async (req, res) => {

    try {
        const Id = req.params.id;
        const BlogGet = await BlogData.findById(Id, {})
        res.send(BlogGet)
    }

    catch (e) {
        res.send(e)
    }

})

module.exports = express;