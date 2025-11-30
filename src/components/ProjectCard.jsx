import React from "react";

const ProjectCard = ({ title, description, image, tech , demo , code, icons}) => {
  return (
    <div className="bg-dark-300 rounded-2xl overflow-hidden hover:-translate-y-2 transition duration-300 cursor-pointer">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-3 mb-4">
          {icons.map((Icon, index) => (
            <div key={index} className="p-2 bg-dark-400 rounded-full">
              <Icon className="w-6 h-6 text-purple" />
            </div>
          ))}
        </div>
        <div className ="flex gap-2 justify-center">
            {demo && (
              <a href={demo} className ="flex-1 text-center px-4 py-2 bg-purple
              rounded-lg font-medium hover:bg-purple-700 transition
              duration-300">
                  View Demo
              </a>
            )}

             <a href={code} className ={`text-center px-4 py-2 border border-purple
             rounded-lg font-medium hover:bg-purple/20 transition
             duration-300 ${demo ? 'flex-1' : 'w-1/2'}`}>
                Code
             </a>
        </div>
      </div>
    </div>
  );
};



export default ProjectCard;
