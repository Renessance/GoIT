import logo from './logo.svg';
import './App.css';
import Profile from "./Profile";
const favouriteBooks = [
  { id: "1", title: "JS for beginners", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quibusdam!" },
  { id: "2", title: "React basics", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quibusdam!" },
  { id: "3", title: "React Router overview", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quibusdam!" },
  { id: "4", title: "Redux in depth", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, quibusdam!" },
];

function App() {
  const link =  "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
  const isShown = false;

  // логічні оператори
  // && || ? ! !!
  return (
    <div>
      <Profile title="some title" description="some description" url={link} />
      {
        favouriteBooks.map(item => {
          return <Profile key={item.id} title={item.title} description={item.description} url={link} />
        })
      }
      { isShown && // нічого не покаже, тому що isShown дорівнює false
        <Profile title="some title" description="some description" url={link} />
      }
    </div>
  );
}

export default App;
