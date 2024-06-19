const mongoose = require("mongoose");
mongoose.connect('mongodb://127.0.0.1:27017/movieApp').then(() => {
    console.log("conection on");
}).catch((error) => {
    console.log(error);
})

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    Rating: String
})
const Movie = mongoose.model('Movie', movieSchema);//class
// const hero = new Movie({ title: "Hero", year: 1934, score: 1.3, Rating: 'R' })

Movie.insertMany([
    { title: "Hero", year: 1934, score: 1.3, Rating: 'R' },
    { title: "Hello Brother", year: 1534, score: 3.3, Rating: 'C' },
    { title: "Dream", year: 1964, score: 8.3, Rating: 'H' },
    { title: "delhi", year: 1944, score: 9.3, Rating: 'D' }
]).then(data => {
    console.log("It worked");
    console.log(data);
})