
let gethomeAdmin = (req, res) =>{
    return res.render("admin/homadmin.ejs");
}

module.exports = {
    gethomeAdmin: gethomeAdmin,
}