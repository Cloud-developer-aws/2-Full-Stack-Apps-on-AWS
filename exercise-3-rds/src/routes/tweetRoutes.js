import express from "express";
import tweetService from "../service/tweetService.js";
export const router = express.Router();

// Get tweet by id
router.get( "/tweets/:id", async ( req, res ) => {
    let { id } = req.params;
    console.log('Get tweet by id')
  if (!id) {
      console.log("Tweet id is required`");
      return res.status(400).send(`Tweet id is required`);
    }

    const tweetById = await tweetService.findTweetById(id)

  if (!tweetById) {
      console.log("Tweet not found");
      return res.status(404).send(`Tweet not found`)
    }

    return res.status(200).send(tweetById);
} );

// Get list of tweets
router.get( "/tweets/", async ( req, res ) => {
  let { author } = req.query;
  console.log("Get list of tweets");
  let tweetList;

  if (author) {
    tweetList = await tweetService.findTweetsByAuthor(author)
  } else {
    tweetList = await tweetService.findAll();
  }

  res.status(200).send(tweetList);
} );

// Create a tweet
router.post( "/tweets/", async ( req, res ) => {
    // destruct request body
    console.log('Create a new tweet')
    let { author, text, imgUrl } = req.body;

    if (!author || !text) {
      console.log("Missing required tweet information");  
      return res.status(400).send("Missing required tweet information")
    }

    const newTweet = await tweetService.createTweet(author, text, imgUrl)
    console.log('New tweet created')
    res.status(201).send(newTweet);
} );