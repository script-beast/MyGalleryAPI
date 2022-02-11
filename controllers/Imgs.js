const Img = require('../models')

module.exports.index = async (req, res) => {
    const Imgs = await Img.find({})
    // console.log(Imgs)
    res.json(Imgs)
}

module.exports.addImgs = async (req, res) => {
    try {
        const { ImgName, ImgURL, ImgDetails } = req.body;
        const newImg = new Img({ ImgName, ImgURL, ImgDetails });
        const savedImg = await newImg.save();
        res.json(savedImg);
    } catch (error) {
        console.log(error.message);
        // res.status(500).send('Server Error');
    }
}

module.exports.deleteImg = async (req, res) => {
    const id = req.params.id
    const resdata =  await  Img.findByIdAndDelete(id) 
    // res.redirect(`/campgrounds`)
    res.json(resdata)
}

module.exports.EditImg = async (req, res) => {
    const id = req.params.id
    // console.log({...req.body.Imgs})
    const updimg = await Img.findByIdAndUpdate(id, {...req.body })
    await updimg.save()
    res.json(updimg)
}

module.exports.show = async (req, res) => {
    const id = req.params.id
    const Imgs = await Img.findById(id)
    // console.log(Imgs)
    res.json([Imgs])
}

module.exports.update = async (req, res) => {
    const id = req.params.id
    const updimg = await Img.findById(id)
    res.json(updimg)
}


module.exports.new = async (req, res) => {}
module.exports.editpg = async (req, res) => {}