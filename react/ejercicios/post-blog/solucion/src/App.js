import React from "react";
import './App.css';
import Post from './components/Post/Post.js'

const postInfo = {
  date: new Date(2020, 1, 1),
  user: {
    username: "Ada Lovelace",
    avatar:
      "https://www.stylist.co.uk/images/app/uploads/2018/10/09155947/ada-lovelace-day-2018-quotes-facts-biography-crop-1539097197-1366x1366.jpg?w=256&h=256&fit=max&auto=format%2Ccompress"
  },
  img: {
    src:
      "http://it-world.xyz/wp-content/uploads/2019/03/og-learning-path-react.jpg",
    altText: "Logo de React con imagen de paisaje de fondo"
  },
  title: "Cómo hacer un componente en React",
  content:
    "Sit in a box for hours hide head under blanket so no one can see. Sleep everywhere, but not in my bed always hungry this human feeds me, i should be a god paw at your fat belly sit in a box for hours. Sleep on keyboard. Bury the poop bury it deep. What the heck just happened,  something feels fishy lounge in doorway. Stare out the window catch mouse and gave it as a present, yet eat and than sleep on your face unwrap toilet paper claws in your leg or loved it, hated it, loved it, hated it poop in a handbag look delicious and drink the soapy mopping up water then puke giant foamy fur-balls...",
  comments: [
    {
      user: {
        username: "Grace Hopper",
        avatar:
          "https://res-5.cloudinary.com/crunchbase-production/image/upload/c_thumb,h_256,w_256,f_auto,g_faces,z_0.7,q_auto:eco/v1479476409/iujuzczbplblfzqjwiq5.png"
      },
      date: new Date(2020, 1, 2),
      content: "Muy buen artículo!"
    },
    {
      user: {
        username: "Margaret Hamilton",
        avatar:
          "https://wehackthemoon.com/sites/default/files/styles/tile/public/2019-03/73326.jpg?h=5e39e9b9&itok=z6BmzeDc"
      },
      date: new Date(2020, 1, 2),
      content: "Excelente!"
    },
    {
      user: {
        username: "Katie Bouman",
        avatar:
          "https://d3i6fh83elv35t.cloudfront.net/static/2019/04/57096998_10213321822497968_5057670792469282816_o.jpg"
      },
      date: new Date(2020, 1, 3),
      content: "Muy útil! Gracias por subirlo"
    }
  ]
};

const App = () => {
  return <Post
    date={postInfo.date} user={postInfo.user} img={postInfo.img}
    title={postInfo.title} content={postInfo.content} comments={postInfo.comments}
  />
};

export default App;