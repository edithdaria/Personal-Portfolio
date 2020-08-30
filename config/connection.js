const mongoose = require('mongoose');
//connect to mongoose. url parser - useNewUrlParser - new version
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Inquire',
{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
}
);

module.exports = mongoose.connection;