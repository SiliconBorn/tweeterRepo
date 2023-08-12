const express = require("express");
const App = express();
const connect = require("./config/db");
const PORT = 4000;

const TweetRepo = require("./repository/tweetRepo");
const Comment = require("./models/comment");

App.listen(PORT,async()=>{

    console.log(`STARTED SERVER ON PORT ${PORT}`)
    await connect();
    console.log("MONGO DB CONNECTED");
const tweetRepo = new TweetRepo();

// const tweet = await tweetRepo.create({content:"FIFTH TWEET WITH COMMENTS",userEmail:"janeDoe@hotmail.com"});
// const comment = await Comment.create({
//     content:"NEW COMMENT"
// });
// console.log(tweet)
// console.log(comment)

// tweet.comments.push(comment);
// await tweet.save();
const tweet = await tweetRepo.getWithComments("64d76370765a1ccdc5a1d057")
console.log(tweet)
})
