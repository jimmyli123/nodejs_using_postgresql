

exports.showUsers = async(req, res) => {
    res.send("users will be logged here - wip");
}

exports.getUser = async(req, res) => {
    res.render('index');
}

exports.postUser = async(req, res) => {
    console.log(`Username to be saved is ${req.body.username}.`)
    res.end();
}