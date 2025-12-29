class IndexController {
    static home(req, res) {
        res.send('Welcome to the Express App!');
    }

    static about(req, res) {
        res.send('This is the about page.');
    }
}

export default IndexController;