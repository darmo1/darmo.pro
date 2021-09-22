import * as React from "react";

const Divider = () => {
  return (
    <div className="border border-gray-200 dark:border-gray-600 w-full my-8" />
  );
};

const Year = ({ children }) => {
  return (
    <h3 className="text-lg md:text-xl font-bold mb-4 tracking-tight text-gray-900 dark:text-gray-100">
      {children}
    </h3>
  );
};

const Step = ({ title, children }) => {
  return (
    <li className="mb-4 ml-2 list-none">
      <div className="flex items-center mb-2 text-green-700 dark:text-green-300">
        <span className="sr-only"> Check </span>
        <svg className="h-4 w-4 mr-2" viewBox="0 0 24 24">
          <g
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </g>
        </svg>

        <p className="font-medium text-gray-900 dark:text-gray-100">{title}</p>
      </div>
      <p className="text-gray-700 dark:text-gray-400 ml-6"> {children} </p>
    </li>
  );
};

const FullTimeLine = () => {
  return (<>
    <Step title="Next Js">
          I'm learning NextJS , pretty cool framework
        </Step>
    <Divider />
    <Year>1994</Year>
    <ul >
      <Step title="">Born</Step>
    </ul>
  </>);
};

const TimeLine = () => {

    const [ isShowingFullTimeLine, showFullTimeline ] = React.useState(false)

  return (
    <div className="max-w-4xl mx-auto">
      <h3 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-8 text-black dark:text-white">
        Timeline
      </h3>
      <Year>2021</Year>
      <ul>
        <Step title="Comono website">
          I did a website <a href="https://www.comonocolombia.com" target="_blank" className="text-blue-400">comonocolombia.com</a><br/>
          I did it base on technologies such as:
          <ul> 
            <li className="text-sm">Frontend - next js</li>
            <li className="text-sm">CMS - Sanity </li>
            <li className="text-sm"> Style - jsx CSS</li>
          </ul>
        </Step>
        <Step title="Closer web">
          I was working on <a href="https://closer-353ab.firebaseapp.com/" target="_blank" className="text-blue-400"> Closer</a> a first product - MVP<br/>
         The main idea of the project was people can create different activities regard have skills and they are able to share them with others and receive some payment for each activity.
          I did it base on technologies such as:
          <ul> 
            <li className="text-sm">Frontend - next js</li>
            <li className="text-sm">Firebase </li>
          </ul>
        </Step>
      </ul>
      {isShowingFullTimeLine ? (
        <FullTimeLine />
      ) : (
        <button
          type="button"
          className="flex items-center text-sm my-4 mx-auto px-4 py-2 rounded-md font-medium text-gray-900 dark:text-gray-100"
          onClick={() => showFullTimeline(true)}
        >
          See more
          <svg
            className="h-4 w-4 ml-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

export default TimeLine;
