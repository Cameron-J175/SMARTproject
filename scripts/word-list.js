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
        hint: "Help"
    },
    {
        word: "IDK It x too hard + for - me. Better luck next time. = 573420 + 3",
        hint: "Solve Yang-Mills existence and math gap."
    },
    {
        word: "42",
        hint: "The meaning of life, the universe, and everything."
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
    }
 ];

 const babyList = [
    {
        word: "Hi",
        hint: "A simple greeting"
    },
    {
        word: "Blue",
        hint: "The color of the sky"
    },
    {
        word: "Rainbow",
        hint: "All of the colors"
    },
    {
        word: "Red",
        hint: "The color of roses"
    },
    {
        word: "Yellow",
        hint: "The color of the Sun"
    },
    {
        word: "2",
        hint: "1 + 1"
    },
    {
        word: "Sunday",
        hint: "The first day of the week"
    },
    {
        word: "Square",
        hint: "A shape with four equal sides"
    },
    {
        word: "Triangle",
        hint: "A shape with three sides"
    }, 
    {
        word: "Circle",
        hint: "A word with no sides"
    },
    {
        word: "B",
        hint: "The second letter in the alphabet"
    },
    {
        word: "Green",
        hint: "The color of grass"
    },
    {
        word: "Gray",
        hint: "The color of the sky on a stormy day"
    },
    {
        word: "Grey",
        hint: "The color of the sky on a stormy day"
    },
    {
        word: "Black",
        hint: "The color of space"
    },
    {
        word: "Door",
        hint: "What you open in enter a room"
    },
    {
        word: "Book",
        hint: "You read it"
    },
    {
        word: "Drew",
        hint: "Who this mode is made for"
    },
    {
        word: "Plane",
        hint: "A flying vehicle"
    },
    {
        word: "Car",
        hint: "A vehicle with four wheels that drives on roads (preferably)."
    },
    {
        word: "A",
        hint: "The first letter of the alphabet"
    },
    {
        word: "Big",
        hint: "Something that is large"
    },
    {
        word: "Ate",
        hint: "Past tense of eat"
    },
    {
        word: "Eat",
        hint: "What you do to food"
    }
 ]

 const proList = [
    {
        word: "Gene Expression",
        hint: "The procress in which a gene's info is turned into a function"
    },
    {
        word: "Intron",
        hint: "The genetic information that is pliced and stays in the nucleus"
    },
    {
        word: "Exon",
        hint: "The genetic info that leave that nucleus"
    },
    {
        word: "Repressible Operon",
        hint: "A gene that can be repressed"
    },
    {
        word: "Inducible Operon",
        hint: "A gene that can be started"
    },
    {
        word: "2",
        hint: "How much CO2 is produced in one turn of the Krebs Cycle"
    },
    {
        word: "FADH2",
        hint: "An electron carrier in the ETC"
    },
    {
        word: "NADPH",
        hint: "An electron donor"
    },
    {
        word: "Signaling Cascade",
        hint: "A series of molecular events within a cell that transmit a signal from the cell's surface to its interior"
    },
    {
        word: "(250 + 10sqrt(5))/3",
        hint: "What is the integral from 0 to 5 of 2x^2 + sqrt(x). (use spaces, square root = sqrt())"
    },
    {
        word: "RNA",
        hint: "A single strand of genetic information that is capable of leaving the nucleus"
    },
    {
        word: "1 Kcal",
        hint: "If producers recieve 10,000 Kcals of energy in an ecosystem, how much Kcals of energy do the quaternary consumers recieve."
    },
    {
        word: "481 Decreasing",
        hint: "The velocity of a particle is shown to be v(t) = 2x - 3x^2. The acceleration of the same particle is shown by a(t) = 2 + 6x. What is the speed at t = 13, and is the speed increasing or decreasing."
    },
    {
        word: "e^3",
        hint: "A number from 0 to 1,000,000"
    },
    {
        word: "pi",
        hint: "a number"
    },
    {
        word: "3/18/1398",
        hint: "A date before 5/21/1400"
    },
    {
        word: "Boeing",
        hint: "Plane"
    },
    {
        word: "(810225 * sqrt(3) - 19600 * sqrt(15)) / 252",
        hint: "The functions f(x) = x^(1/2), g(x) = x^3 + 5, x = 1, and x = 5 are graphed on the same grid. What is the valume of the area contaiend by these functions if there is an equalateral triangle cross section. (use spaces, square root - sqrt())"
    },
    {
        word: "J",
        hint: "A letter in an alphabet"
    },
    {
        word: "Tumor Supressors",
        hint: "A gene that acts as a repressor in the cell cycle to prevent cancer"
    },
    {
        word: "p53",
        hint: "A tumor suppressor protein"
    },
    {
        word: "Cyclin-dependent Kinases",
        hint: "The enzyme that cyclin bonds to"
    },
    {
        word: "Anaphylactic Shock",
        hint: "A life threatening allergic reaction"
    },
    {
        word: "Hehehehehehehehehehehehehehehehehehehehehehehehehehehehehehe!",
        hint: "hELWU"
    },
    {
        word: "EVT",
        hint: "A continuous function on a closed interval must attain both a maximum and a minimum value on that interval"
    },
    {
        word: "_",
        hint: "A character on the keyboard"
    }
 ]