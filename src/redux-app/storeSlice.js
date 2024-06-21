import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchvalue: [
        { logo: require('./img/logo1.jpeg'), name: 'Hello Neighbor 2 Alpha 1', rating: '3.6', app: 'Games', type: 'action & adventure', rate: 'Free', img: require('./img/img1.jpeg'), text: 'Every character in Hello Neighbor 2 is powered by multiple AIs that do everything in their power to protect'},

        { logo: require('./img/logo2.jpeg'), name: 'Hello Guest', rating: '3.9', app: 'Games', type: 'action & adventure', rate: 'Free', img: require('./img/img2.jpeg'), text: 'Welcome to Hello Guest, a stealth horror thriller about an advanced, self-learning AI. ' },

        { logo: require('./img/logo3.jpeg'), name: 'Hello Neighbor 2 Delux Edition ', rating: '3.6', app: 'Games', type: 'action & adventure', rate: '$47.99', img: require('./img/img3.jpeg'), text: 'Hello Neighbor 2 is a family friendly horror Games that invites you to a seemingly quiet town of Raven Brooks where everyone .' },

        { logo: require('./img/logo4.jpeg'), name: 'Hello Neighbor', rating: '3.6', app: 'Games', type: 'action & adventure', rate: '$29.99', img: require('./img/img4.jpeg'), text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quidem.' },

        { logo: require('./img/logo5.jpeg'), name: 'No Man s sky', rating: '3.6', app: 'Games', type: 'action & adventure +2', rate: 'included', img: require('./img/img5.jpeg'), text: 'game feels like an investigative journalist simulator - sneak around and find out your neighbor  secrets.' },

        { logo: require('./img/logo6.jpeg'), name: 'Hello Neighbor 2 Alpha 1', rating: '3.8', app: 'Games', type: 'action & adventure', rate: 'included', img: require('./img/img6.jpeg'), text: 'In No Man s Sky, every star is the light of a distant sun, each orbited ' },
        { logo: require('./img/logo7.png'), name: 'Hello Neighbor 2 Alpha 1', rating: '2.3', app: 'Games', type: 'puzzel & trivia', rate: 'Free', img: require('./img/img7.jpeg'), text: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, quidem.' },

        { logo: require('./img/app-1.png'), name: 'Disney+', rating: '4.2', app: 'Apps', type: 'Entertainment', rate: 'Free', img: require('./img/app_back-1.jpg'), text: "Disney+ is the streaming home of your favorite stories. With thousands of hours of entertainment from Disney, Pixar, Marvel, Star Wars, and National Geographic, theres always something to explore. Stream the latest movie releases, exclusive Original series, and a catalog of classics with more stories added every week. And, stream the hottest shows, movies and originals from Hulu, now available on Disney+ for Disney Bundle subscribers.*" },

    { logo: require('./img/app-2.png'), name: 'Netflix', rating: '4.4', app: 'Apps', type: 'Entertainment', rate: 'Free', img: require('./img/app_back-2.jpg'), text: "Looking for the most talked about TV shows and movies from around the world? They’re all on Netflix.We’ve got award-winning series, movies, documentaries, and stand-up specials. And with the mobile app, you get Netflix while you travel, commute, or just take a break" },

    { logo: require('./img/app-3.png'), name: 'Windows App', rating: '3.8', app: 'Apps', type: 'Productivity', rate: 'Free', img: require('./img/app_back-3.jpg'), text: "The Windows App is your gateway to Azure Virtual Desktop, Windows 365, Dev Box, and RPA Box, securely connecting you to Windows 11 or Windows 10 from any device of your choice. The Windows App is designed with a customizable home screen to cater to your unique workflow needs. And if you have multiple services across accounts, switching between them is a breeze with our easy account switching feature. The Windows App replaces the apps for Azure Virtual Desktop and Windows 365, simplifying the way to get to the Windows experience you know and love. " },
    { logo: require('./img/app-4.png'), name: 'Facebook', rating: '4.1', app: 'Apps', type: 'Social', rate: 'Free', img: require('./img/app_back-4.jpg'), text: "The Facebook app helps you connect with friends, family and communities of people who share your interests. Connecting with your friends and family, as well as discovering new ones, is easy with features such as Groups, Watch and Marketplace." },
    { logo: require('./img/app-5.png'), name: 'Adobe Acrobat Reader DC', rating: '3.3', app: 'Apps', type: 'Productivity', rate: 'Free', img: require('./img/app_back-5.png'), text: "Adobe Acrobat Reader is the free, trusted global standard for viewing, printing, e-signing, sharing, and annotating PDFs." },
    { logo: require('./img/app-6.png'), name: 'Hulu', rating: '4.2', app: 'Apps', type: 'Entertainment', rate: 'Free', img: require('./img/app_back-6.jpg'), text: "Get Hulu and stream everything you love. We’re talking thousands of shows and movies featuring current and classic TV, laugh-your-face-off TV, cry-your-eyes-out TV, and every other kind of TV. Get access to Hulu Originals you can’t stream anywhere else.." },

    { logo: require('./img/game-1.png'), name: 'Geometry World Dasher', rating: '3.6', app: 'Games', type: 'Action & adventure', rate: 'Free', img: require('./img/game_back-1.png'), text: "Jump in, brace yourself, and get ready for a real challenge! This won't be easy... Flex your clicky finger as you jump, fly and flip your way through dark caves and spiky obstacles. Discover the lands, play online levels and find the secrets hidden within the World of Geometry Dash!" },
    { logo: require('./img/game-2.png'), name: 'Hill Climb Racing', rating: '4.2', app: 'Games', type: 'Racing & flying', rate: 'Free', img: require('./img/game_back-2.jpg'), text: "One of the most addictive and entertaining physics based driving game ever made! And it's free!Meet Newton Bill, the young aspiring uphill racer. He is about to embark on a journey that takes him to where no ride has ever been before. With little respect to the laws of physics, Newton Bill will not rest until he has conquered the highest hills up on the moon!" },
    { logo: require('./img/game-3.jpg'), name: 'Dragon City', rating: '4.6', app: 'Games', type: 'Simulation', rate: 'Free', img: require('./img/game_back-3.jpg'), text: "Ready to master this dragon game and collect and breed tons of adorable fire-breathing dragons?Build a Dragon City on floating islands, fill it with farms, habitats, buildings…and tons of dragons! Train them to your will, feed and evolve them into stunning monsters and prove your might to be the top Dragon Master in the world" },
    { logo: require('./img/game-4.jpg'), name: 'Ultimate Car Driving Simulator Game', rating: '3.9', app: 'Games', type: 'Action & adventure', rate: 'Free', img: require('./img/game_back-4.jpg'), text: "Ultimate Car Driving Simulator is stunning 3D car racing and driving game! Drive fast high-speed racing one of the best car racing simulator games! Enjoy realistic car simulator ever" },
    { logo: require('./img/game-5.png'), name: 'Asphalt 9: Legends', rating: '4.5', app: 'Games', type: 'Racing & flying', rate: 'Free', img: require('./img/img6.jpeg'), text: "The fuel to get your pulse racing. Boost, drift and knock down your rivals in jacked-up real-world locations. Collect over 200 hypercars (and counting), and race with the most prestigious manufacturers, such as Ferrari, Porsche or Lamborghini. Get ready for greatness in this multi-award-winning arcade racing game" },
    { logo: require('./img/game-6.png'), name: 'Roblox', rating: '4.5', app: 'Games', type: 'Action & adventure', rate: 'Free', img: require('./img/game_back-6.jpg'), text: "Roblox is the ultimate virtual universe that lets you create, share experiences with friends, and be anything you can imagine. Join millions of people and discover an infinite variety of immersive experiences created by a global community!" },

   
    { logo: require('./img/tv-2.png'), name: 'Tubi - Free Movies and TV', rating: '4.6', app: 'Apps', type: 'Entertainment', rate: 'Free', img: require('./img/tv_back-2.jpg'), text: "Watch thousands of hit movies, TV series, and anime for free. Tubi is 100% legal unlimited streaming, with no credit cards and no subscription required. Choose what you want to watch, when you want to watch it, with fewer ads than regular TV. Tubi is the largest free streaming service" },
    { logo: require('./img/tv-3.png'), name: 'Apple TV', rating: '2.8', app: 'Apps', type: 'Entertainment', rate: 'Free', img: require('./img/tv_back-3.jpg'), text: "Get all your favorite TV, all in one app. Watch critically acclaimed Apple Original series and films, as well as live MLB games with Friday Night Baseball on Apple TV+. Get every live Major League Soccer match with MLS Season Pass. Buy or rent new and popular movies. All curated and personalized for you" },
    { logo: require('./img/tv-4.png'), name: 'Movies & TV', rating: '4.1', app: 'Apps', type: 'Entertainment', rate: 'Free', img: require('./img/tv_back-4.jpg'), text: "With Movies & TV, you can rent or buy the latest hit movies and commercial-free TV shows and watch them using the Movies & TV app on your enabled Xbox consoles and your Windows devices. With a huge catalog of entertainment content, you'll always find something great to watch. Content shown may not be available in all markets." },
    { logo: require('./img/tv-5.png'), name: 'Pluto TV', rating: '4.3', app: 'Apps', type: 'Entertainment', rate: 'Free', img: require('./img/tv_back-5.jpg'), text: "Pluto TV is free TV! The leading free streaming TV service where you can watch anytime on your Xbox One device 100s of live TV channels and 1000s of blockbuster movies and binge-worthy TV show series On Demand. Every month watch new hit movies and shows. Pluto TV also offers over 50 channels in Spanish, including native language and dubbed movies, reality TV, telenovelas, crime, sports, and more. " },
    { logo: require('./img/tv-6.png'), name: 'Netflix', rating: '4.4', app: 'Apps', type: 'Entertainment', rate: 'Free', img: require('./img/tv_back-6.jpg'), text: "Disney+ is the streaming home of your favorite stories. With thousands of hours of entertainment from Disney, Pixar, Marvel, Star Wars, and National Geographic, theres always something to explore. Stream the latest movie releases, exclusive Original series, and a catalog of classics with more stories added every week. And, stream the hottest shows, movies and originals from Hulu, now available on Disney+ for Disney Bundle subscribers.*" },

    { logo: require('./img/store-1.png'), name: 'Epic Games Store', rating: '4.3', app: 'Apps', type: 'Entertainment', rate: 'Free', img: require('./img/store_back-1.png'), text: "The Epic Games Store app is your gateway to a world of games, apps, and creative tools for PC and Mac. Sign up for an Epic Games Account, download the launcher and get a free game every week!" },
    { logo: require('./img/store-2.png'), name: 'Corel Painter Essentials Microsoft Store Edition', rating: '2.8', app: 'Apps', type: 'Multimedia design', rate: 'Free', img: require('./img/store_back-2.jpg'), text: "Sign-up for a subscription and get your FIRST MONTH FREE! Try Painter® Essentials™ - the fun and uncomplicated painting software for beginners." },
    { logo: require('./img/store-3.png'), name: 'CorelDRAW Microsoft Store Edition', rating: '3.8', app: 'Apps', type: 'Multimedia design', rate: 'Free', img: require('./img/store_back-3.jpg'), text: "Get your FIRST WEEK FREE when you sign-up for a subscription plan. Try the full-featured product and cancel at any time before the FREE WEEK is over, at no cost to you." },
    { logo: require('./img/store-4.png'), name: 'Corel Painter Microsoft Store Edition', rating: '3.4', app: 'Apps', type: 'Multimedia design', rate: 'Free', img: require('./img/store_back-4.jpg'), text: "Sign-up for a subscription and get your FIRST MONTH FREE! Create next-level results with Painter® - your trusted, professional digital art software." },
    { logo: require('./img/store-5.png'), name: 'WinZip Microsoft Store Edition', rating: '2.1', app: 'Apps', type: 'Productivity', rate: 'Free', img: require('./img/store_back-5.jpg'), text: "Your all-in-one compression and file management system is here. With a free 1-month trial, explore WinZip’s exceptional productivity features, like:" },
    { logo: require('./img/store-6.png'), name: 'Augmented Store at Home MR', rating: '5.0', app: 'Apps', type: 'Shopping', rate: 'Free', img: require('./img/img6.jpeg'), text: "Augmented Store At Home MR is the B2B/B2C platform designed to support the business continuity of the stores." },



    ],
    sortedItems: []
}

export const storeSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
      searchData: (state, action) => {
         state.sortedItems = state.searchvalue.filter((ele) => {
              const searchTerm = action.payload.toLowerCase();
              return (
                  ele.name.toLowerCase().includes(searchTerm) ||
                  ele.type.toLowerCase().includes(searchTerm) ||
                  ele.app.toLowerCase().includes(searchTerm) ||
                  ele.text.toLowerCase().includes(searchTerm)
              );
          });
          console.log(state.sortedItems);
      },
    },
  })
  

// Action creators are generated for each case reducer function
export const { searchData } = storeSlice.actions

export default storeSlice.reducer