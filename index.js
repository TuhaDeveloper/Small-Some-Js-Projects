

// //================ input value from user and outpute total sum with value =============== //

// const first = new Array();

// var sum = 0;

// for (var i = 0; i < 5; i++) {
//     first[i] = parseInt(prompt("enter you number"))
//     console.log(first[i])
//     sum = sum + first[i]
// }

// console.log('total sum is = ' + sum)


// //======================= find maximum number from array and return output maximum number =============== //


// function highscoreNumber(score) {
//     var max = score[0];
//     for (var i = 1; i < score.length; i++) {
//         if (max < score[i]) {
//             max = score[i]
//         }
//     }
//     return max;
// }

// const scores = [12, 34, 905, 98, 23, 103, 506];

// const Result = highscoreNumber(scores)
// console.log(Result)


// //= create a function that will recive 2d dimantional array and return the players name who has maximum number =============== //


// function higherRunScorer(highScorer) {

//     var maxArray = highScorer[0][0]
//     var maxArraynum = highScorer[0][1]

//     for (var i = 1; i < highScorer.length; i++) {
//         if (maxArraynum < highScorer[i][1]) {
//             maxArraynum = highScorer[i][1];
//             maxArray = highScorer[i][0];
//         }
//     }
//     return maxArray;

// }

// const higherRunScorers = [
//     ["jahid", 23],
//     ["efran", 3],
//     ["borhan", 34]
// ]

// const result = higherRunScorer(higherRunScorers)
// console.log(result)

// //============= create a image slider project =====================


// const photos = ["Images/tab-content-2-1.png", "Images/tab-content-2-2.png", "Images/tab-content-2-3.png"];
// const image = document.querySelector('img');

// count = 0;


// function next() {
//     count++;
//     if (count >= photos.length) {
//         count = 0;
//         image.src = photos[count]
//     } else {
//         image.src = photos[count]
//     }
// };

// function prev() {
//     count--;

//     if (count < 0) {
//         count = photos.length - 1;
//         image.src = photos[count];
//     } else {
//         image.src = photos[count]
//     }


// }

//========== created a project if i click then audio will play and add some animation with keypress event ========

for (var i = 0; i < 3; i++) {

    document.querySelectorAll(".button")[i].addEventListener('click', function () {
        var text = this.innerHTML;
        playAudio(text);
        playAnimation(text);
    })

}

function playAnimation(text) {
    var selectedButton = document.querySelector('.' + text);
    selectedButton.classList.add("anim");

    setTimeout(() => {
        selectedButton.classList.remove('anim');
    }, 1000);

}

document.addEventListener('keypress', function (event) {
    var text = event.key;
    playAnimation(text);
    playAudio(text)
})

function playAudio(text) {

    switch (text) {
        case "a":
            var audio = new Audio('sound/a.mp3');
            audio.play()
            break;
        case "b":
            var audio = new Audio('sound/b.m4a');
            audio.play()
            break;
        case "c":
            var audio = new Audio('sound/c.m4a');
            audio.play()
            break;


    }
}











