import React, { useState, useRef, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
// import { CourseContext } from "../App";
import axios from "axios";
// import Header from "../Components/Header1";
// import Footer from "../Components/Footer";

import { Course } from "/src/Pages/CoursePages/Courses.jsx";

const quizDataBySection = {
    "Intro to Game Dev": [
        {
            question: "What does HTML stand for?",
            options: [
                "Hyper Text Markup Language",
                "High Text Machine Language",
                "Hyperloop Machine Language",
                "None of the above",
            ],
            answer: "Hyper Text Markup Language",
        },
        {
            question: "What is the correct way to declare a variable in JavaScript?",
            options: ["var myVar;", "variable myVar;", "int myVar;", "v myVar;"],
            answer: "var myVar;",
        },
        {
            question: "Which tag is used to include JavaScript in HTML?",
            options: ["<script>", "<javascript>", "<js>", "<code>"],
            answer: "<script>",
        },
    ],
};

const pptUrls = {
    "unit 1": "https://docs.google.com/presentation/d/e/2PACX-1vQ0ML_3S2UC4XPhSdtAFHNIa1GWoNgl6_PI8UUsFxbGOe6SPmd5FjJXq5KWEORMpcjWsCFAA7HNbOLP/pubembed?start=false&loop=false&delayms=3000",
    "unit 2": "https://docs.google.com/presentation/d/e/2PACX-1vR2.../embed?start=false&loop=false&delayms=3000",
    "unit 3": "https://docs.google.com/presentation/d/e/2PACX-1vT3.../embed?start=false&loop=false&delayms=3000",
};

<iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQ0ML_3S2UC4XPhSdtAFHNIa1GWoNgl6_PI8UUsFxbGOe6SPmd5FjJXq5KWEORMpcjWsCFAA7HNbOLP/pubembed?start=false&loop=false&delayms=3000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>

export default function CourseContent() {
    const { id } = useParams();
    // const { Course } = useContext(CourseContext);
    const Content = Course.find((course) => course.id === parseInt(id));
    const [courseData, setCourseData] = useState([]);
    const [currentVideo, setCurrentVideo] = useState(null);
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [unlockedVideos, setUnlockedVideos] = useState([]);
    const [completedVideos, setCompletedVideos] = useState({});
    const [allVideosCompleted, setAllVideosCompleted] = useState(false);
    const [Certificate, setCertificate] = useState("");
    const [mode, setMode] = useState("video");
    const playerRef = useRef(null);
    const navigate = useNavigate();
    const Uemail = localStorage.getItem("userEmail");

    const [current, setCurrent] = useState(0);
    const [score, setScore] = useState(0);
    const [selected, setSelected] = useState("");
    const [showResult, setShowResult] = useState(false);
    const [validated, setValidated] = useState(false);
    const [watchedPercent, setWatchedPercent] = useState(0);
    const [videoDescription, setVideoDescription] = useState("");

    const getVideoIndex = (section, title) => {
        const sec = courseData.find((s) => s.section === section);
        if (!sec) return -1;
        return sec.videos.findIndex((v) => v.title === title);
    };

    const isLastVideo = () => {
        if (!courseData.length || !currentVideo) return false;
        const lastSection = courseData[courseData.length - 1];
        const lastVideoIndex = lastSection.videos.length - 1;
        return (
            currentVideo.section === lastSection.section &&
            getVideoIndex(currentVideo.section, currentVideo.title) === lastVideoIndex
        );
    };

    useEffect(() => {
        const formattedChapters = [
            {
                section: "Intro to Game Dev",
                videos: [
                    { title: "unit 1", url: "" },
                    { title: "unit 2", url: "" },
                    { title: "unit 3", url: "" },
                ],
            },
        ];
        setCertificate("Game Development Course");
        setCourseData(formattedChapters);

        if (formattedChapters.length && formattedChapters[0].videos.length) {
            setCurrentVideo({
                ...formattedChapters[0].videos[0],
                section: formattedChapters[0].section,
            });

            const allVideoKeys = formattedChapters.flatMap((section) =>
                section.videos.map((_, index) => `${section.section}_${index}`)
            );
            setUnlockedVideos(allVideoKeys);
        }
    }, [id]);

    useEffect(() => {
        let total = 0;
        let complete = 0;
        courseData.forEach((sec) => {
            total += sec.videos.length;
            complete += completedVideos[sec.section]?.size || 0;
        });
        setAllVideosCompleted(total > 0 && complete === total);
    }, [completedVideos, courseData]);

    useEffect(() => {
        if (!currentVideo) return;
        const descriptions = {
            "unit 1": "This video introduces the basics of game development, including key concepts and tools.",
            "unit 2": "Learn how to set up your development environment for building games.",
            "unit 3": "An overview of game design principles and best practices.",
        };
        setVideoDescription(descriptions[currentVideo.title] || "This video covers important content related to the course.");
    }, [currentVideo]);

    const handleOptionClick = (option) => setSelected(option);
    const quizData = quizDataBySection[currentVideo?.section] || [];

    const handleNext = () => {
        if (selected === quizData[current].answer) setScore((s) => s + 1);
        if (current + 1 < quizData.length) {
            setCurrent((c) => c + 1);
            setSelected("");
        } else setShowResult(true);
    };

    const restartQuiz = () => {
        setCurrent(0);
        setScore(0);
        setSelected("");
        setShowResult(false);
        setValidated(false);
        setWatchedPercent(0);
    };

    const goToNextVideo = () => {
        const idx = getVideoIndex(currentVideo.section, currentVideo.title);
        if (idx !== -1) {
            setCompletedVideos((prev) => {
                const set = new Set(prev[currentVideo.section] || []);
                set.add(idx);
                return { ...prev, [currentVideo.section]: set };
            });
        }

        let found = false,
            next = null;
        for (let s of courseData) {
            for (let v of s.videos) {
                if (found) {
                    next = { ...v, section: s.section };
                    break;
                }
                if (s.section === currentVideo.section && v.title === currentVideo.title) {
                    found = true;
                }
            }
            if (next) break;
        }

        if (next) {
            setCurrentVideo(next);
            setMode("video");
            restartQuiz();
        }
    };

    function Generate() {
        axios
            .post("http://127.0.0.1:8000/api/createcertificate/", {
                email: Uemail,
                course: Certificate,
            })
            .then(() => {
                alert("Certificate generated successfully");
                navigate("/certificate-download");
            })
            .catch(console.error);
    }

    const videoTextContent = {
        "unit 1": `
Objectives:
    Game design involves creating interactive experiences for players, and establishing clear objectives is crucial to guide the development process. The objectives of game design can vary depending on the type of game, target audience, and overall vision, but some common objectives include:
 
1. Flow - The core of game mechanics design is to provide users a sense of flow and engagement. Gome mechanics are designed so that users feel compelled to move from one challenge to the next to progress through the game. This helps keep players invested in the experience for longer, Increasing user engagement and retention Software's Required :
    Unity
    Adobe Photoshop
    Adobe Illustrator
    Blender (for 3D modeling)
    Autodesk Maya
    Visual Studio

1. Introduction the game production process 
2. game design roles
3. Specialization and T-shaping
4. Software development models
5. Validation funnel in-game development
6. Role of a games publisher


We had this great idea, and now what? Now it’s time write down the idea and start to think about how we can shape that idea and make it into a game.

The original concept is just a game idea from where to start building the game. This can be one example of an idea:

Make a game about colour matching”. As you can see, on this phase we didn’t find any game play, story, character etc etc. But we simply defined a phrase that describes the essence of the game.
For example, for our game DagAdvenures. We defined this idea:

A 2d platform game, with a fantasy and funny theme” that’s all. We had the base concept of how our game was going to be, no more no less.
If you take the workflow of game art outsourcing studio, there will be a different workflow, which is also necessary to understand.
Once you wrote down the concept you can also define:
1   The market.
2   The audience.
3   The platforms where to publish the game.
4   The competitor.

This is the case where you start to define the following points:
1   Define the story.
2   Create timelines.
3   Storyboards.
4   Create a paper prototipe of your game.
5   Level Design.
6  Gameplay mechanics.
7   Costs of the game (making and maintenance).
8   Create a game design document.

This phase of the game development pipeline is where your game start to have a shape. During the pre production phase, you define all the details of the game. It’s the most important phase and so try to put a lot of thoughts in this phase. If you are an indie team with no resources besides time, think really careful of what you can do based on the resources that you have.

Most of the time, people come with great ideas but often, these ideas are too big to develop for an indie team. Think carefully if  you have the resources to develop your great ideas, otherwise, it’s better to do something small but at least be sure to complete it.

Often on this phase you’re going to create a really quick game prototype, just to be sure that your game concept idea is going to work well.At the end of this phase, it’s also important to know that your game is fun. Otherwise no one will play it and so, no one will buy it.

The Game Design Document (GDD)

A Game Design Document (GDD) is essentially the game's north star. It’s a living document which helps everyone understand and get on board with the greater vision of the project.

Our Game Design courses will prepare you to be career-ready in 12 months.

1   The GDD includes things like:
2   The idea or concept
Genre
3   Story and characters
4   Core game mechanics 
Gameplay
5   Level and world design
6   Art and/or sketches
7   Monetization strategy

As a living document, the GDD is continuously updated and refined throughout production. This could be due to technical or financial restraints, or simply realizing that things just don’t look, play or work as well as you had initially hoped.

Many people, especially smaller developers, like to use more agile development techniques which are less about process and documentation and more about just building things. However, larger studios prefer a different approach.

A GDD keeps you organized, helps identify potential risks, and lets you see ahead of time who you may need to hire/outsource to in order to bring your project to life. Your game idea may seem fairly straightforward, but once you lay it out in a GDD, you might soon realize just how big and resource-heavy your project is.
Projects without a plan are much more likely to run over time and budget.

Another reason to have a GDD is to help pitch and finance your game. Potential investors will want to see a solid plan before investing.
Finally, the GDD will help you market your product once it’s ready to be released.

On the pre production phase of the game development pipeline, we have defined every aspect of the game. Now it’s time to bring it to life. Here is where the designer, engineers, producers and basically all the members of the team will work together to bring the game to life.
It’s important to understand that making changes in this phase will cost a lot in terms of time and money to invest. 
Usually if something is wrong in your game, it’s much better to find it out in the pre-production phase, that’s why we build a prototype of the game.
The producers will work with the rest of the team to make sure that everyone is on the same page and that the schedule that they have created can be followed by the engineers, designers, artists, etc.
This is also the phase where you start to do marketing. You’ll probably have a lot of content to show and you want the world to know about it.
At the end of the production phase your team should have an Alpha version of the game. Now it’s time to do some internal testing and fixing all the main bugs until we have a stable and fully featured product.
After the testing of the Alpha, we’ll call it a beta version.
 At this phase the game is usually shipped to a large number of testers and we’ll listen to their feedback and fix all minor bugs that they report. At the end of this phase we should have a beta version of the game, which is: stable, fully featured and bugs free.

 The only thing left to do is to ship the game to the store and hope to make some money
The post production phase

Now is the time to get your game to an audience as large as possible. The marketing team  continue to work hard to get the game covered by magazines, blogs, youtubers etc etc.

This is also the phase where the developer will continue to improve the game in case new bugs will come out. Developers can also add new features to expand the game in order to increase the retention of the game.

ll the phases are important but remember that costs of changes during the development phase is really high. So really spend all the time that you need on the pre production, and be sure that all the features that you want can be developed on schedule. Check twice before going to production, because at that point, the game is defined and making changes is really difficult.
Key game development roles and Responsibilities

Game developer vary  depending on the size and type of studio. These are some of the common positions you'll find.
Project manager 

The project manager makes sure the game development process runs smoothly, milestones are met, risks are anticipated/mitigated, and team members are doing what they’re supposed to. They are often the centre of communication between the dev and design teams and executives. Project managers are exceptionally organized and must have excellent communication and people skills.
Game developers/programmers

Game programmers help develop games by turning design concepts into code to create fully playable games. (Read more: How to become a game programmer or the difference between game programming and game development.)
Programmers are often software engineers or computer scientists with a strong programming background, plus a combination of creativity, math skills and patience to successfully code ideas into interactive visuals and sounds. They ensure the game runs smoothly. 
here are many different aspects of programming, including:

1   Building a customized base engine for the game
2   Scripting functions, events, interactions
3   Creating physics (e.g. gravity differences in a game set in space)
4   Developing and modifying 3D graphic renders
5   Simulating artificial intelligence in opponents 
6   Adding sound effects, music, and voice-overs 
7   Implementing game logic and mechanics
8   Creating the user interface
9   Writing code specific to keyboard, mice, or joysticks
10  Making it possible for players to compete or cooperate via LAN or the internet
11  Developing custom tools 
12  Porting code between platforms
13  Implementing algorithms, addressing memory requirements and caching issues
14  Identifying and fixing bugs  

In larger studios, you will find specialists dedicated just to AI programming for the game, or employees who only work on the user interface.

The average programmer makes USD $59,010 per year, however, a senior or lead programmer can earn in excess of USD $100,000 per year. A game programming course can equip you with the skills to get your first game programming job in the industry. 

Level designers
A video game level designer is responsible for creating interesting and fun levels. Their job is to keep the player focused on moving through the game and achieving their goal or mission while reducing the potential of confusion.
Because games are far more complex than they used to be, it’s common at larger studios to find game designers dedicated just to level design.

Game artists
Game artists can include concept artists, animators, 3D modelers and FX artists. 
This group is responsible for bringing color, movement, and life to the game.
While a concept artist is mostly active during pre-production when they’re designing the initial look (typically in 2D), they may be brought in again later in the game development process if new elements are added or the game changes course. 
A 3D concept artist (which could be the same artist) uses digital sculpting software like ZBrush, Maya and Photoshop to create 3D props, assets and environments. They’ll also add textures and details. 


3D modelers
3D modelers create models of people, objects, props, weapons, and environments which can then be textured and animated as needed. Modelers need to know how to gather and use high-quality reference materials, especially if they’re replicating real objects (e.g. an AK-47, Buzzard Attack Chopper, the Eiffel Tower, etc).
Modelers may use photos of the objects they’re creating, or drones if the object is much larger and they need an aerial view. If the game is all fantasy, they’ll need to reference the concept art and use their imagination to come up with something new and unique.
Game animators
Game animators add depth and realism by adding believable movement to characters, objects, and environments. They’ll create storyboards and map out key animation scenes that align with the game’s storyline.
Animators often need to conduct lots of research (e.g. observing how animals behave and interact with others if working on an animal-based game). Motion capture data can also be used to help create more lifelike animations. 
Target Audience:
Demographic Analysis:
Identify the demographic characteristics of your potential players, such as age, gender, interests, and gaming preferences.
Consider conducting market research or surveys to gather insights into your target audience.

Player Persona Creation:
Create player personas based on your demographic analysis, representing different segments of your target audience.
Persona development helps you understand the motivations, behaviors, and needs of your players, allowing you to design a game that resonates with them.
Engagement Platforms:

Determine where your target audience spends time online and offline, including social media platforms, gaming communities, forums, and events.
Tailor your marketing efforts to reach your audience effectively on these platforms.

Feedback Collection:

Solicit feedback from your target audience during the development process through playtesting, surveys, and focus groups.
Use player feedback to iterate on your game and improve its appeal to your audience
Adventure Games
Adventure games emphasize story, exploration, puzzle solving, and inventory management over action. Players uncover the narrative at their own pace through point-and-click interfaces or 3D worlds. Puzzles test players’ logic and inventory management skills.
Simulation Games
Simulations replicate real-world activities, from piloting vehicles to running a business. Some aim for utter realism, while others take the artistic license of game art services for fun and accessibility. Management, construction, sports, and vehicles are common subjects.

[full intro content here]`,
        "unit 2": `Objectives:

Game design involves creating interactive experiences for players, and establishing clear objectives is crucial to guide the development process. The objectives of game design can vary depending on the type of game, target audience, and overall vision, but some common objectives include:
Outcomes:
Define and identify key components of a game, including rules, mechanics, dynamics, and aesthetics.

Analyze existing games to understand their design choices, mechanics, and player experiences.

Foster creative thinking and innovation in designing gameplay elements, characters, storylines, and game worlds.

Focus on designing games with the player's experience in mind, considering player motivations, preferences, and engagement.

Develop skills in creating game prototypes to test and iterate on game ideas.



Software's Required :

Unity
Adobe Photoshop
Adobe Illustrator
Blender (for 3D modeling)
Autodesk Maya
Visual Studio

Table of Contents

 S.NO
CONTENT
1.
Game Concept
2.
The hook or elevator pitch
3.
Age rating system
4.
Genre
5.
The ideation process
6.
game mechanics


Game Concept:

A game concept is the foundational idea or vision behind a video game. It encompasses the core elements and themes that define the game's identity, gameplay mechanics, story, and overall experience. A strong game concept serves as a blueprint for game development, guiding the design, art direction, and programming efforts throughout the production process.
Key components of a game concept include:

Theme and Setting: The overarching theme and setting of the game, including its time period, location, and atmosphere. This helps establish the game's tone and mood.

Gameplay Mechanics: The core gameplay mechanics and features that players will engage with. This includes the main objectives, player actions, controls, and progression systems.
Story and Narrative: The narrative premise, backstory, and characters that drive the game's storyline. This can include character motivations, conflicts, and plot twists
Art Style and Visuals: The art style, visual aesthetics, and graphical direction of the game. This includes character designs, environments, animations, and special effects.

Sound and Music: The audio elements, including sound effects, background music, voice acting, and ambient soundscape. These contribute to the game's atmosphere and immersion.
Target Audience: The intended audience or demographic for the game, which influences design decisions and marketing strategies
Unique Selling Points: The standout features or aspects that differentiate the game from others in the market. This can include innovative gameplay mechanics, compelling storytelling, or cutting-edge technology.
Platform and Distribution: The platforms on which the game will be released (e.g., PC, console, mobile) and the distribution channels (e.g., digital storefronts, physical copies).
Overall, a compelling game concept serves as a foundation for game development, inspiring creativity and guiding the team toward creating a cohesive and engaging player experience. It's essential for developers to refine and iterate on their game concept to ensure it resonates with players and aligns with their vision for the final product
The hook or elevator pitch is a concise and compelling summary of a game concept that can be delivered in a short amount of time, typically within the duration of an elevator ride. It aims to grab the listener's attention and communicate the essence of the game in a memorable way. Here's an example of a hook or elevator pitch for a game concept:

"In our game, 'Echoes of Elysium,' players embark on an epic journey through a vibrant fantasy world where music is magic. As a young bard tasked with restoring harmony to a fractured kingdom, you'll explore lush landscapes, unravel ancient mysteries, and harness the power of enchanted melodies to shape the world around you. With rich storytelling, innovative gameplay mechanics, and stunning visuals, 'Echoes of Elysium' offers an immersive adventure like no other."

This elevator pitch highlights the key elements of the game concept, including the setting (a fantasy world), the protagonist's role (a bard), the central theme (the power of music), and the core gameplay mechanics (exploration, puzzle-solving, and musical interaction). It aims to intrigue the listener and pique their curiosity about the game, enticing them to learn more.
Description:
Start with a captivating and concise overview of your game that grabs attention and sets the tone.

Example:
"Embark on an epic adventure in a sprawling open world filled with mystery and danger. Explore ancient ruins, uncover hidden secrets, and forge alliances in a quest to save your homeland from an impending darkness."
Key Feature Set:
Next, outline the key features of your game in bullet points to highlight its unique selling points and core gameplay elements.
Immersive Open World:
Explore a vast and immersive world filled with diverse landscapes, towns, and dungeons to discover.
Rich Narrative Experience:
Engage with compelling characters and follow a deep, branching storyline that reacts to your choices.
Dynamic Combat System:
Master a fluid combat system with tactical abilities and combo mechanics to overcome formidable foes.
Player Choices and Consequences:
Shape the outcome of the story through impactful decisions that influence the world and characters around you
Crafting and Customization:
Gather resources, craft powerful gear, and customize your character's appearance and abilities.

Multiplayer Cooperative Gameplay (if applicable):
Join forces with friends in multiplayer modes to tackle challenges and quests together.

Crafting the Description:
Combine the overview and key features into a cohesive and engaging description that provides a clear picture of what players can expect from your game
Example:
"In 'Realm of Legends,' immerse yourself in a breathtaking open world where every corner is teeming with adventure. Uncover the secrets of a rich narrative that responds to your choices, from forging alliances with factions to shaping the destiny of kingdoms. Master the art of combat with a dynamic system that rewards skill and strategy. Whether you're exploring ancient ruins solo or teaming up with friends for epic multiplayer battles, 'Realm of Legends' offers limitless possibilities for heroic deeds and legendary triumphs."
Tips for Crafting a Compelling Description:

Be Concise: Keep the description succinct and focused on the most compelling aspects of your game.
 Highlight Unique Features: Emphasize what sets your game apart from others in the genre.
Use Vivid Language: Create imagery and evoke emotions that resonate with your target audience.
Include a Call to Action: Encourage players to engage with your game, whether it's visiting a website, joining a community, or trying a demo.
By following this approach, you can create a description that effectively communicates the key features and selling points of your game, capturing the interest of potential players and setting expectations for an exciting gameplay experience
Unique Selling Proposition:
Identifying your Unique Selling Proposition (USP) as a game designer or a game development platform involves pinpointing what sets you apart from others in the industry. Here's a step-by-step guide to help you find your USP:
Understand Your Strengths: Assess your skills, experience, and passions. What aspects of game design are you particularly good at? Are you an expert in narrative design, game mechanics, user experience, or something else?
Identify Market Needs: Study the gaming market to identify gaps or areas with less competition. Look for unmet player needs or underserved niches. Your USP could be filling these gaps or catering to specific player preferences
3.Analyze Competitors: Examine other game designers or platforms in your space. What are they offering? How do they position themselves? Identifying what they lack or where they fall short can help you carve out your niche.
4.Define Your Unique Value: Determine what makes your approach to game design or your platform different and valuable. It could be your unique creative vision, a particular design philosophy, innovative game mechanics, a strong focus on storytelling, or exceptional user support.
5.Leverage Your Story: Your personal background, experiences, and journey as a game designer can also be part of your USP. If you have a compelling story or unique perspective, use it to your advantage in branding and marketing.
6.Focus on Quality: Emphasize the quality of your work or the games developed on your platform. Whether it's stunning visuals, immersive gameplay, or polished mechanics, quality can be a powerful differentiator.
7.Build a Community: Foster a strong community around your brand or platform. Engage with your audience, listen to their feedback, and involve them in the game development process. A vibrant community can enhance the overall experience and set you apart from competitors.
8.Emphasize Innovation: Showcase your ability to innovate and push the boundaries of game design. Whether it's through groundbreaking technologies, novel gameplay mechanics, or unique art styles, innovation can help you stand out in a crowded market.

9.Consistency and Reliability: Deliver consistently high-quality experiences or services. Establishing a reputation for reliability and excellence can become a key part of your USP.

10.Test and Iterate: Your USP may evolve over time as you gain more experience and insight into the industry. Continuously test and iterate on your approach, staying flexible and adaptive to changes in the market and player preferences.

Remember, finding your USP is an ongoing process that requires self-reflection, market analysis, and a willingness to adapt. By identifying what makes you unique and valuable, you can better position yourself as a game designer or a game development platform in the competitive gaming industry.
Target Audience:
Demographic Analysis:
Identify the demographic characteristics of your potential players, such as age, gender, interests, and gaming preferences.
Consider conducting market research or surveys to gather insights into your target audience.

Player Persona Creation:
Create player personas based on your demographic analysis, representing different segments of your target audience.
Persona development helps you understand the motivations, behaviors, and needs of your players, allowing you to design a game that resonates with them.
Engagement Platforms:

Determine where your target audience spends time online and offline, including social media platforms, gaming communities, forums, and events.
Tailor your marketing efforts to reach your audience effectively on these platforms.

Feedback Collection:

Solicit feedback from your target audience during the development process through playtesting, surveys, and focus groups.
Use player feedback to iterate on your game and improve its appeal to your audience.
Age Rating Systems:
ESRB (Entertainment Software Rating Board):
The ESRB provides age ratings and content descriptors for video games in North America.
Ratings include "Early Childhood," "Everyone," "Everyone 10+," "Teen," "Mature," and "Adults Only."
Content descriptors indicate elements such as violence, language, and suggestive themes.
PEGI (Pan European Game Information):
PEGI provides age ratings and content descriptors for video games in Europe.
Ratings include "3," "7," "12," "16," and "18," with additional descriptors indicating potentially harmful content.
CERO (Computer Entertainment Rating Organization):
CERO assigns age ratings to video games in Japan.
Ratings include "A" (all ages), "B" (12+), "C" (15+), "D" (17+), and "Z" (18+).
Other Rating Systems:
Other regions may have their own rating systems, such as the Australian Classification Board (ACB) in Australia and the Video Standards Council Rating Board (VSC) in the UK.
Genre:
Genre Definition:
Define the genre of your game based on its core gameplay mechanics, thematic elements, and player experience.
Common game genres include action, adventure, role-playing, strategy, simulation, puzzle, and multiplayer.
Audience Preferences:
Consider the preferences and interests of your target audience when selecting a genre.
Research market trends and player demographics to identify popular genres and emerging opportunities.
Game Design Elements:
Determine the game design elements and feature that define your chosen genre.
Explore innovative twists or combinations of genres to create a unique gameplay experience.
Competitive Landscape:
Analyze the competitive landscape within your chosen genre to understand market saturation, player expectations, and opportunities for differentiation.
Identify successful games in your genre and study their strengths and weaknesses.
Adventure Games
Adventure games emphasize story, exploration, puzzle solving, and inventory management over action. Players uncover the narrative at their own pace through point-and-click interfaces or 3D worlds. Puzzles test players’ logic and inventory management skills.
Action Games
Action games test and reward players’ reflexes, hand-eye coordination, and reaction time. The gameplay is fast-paced, with a focus on combat, explosions, and epic moments. Popular subgenres include shooters, fighting games, hack and slash, and more.
SPorts Games
Sports games let players experience their favorite sports virtually on the field and as a manager. Controls and rules mirror professional sporting events with varying degrees of realism. Management modes also allow guiding a franchise to championships. This game genre is always
Simulation Games
Simulations replicate real-world activities, from piloting vehicles to running a business. Some aim for utter realism, while others take the artistic license of game art services for fun and accessibility. Management, construction, sports, and vehicles are common subjects.
Platformers
Platformers are 2D, side-scrolling games challenging players to run, jump, and climb through perilous courses. Hazards and enemies must be overcome with precise timing and dexterity. Platformers dominated early gaming and remain popular today.
Role-playing games (RPGs)
RPGs have players customize characters with unique skills, items, and abilities. Rich stories unfold through exploration, quests, and side activities. Combat blends strategic party management with action, turn-based, or tactical systems.
Puzzle Games
Puzzle games challenge players’ logic, pattern recognition, and problem-solving skills. Completing puzzles and unraveling gameplay mysteries delivers intense satisfaction. Popular subgenres include physics, hidden objects, and matching puzzles.
Business Model:
Monetization Strategy:
Choose a monetization strategy that aligns with your game's genre, target audience, and gameplay experience.
Common monetization models include premium, free-to-play with in-app purchases (IAP), subscription-based, ad-supported, and hybrid models.
Value Proposition:
Define your game's unique value proposition and how it translates into revenue generation.
Consider factors such as player engagement, retention, and willingness to pay for in-game content or features.
Player Experience:
Balance monetization with the player experience to ensure that your chosen business model enhances rather than detracts from gameplay enjoyment.
Implement monetization mechanics that provide value to players and incentivize spending without creating a pay-to-win environment.
Market Trends:
Stay informed about industry trends and shifts in player behavior to adapt your business model accordingly.
Experiment with new monetization approaches and revenue streams to capitalize on emerging opportunities.

Long-Term Sustainability:
Build a sustainable business model that supports ongoing development, content updates, and community engagement.
Consider the scalability and flexibility of your monetization strategy to accommodate changes in player preferences and market dynamics.
Prototyping
A video game prototype is a raw test that checks functionality, user experience, gameplay, mechanics, and art direction. 
Prototyping happens in pre-production to test whether or not the game idea will work, and if it is worthwhile to pursue. Many ideas do not make it past this stage.
The team will often start with paper designs to test theories and work out many of the nuances of a game or a series of systems quickly, easily and cost-effectively. 













...
[full environment content here]`,
        "unit 3": `Objectives:

Game design involves creating interactive experiences for players, and establishing clear objectives is crucial to guide the development process. The objectives of game design can vary depending on the type of game, target audience, and overall vision, but some common objectives include:

Outcomes:
Define and identify key components of a game, including rules, mechanics, dynamics, and aesthetics.

Analyze existing games to understand their design choices, mechanics, and player experiences.

Foster creative thinking and innovation in designing gameplay elements, characters, storylines, and game worlds.

Focus on designing games with the player's experience in mind, considering player motivations, preferences, and engagement.

Develop skills in creating game prototypes to test and iterate on game ideas.
Software's Required :

Unity
Adobe Photoshop
Adobe Illustrator
Blender (for 3D modeling)
Autodesk Maya
Visual Studio

table of Contents
 S.NO
CONTENT
1.
What is a game mechanics
2.
Example of game mechanics
3.
Mechanics and dynamics 
4.
Rules and game mechanics
5.
List of common game mechanics
WHAT ARE GAME MECHANICS?

Game mechanics are the rules, elements, and processes that make up a game. In essence, they define how the game works and what defines success or failure in the game. Game mechanics include player objectives and relvards, character interactions, level design, resource management systems, and more.

In general what are game mechanics? Game mechanics are what bring life to a game. They inform the players how to progress through the game and interact with other characters.

A good set of mechanics will provide an engaging experience for players while ensuring they feel challenged without difficulty. A game development company will often use game mechanics to differentiate their games from other titles and make them stand out.
TYPES OF GAME MECHANICS

a. Action Mechanics

Action Mechanics are a common feature in video games, and involve the player controlling characters or objects to interact with the environment rapidly. Examples of action mechanics include jumping. dodging obstacles, and shooting projectiles.

b. Strategy Mechanics

Strategy mechanics require players to use their problem-solving skills in order to progress through levels. These types of game mechanics invalve making decisions that move the game fanward in a certain direction. Examples of strategy mechanics include resource management, puzzle solving and plaining combut strategies.






...
[full design content here]`,
    };

    if (!currentVideo) return <div>Loading...</div>;

    return (
        <div className="flex flex-col">
            {/* <Header /> */}
            <div className="flex">
                {/* Sidebar */}
                <aside className="w-72 bg-gray-100 p-4 h-screen fixed top-20 left-0 overflow-y-scroll">
                    <h2 className="text-xl font-bold mb-4">Course Content</h2>
                    {courseData.map((section, sIdx) => (
                        <div key={sIdx} className="mb-4">
                            <h3 className="font-semibold">{section.section}</h3>
                            {section.videos.map((video, vIdx) => {
                                const key = `${section.section}_${vIdx}`;
                                const isUnlocked = unlockedVideos.includes(key);
                                return (
                                    <div
                                        key={vIdx}
                                        onClick={() =>
                                            isUnlocked &&
                                            (setCurrentVideo({ ...video, section: section.section }), setMode("video"))
                                        }
                                        className={`cursor-pointer pl-4 py-2 ${isUnlocked ? "text-black" : "text-gray-400"
                                            }`}
                                    >
                                        🎬 {video.title}
                                    </div>
                                );
                            })}
                            <div
                                className="pl-4 py-2 cursor-pointer text-blue-600"
                                onClick={() => setMode("quiz")}
                            >
                                📝 Take Quiz
                            </div>
                        </div>
                    ))}
                </aside>

                {/* Main Content */}
                <main className="flex-1 p-6 relative items-end  ml-72 justify-end overflow-hidden">
                    {mode === "video" ? (
                        // <>
                        //     <div className="h-[500px] lg:w-[920px] 2xl:w-[1580px] mb-2 p-6 bg-gray-100 overflow-y-auto">
                        //         <textarea
                        //             rows="4"
                        //             cols="50"
                        //             className="w-full h-full resize-none p-4 font-bold text-[#12314a] placeholder-[#000000]"
                        //             value={videoTextContent[currentVideo.title] || "Content not found"}
                        //             readOnly
                        //         ></textarea>
                        //     </div>
                        //     <h2 className="text-2xl font-semibold mb-1 font-news">{currentVideo.title}</h2>
                        //     <p className="mb-4 text-gray-700">{videoDescription}</p>
                        // </>
                        <>
                        <div className="h-[500px] lg:w-[920px] 2xl:w-[1580px] mb-4 p-6 bg-gray-100 overflow-y-auto">
                        {pptUrls[currentVideo.title] ? (
                            <iframe
                                title={currentVideo.title}
                                src={pptUrls[currentVideo.title]}
                                width="100%"
                                height="100%"
                                allowFullScreen
                                className="w-full h-full border-0 rounded shadow"
                            />
                        ) : (
                            <p className="text-center text-gray-500">PPT not available for this unit.</p>
                        )}
                    </div>
                    <h2 className="text-2xl font-semibold mb-1 font-news">{currentVideo.title}</h2>
                    <p className="mb-4 text-gray-700">{videoDescription}</p>
                </>
                    ) : (
                        <div className="bg-white p-6 rounded shadow-md">
                            {showResult ? (
                                <div className="text-center">
                                    <h2 className="text-2xl text-green-600 font-bold">Quiz Completed</h2>
                                    <p className="mt-2">Score: {score} / {quizData.length}</p>
                                    <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded" onClick={goToNextVideo}>Go to Next Course</button>
                                    {allVideosCompleted && (
                                        <button className="mt-4 ml-4 px-4 py-2 bg-blue-600 text-white rounded" onClick={Generate}>Get Certificate</button>
                                    )}
                                </div>
                            ) : (
                                <>
                                    <h3 className="text-xl font-semibold mb-4">{quizData[current].question}</h3>
                                    <div className="grid grid-cols-2 gap-4">
                                        {quizData[current].options.map((opt, i) => (
                                            <button
                                                key={i}
                                                onClick={() => handleOptionClick(opt)}
                                                className={`p-3 border rounded ${selected === opt ? "bg-blue-500 text-white" : ""}`}
                                            >
                                                {opt}
                                            </button>
                                        ))}
                                    </div>
                                    <div className="text-right mt-4">
                                        <button
                                            onClick={handleNext}
                                            disabled={!selected}
                                            className="px-4 py-2 bg-[#1A3B7E] text-white rounded disabled:opacity-50"
                                        >
                                            {current + 1 === quizData.length ? "Submit" : "Next"}
                                        </button>
                                        <button
                                            onClick={goToNextVideo}
                                            className="ml-4 px-4 py-2 bg-gray-400 text-white rounded"
                                        >
                                            Skip Quiz
                                        </button>
                                    </div>
                                </>
                            )}
                        </div>
                    )}
                </main>
            </div>
            <div className="mt-32">
                {/* <Footer /> */}
            </div>
        </div>
    );
}
