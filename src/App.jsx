import photo from './assets/Elijah.jpeg';

function App() {
  return (
    <div className="bg-red-900 h-screen">
      <div className="max-w-[400px] w-[100%] mx-auto  shadow-2xl ">
        <Image />
        <div className="p-5 text-white">
          <Name />
          <About />
          <Stacks />
        </div>
      </div>
    </div>
  );
}

function Image() {
  return (
    <div>
      <img
        src={photo}
        alt="photo"
        className="w-[300px] h-[300px] rounded-r-full  object-cover "
      />
    </div>
  );
}
function Name() {
  return <h1 className="text-3xl">Oladapo Elijah</h1>;
}
function About() {
  const text = `I'm a software engineer fluent in the MERN stack, passionate about
  building real-world projects. With expertise in MongoDB, Express.js,
  React.js, and Node.js, I thrive on turning ideas into functional
  applications. I create user-friendly interfaces and optimize backend
  systems, ensuring efficient data management. My commitment to staying
  updated with industry trends and delivering innovative solutions makes me
  a valuable asset to any team. Let's build impactful projects together.`;
  return <p className="text-sm my-3">{text}</p>;
}
function Stacks() {
  return (
    <ul className="grid grid-cols-3 mt-5 gap-5 text-center">
      <li className="bg-[#4D2DB7] rounded-lg ">HTML/CSS</li>
      <li className="bg-[#CEDEBD] rounded-lg">Javascript</li>
      <li className="bg-[#435334] rounded-lg">React</li>
      <li className="bg-[#7895CB] rounded-lg">Node js</li>
      <li className="bg-[#99627A] rounded-lg">Express</li>
      <li className="bg-[#C5DFF8] rounded-lg">MongoDB</li>
      <li className="bg-[#CBB279] rounded-lg">Next js</li>
    </ul>
  );
}

export default App;
