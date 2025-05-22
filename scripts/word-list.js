const wordList = [
    {
        word: "hark! what light breaks yonder silence? 'tis but thy presence that bids my soul rejoice!",
        hint: "Hello"
    },
    {
        word: "1/2 * x^2 + c",
        hint: "What is the integral of x. (use spaces)"
    },
    {
        word: "y=sqrt(2x^3 + 2)",
        hint: "Find f(x) at the point (1,2) for dy/dx=(3x^2) / y. (Type square root as sqrt(__))"
    },
    {
        word: "1",
        hint: "Derivative of x"
    },
    {
        word: "x^2 + c",
        hint: "Integral of 2x (use spaces)"
    },
    {
        word: "Frisbee",
        hint: "A popular sport played with a spherical ball."
    },
    {
        word: "Pneumonoultramicroscopicsilicovolcanoconiosis",
        hint: "Really long word."
    },
    {
        word: "Supercalifragilisticexpialidocious",
        hint: "Mary Poppins."
    },
    {
        word: "Hippopotomonstrosesquippedaliophobia",
        hint: "Fear me."
    },
    {
        word: "Eellogofusciouhipoppokunurious",
        hint: "Verily, 'tis most excellent."
    },
    {
        word: "Louis Armstrong",
        hint: "I see trees of green."
    },
    {
        word: "Kendrick Lamar",
        hint: "Rigamortis."
    },
    {
        word: "Tyler, The Creator",
        hint: "St. Chroma."
    },
    {
        word: "15x^4 + 72x^2 + 48",
        hint: "Find the derivative of 3x((x^2)+4)^2 fully simplified. (use spaces)"
    },
    {
        word: "Frank Sinatra",
        hint: "The Rat Pack."
    },
    {
        word: "Michael Jackson",
        hint: "Start with the man in the mirror."
    },
    {
        word: "-3.315",
        hint: "The velocity of a particle at time t is given by v(t) = 1 + 2sin((t^2)/2). The particle is at position x = 2 at time t  = 4. Find the position of the particle at time t = 0"
    },
    {
        word: "Integrate the absolute value of the velocity",
        hint: "How do you find the total distance a particle has traveled."
    },
    {
        word: "-cos + c",
        hint: "The integral of sin. (use spaces)"
    },
    {
        word: "a(t) = 250t^5 + 6t - 4",
        hint: "A particle's position is represented by p(t) = 5t^7 + t^3 - 2t^2 - 50t + 60. Find the equation for the particle's acceleration."
    },
    {
        word: "a(17) = 298170068",
        hint: "A particle's position is represented by p(t) = 5t^7 + t^3 - 2t^2 - 50t + 60. Find the acceleration at t = 17."
    },
    {
        word: "FIRST WITCH When shall we three meet again? In thunder, lightning, or in rain? SECOND WITCH When the hurly-burly's done, When the battle's lost and won. THIRD WITCH That will be ere the set of sun. FIRST WITCH Where the place? SECOND WITCH  Upon the heath. THIRD WITCH There to meet with Macbeth. FIRST WITCH  I come, Graymalkin. SECOND WITCH  Paddock calls. THIRD WITCH  Anon. ALL Fair is foul, and foul is fair; Hover through the fog and filthy air. They exit.",
        hint: "Macbeth."
    },
    {
        word: "HELP, HELP ME",
        hint: "..."
    },
    {
        word: "IDK It x too hard + for - me. Better luck next time. = 573420 + 3",
        hint: "Solve Yang-Mills existence and math gap."
    },
    {
        word: "42",
        hint: "The meaning of life, the univers, and everything."
    },
    {
        word: "12",
        hint: "How many characters are in the alphabet?"
    },
    {
        word: "A coffin",
        hint: "The person who makes it has no need for it; the person who buys it has no use for it; and the person who uses it can neither see nor feel it. What is it?"
    },
    {
        word: "astronaut",
        hint: "An individual meticulously conditioned for extraterrestrial locomotion and occupational execution within microgravity environs aboard advanced aerospace constructs."
    },
    {
        word: "Water",
        hint: "a complex of the first element on the periodic table and the eighth element."
    },
    {
        word: "1904 Olympic Marathon",
        hint: "The worst race."
    },
    {
        word: "rainbow",
        hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light."
    },
    {
        word: "Hello",
        hint: "nwdouydvkqwe."
    },
    {
        word: "piano",
        hint: "A musical instrument played by pressing keys that cause hammers to strike strings."
    },
    {
        word: "vacation",
        hint: "A period of time devoted to pleasure, rest, or relaxation."
    },
    {
        word: "rainforest",
        hint: "A dense forest characterized by high rainfall and biodiversity."
    },
    {
        word: "theater",
        hint: "A building or outdoor area in which plays, movies, or other performances are staged."
    },
    {
        word: "telephone",
        hint: "A device used to transmit sound over long distances."
    },
    {
        word: "language",
        hint: "A system of communication consisting of words, gestures, and syntax."
    },
    {
        word: "desert",
        hint: "A barren or arid land with little or no precipitation."
    },
    {
        word: "sunflower",
        hint: "A tall plant with a large yellow flower head."
    },
    {
        word: "fantasy",
        hint: "A genre of imaginative fiction involving magic and supernatural elements."
    },
    {
        word: "telescope",
        hint: "An optical instrument used to view distant objects in space."
    },
    {
        word: "breeze",
        hint: "A gentle wind."
    },
    {
        word: "oasis",
        hint: "A fertile spot in a desert where water is found."
    },
    {
        word: "photography",
        hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation."
    },
    {
        word: "safari",
        hint: "An expedition or journey, typically to observe wildlife in their natural habitat."
    },
    {
        word: "planet",
        hint: "A celestial body that orbits a star and does not produce light of its own."
    },
    {
        word: "river",
        hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream."
    },
    {
        word: "tropical",
        hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn."
    },
    {
        word: "mysterious",
        hint: "Difficult or impossible to understand, explain, or identify."
    },
    {
        word: "enigma",
        hint: "Something that is mysterious, puzzling, or difficult to understand."
    },
    {
        word: "paradox",
        hint: "A statement or situation that contradicts itself or defies intuition."
    },
    {
        word: "puzzle",
        hint: "A game, toy, or problem designed to test ingenuity or knowledge."
    },
    {
        word: "whisper",
        hint: "To speak very softly or quietly, often in a secretive manner."
    },
    {
        word: "shadow",
        hint: "A dark area or shape produced by an object blocking the light."
    },
    {
        word: "secret",
        hint: "Something kept hidden or unknown to others."
    },
    {
        word: "curiosity",
        hint: "A strong desire to know or learn something."
    },
    {
        word: "unpredictable",
        hint: "Not able to be foreseen or known beforehand; uncertain."
    },
    {
        word: "obfuscate",
        hint: "To confuse or bewilder someone; to make something unclear or difficult to understand."
    },
    {
        word: "unveil",
        hint: "To make known or reveal something previously secret or unknown."
    },
    {
        word: "illusion",
        hint: "A false perception or belief; a deceptive appearance or impression."
    },
    {
        word: "moonlight",
        hint: "The light from the moon."
    },
    {
        word: "vibrant",
        hint: "Full of energy, brightness, and life."
    },
    {
        word: "nostalgia",
        hint: "A sentimental longing or wistful affection for the past."
    },
    {
        word: "H",
        hint: "A letter in the alphabet."
    },
 ];