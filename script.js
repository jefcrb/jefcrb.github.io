document.getElementById("startButton").addEventListener("click", function() {
    alert('To my sweetest Bianca, I love you, and a happy Valentine\'s Day <3')
    var background = document.querySelector('.background');
    var button = this;
    var slideImg = document.getElementById('slideImg'); // Ensure this matches your image's ID

    // Fade out effect for the background
    background.style.opacity = 0;

    setTimeout(function() {
        // Change the background and fade in
        background.style.background = "url('images/bg2.png') no-repeat center center fixed";
        background.style.backgroundSize = "cover";
        background.style.opacity = 1;

        // Hide the button after being pressed
        button.style.display = 'none';

        // Fade in the image after 2 seconds
        setTimeout(function() {
            slideImg.style.opacity = 1; // Change opacity to fade the image in

            setTimeout(function() {
                game()
            }, 2000)
        }, 2000); // This waits an additional 2 seconds after the button is pressed
    }, 2000); // Adjust according to your fade transition
});

const content = [
    {
        "text": 'ARGHH!! I CAN\'T TAKE THIS THING OFF! SOMEONE HELP ME!!!!!',
    },
    {
        "text": 'Huh? Are those footsteps?? Who dares creeping up on me at this time? COME CLOSE TO ME AND I WILL BEAT YOUR ASS!!',
        "img": "img1.png"
    },
    {
        "text": 'Huh? Asking for help just to show aggression towards your savior... That\'s surely like you, Futaba.',
        "img": "img3.png"
    },
    {
        "text": 'REN!! IT\'S YOU! I\'M SO RELIEVED!',
        "img": "img1.png"
    },
    {
        "text": ' Though, I\'m very right to be careful! You say savior but you could\'ve been anyone, and then I wouldn\'t be so safe...'
    },
    {
        "text": 'I suppose I\'m very happy to see you, Ren. Could you take this thing off my head...?'
    },
    {
        "text": 'For sure. But I must admit that it fits you quite well.',
        "img": "img3.png"
    },
    {
        "text": 'BE SERIOUS!! I\'ve been stuck inside this prop head for over an hour! It\'s is extremely hot and I can\'t see where I\'m going...',
        "img": "img1.png"
    },
    {
        "text": 'Alright, hold tight. 1... 2...... 3...... PLOP!',
        "img": "img3.png"
    },
    {
        "text": 'Phewww... You definitely just saved me from certain death!!',
        "img": "img4.png"
    },
    {
        "text": 'By the way, have you been here the whole time? I have the feeling that someone has been in the room with me for a while...',
        "img": "img5.png"
    },
    {
        "text": 'Nope, I just got here when I heard your voice outside the room. If you have a feeling like that then that must mea--',
        "img": "img3.png"
    },
    {
        "text": 'MEEEEEOOOOOOOOOOOOWWWWWW!!! SURPRISE ATTACK!!!!!!!!!!!!!!!',
        "img": "img6.png"
    },
    {
        "text": 'AHHHHHHHHHH!! WHO IS THAT!?!? *Splashes a glass of lemonade on the pretty cat*',
        "img": "img8.png"
    },
    {
        "text": "Owwwwwww...",
        "img": "img7.png"
    }
];

var isReadyForNext = true; // Flag to indicate readiness for the next event

function game() {
    let currentIndex = 0;

    const nextContent = () => {
        if (!isReadyForNext) return;

        if (currentIndex < content.length) {
            const item = content[currentIndex];
            
            // Check if the item has an image and display it immediately
            if ('img' in item) {
                switch_image(item['img']);
            }
            
            // Display text if present. No need to wait for the image to load.
            if ('text' in item) {
                write_text(item['text']);
            } else {
                // If there's no text, ensure we still allow progressing to the next item
                isReadyForNext = true;
            }

            currentIndex++;
        } else {
            // Game over or content finished, remove event listeners
            document.removeEventListener('click', nextContent);
            document.removeEventListener('touchstart', nextContent);
        }
    };

    document.addEventListener('click', nextContent);
    document.addEventListener('touchstart', nextContent);
}

function write_text(text) {
    if (!isReadyForNext) return;
    isReadyForNext = false; // Prevent new content from starting until the current text is fully displayed

    let textelement = document.querySelector('#dialogue');
    textelement.innerHTML = '';

    let i = 0;
    let intervalID = setInterval(() => {
        if (i < text.length) {
            textelement.innerHTML += text[i];
            i++;
        } else {
            clearInterval(intervalID);
            isReadyForNext = true; // Allow next content
        }
    }, 40);
}

function switch_image(img) {
    let imgelement = document.querySelector('#slideImg');
    imgelement.src = 'images/' + img;
    // Since image change is immediate, there's no need to toggle isReadyForNext here
}
