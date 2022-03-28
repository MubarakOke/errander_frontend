import React, { useState } from "react";
import Logo from "../../../Assets/svg/Logo.svg";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import Page4 from "./page4";
import Page5 from "./page5";
import Page6 from "./page6";
const SignUp = () => {
  const [content, setContent] = useState(0);
  const handleContent = (value) => {
    if (value === "add") {
      setContent(content + 1);
    } else if (value === "remove") {
      setContent(content - 1);
    }
  };

  const RenderContent = () => {
    switch (content) {
      case 0:
        return <Page1 setContent={handleContent} content={content} />;
      case 1:
        return <Page2 setContent={handleContent} content={content} />;
      case 2:
        return <Page3 setContent={handleContent} content={content} />;
      case 3:
        return <Page4 setContent={handleContent} content={content} />;
      case 4:
        return <Page5 setContent={handleContent} content={content} />;
      case 5:
        return <Page6 setContent={handleContent} content={content} />;
      default:
        return;
    }
  };

  return (
    <div className="px-6 py-4">
      <div className="flex justify-center w-full mb-6">
        <img src={Logo} alt="Logo" />
      </div>
      {RenderContent()}
    </div>
  );
};

export default SignUp;
