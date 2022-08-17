// this is an object with a method that responds by rendering out the ejs

module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    }
}