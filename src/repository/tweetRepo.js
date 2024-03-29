const Tweet = require("../models/tweet");

class TweetRepo {
  async create(data) {
    try {
      const tweet = await Tweet.create(data);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async get(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getWithComments(id) {
    try {
      const tweet = await Tweet.findById(id).populate({
        path:"comments",

      }).lean();
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async update(id, data) {
    try {
      const tweet = await Tweet.findByIdAndUpdate(id, data,{new:true});
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async delete(id) {
    try {
      const tweet = await Tweet.findByIdAndRemove(id);
      return tweet;
    } catch (error) {
      console.log(error);
    }
  }

  async getAll(offset,limit){
    try {
        const tweets = await Tweet.find().skip(offset).limit(limit)
        return tweets;
    } catch (error) {
        console.log(error)
    }
  }

}

module.exports = TweetRepo;
