import { Link, useNavigate } from "react-router-dom";

const dummy = [
   {
      id: 1,
      user: {
         username: "cundus",
      },
      content: "lorem ipsum dolor sit amet",
   },
   {
      id: 2,
      user: {
         username: "cundus",
      },
      content: "lorem ipsum dolor sit amet",
   },
   {
      id: 3,
      user: {
         username: "cundus",
      },
      content: "lorem ipsum dolor sit amet",
   },
   {
      id: 4,
      user: {
         username: "cundus",
      },
      content: "lorem ipsum dolor sit amet",
   },
   {
      id: 5,
      user: {
         username: "cundus",
      },
      content: "lorem ipsum dolor sit amet",
   },
   {
      id: 6,
      user: {
         username: "cundus",
      },
      content: "lorem ipsum dolor sit amet",
   },
];

const Home = () => {
   const navigate = useNavigate();

   return (
      <div>
         <h1>Home</h1>
         <Link to="/test">GO TO TEST</Link>
         <Link to="/profile/cundus">GO TO DUMMY PROFILE</Link>
         {dummy.map((post) => (
            <div
               key={post.id}
               onClick={() => {
                  navigate("/detail/" + post.id);
               }}
               style={{ cursor: "pointer", margin: "100px 0" }}
            >
               <h3>{post.user.username}</h3>
               <p>{post.content}</p>
            </div>
         ))}
      </div>
   );
};

export default Home;
