import React from "react";
import Button from "../../components/button";
import { FaArrowRight } from "react-icons/fa6";
import image1 from "../../assests/images/landing/door.jpg";
import Aos from "aos";
const Third = () => {
  Aos.init();
  return (
    <div class="container p-0 events-content">
    <div className="row align-items-center mt-3">
      <div className="col-sm-6 ">
        <img
             src={image1}
             width="550px"
             className="image22 process_hover  "

             height="600px"
  
        />
      </div>
      <div className="col-sm-6 lormips"
      >
        <div className="pl-left">
          <h2 className="onbord mb-4">INTELLIGENT AI ASSISTANCE</h2>
          <p className="skills_para">
          The provided C++ source code implements a basic multiplayer game server using sockets for communication. Upon execution, the server initializes a socket and binds it to a specified port, enabling it to listen for incoming connections from clients. Once a client connects, the server accepts the connection and forks a new process to handle communication with that client. The child process continuously receives messages from the client, echoes them back, and terminates when the client disconnects. Meanwhile, the parent process continues listening for new connections, allowing multiple clients to connect concurrently.
          </p>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Third;
