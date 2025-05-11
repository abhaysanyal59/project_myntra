exports.signin = async (req, res) => {
    res.status(200).json({
        message: "User signed in successfully",
        user: req.user,
    });
}