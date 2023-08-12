    const mongoose = require("mongoose");

    const tweetSchema = new mongoose.Schema({
        content:{
            type:String,
            required:true
        },
        userEmail:{
           type:String

        },
        comments:[
            {
                type: mongoose.Schema.Types.ObjectId,
                ref:"Comment"
            }
        ]
    },{
        virtuals:{
           contentWithEmail:{
            get(){
              return `${this.content} \nCreated by : ${this.userEmail}
              `;
            }
           }
        }
    },
    {
        timestamps:true
    }
    );


    const Tweet = mongoose.model("Tweet",tweetSchema);

    module.exports= Tweet;