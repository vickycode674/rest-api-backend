// const getHighestAlphabet = (alphabets) => {
//     return alphabets.reduce((prev, current) => 
//       prev.toLowerCase() > current.toLowerCase() ? prev : current
//     );
//   };
  
//   exports.processData = (req, res) => {
//     const { data } = req.body;
//     if (!data) {
//       return res.status(400).json({ is_success: false, message: 'Data is required' });
//     }
  
//     const numbers = data.filter(item => !isNaN(item));
//     const alphabets = data.filter(item => isNaN(item) && /^[a-zA-Z]$/.test(item));
//     const highestAlphabet = getHighestAlphabet(alphabets);
  
//     res.json({
//       is_success: true,
//       user_id: 'john_doe_17091999',
//       email: 'john@xyz.com',
//       roll_number: 'ABCD123',
//       numbers,
//       alphabets,
//       highest_alphabet: highestAlphabet,
//     });
//   };
  
//   exports.getOperationCode = (req, res) => {
//     res.json({ operation_code: 'SOME_OPERATION_CODE' });
//   };

// controllers/dataController.js

exports.processData = (req, res) => {
  try {
    // Logic for processing data
    res.status(200).send('Data processed!');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

    res.json({
      is_success: true,
      user_id: 'john_doe_17091999',
      email: 'john@xyz.com',
      roll_number: 'ABCD123',
      numbers,
      alphabets,
      highest_alphabet: highestAlphabet,
    });


exports.getOperationCode = (req, res) => {
  try {
    // Logic to get operation code
    res.status(200).send('Operation code retrieved!');
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
};

  