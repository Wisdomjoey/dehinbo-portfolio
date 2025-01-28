import { Code, Briefcase, GraduationCap, Star } from "lucide-react";

const About = () => {
  const skills = [
    "Printing",
    "Graphic Design",
    "Stationaries",
    "Photoshop",
    "Corel Draw",
    "Illustrator",
    "MS Office",
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
            About Me
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Professional in any form of printing services and Stationeries.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
            My Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            My journey to understanding why I want to be a graphic designer
            began in 5th grade. It started on a website where users created and
            traded graphics like sports cards and wallpapers for online
            currency. With my parents' support, l gained access to essential
            design tools and began exploring this creative world. Inspired by
            other designers' work, l invested in a Photoshop subscription and
            immersed myself in online tutorials, particularly on YouTube. The
            vast amount of available resources not only enhanced my skills but
            also strengthened my determination to pursue this as a professional
            career.
          </p>
        </div>

        {/* <div className="glass rounded-2xl p-8">
          <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
            What I Do
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            I specialize in building modern web applications using cutting-edge
            technologies. From responsive front-end interfaces to scalable
            back-end systems, I ensure every project meets the highest standards
            of quality and performance.
          </p>
        </div> */}
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="glass rounded-2xl p-8 text-center">
          <Code className="w-12 h-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xl font-semibold mb-2">Technologies</h3>
          <p className="text-gray-600 dark:text-gray-300">
            Corel Draw, Photoshop, Illusrator, MS Office
          </p>
        </div>

        <div className="glass rounded-2xl p-8 text-center">
          <Briefcase className="w-12 h-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xl font-semibold mb-2">Experience</h3>
          <p className="text-gray-600 dark:text-gray-300">
            5+ years design and branding services
          </p>
        </div>

        <div className="glass rounded-2xl p-8 text-center">
          <GraduationCap className="w-12 h-12 mx-auto mb-4 text-indigo-600 dark:text-indigo-400" />
          <h3 className="text-xl font-semibold mb-2">Education</h3>
          <p className="text-gray-600 dark:text-gray-300">
            <p>
              <strong>Name:</strong> Dehinbo Boluwatife Adebowale
            </p>
            <p>
              <strong>Matric No:</strong> F/HD/23/3210045
            </p>
            <p>
              <strong>Department:</strong> Computer Science
            </p>
          </p>
        </div>
      </div>

      <div className="glass rounded-2xl p-8">
        <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
          Skills & Technologies
        </h2>
        <div className="flex flex-wrap gap-3 justify-center">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-center px-4 py-2 rounded-full glass-hover"
            >
              <Star className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mr-2" />
              <span className="text-gray-600 dark:text-gray-300">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
