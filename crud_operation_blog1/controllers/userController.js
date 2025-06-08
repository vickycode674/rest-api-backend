import User from "../model/schema.js";

export const createUser = async (req, res) => {

    try {
        const { name, email } = req.body;

        if (!name || !email) {
            return res.status(400).json({ msg: 'Its failing to get create dude' })
        }

        const existignUser = await User.findOne({ email });

        if (existignUser) {
            return res.status(400).json({ msg: 'Email is already existign create new one dude' })
        }

        const values = {
            name, email
        }

        //insertign into db
        const user = await User.create(values);

        return res.status(200).json({ msg: 'Succesffully created with credentials' });
    }

    catch (err) {
        console.log("error logs", err);
    }
}

//get method dude
export const getUser = async (req, res) => {
    const users = await User.find();

    if (users) {
        return res.status(200).json({ users, msg: 'Succesffully created with credentials' });
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        return res.status(200).json({ user, msg: 'Successfully fetched user' });
    }
    catch (err) {
        console.error("Error in getUserById:", err);
        return res.status(500).json({ msg: 'Server error', error: err.message });
    }
}

export const updateUser = async (req, res) => {
    try {
        const { name, email } = req.body;

        const user = await User.findByIdAndUpdate(req.params.id, { name, email },
            { new: true, runValidators: true })

        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        return res.status(200).json({ user, msg: 'Successfully updated user' });

    }
    catch (err) {
        console.error("Error here", err);
        return res.status(500).json({ msg: 'Server error', error: err.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        return res.status(200).json({ msg: 'Successfully deleted user' });
    } catch (err) {
        console.error("Error in deleteUser:", err);
        return res.status(500).json({ msg: 'Server error', error: err.message });
    }
}
