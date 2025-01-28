import profile from "../assets/profile.jpg";
import { Github, Linkedin, Mail, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] relative overflow-hidden">
      {/* Animated background blobs */}
      {/* <div className="blob w-96 h-96 bg-emerald-400 -top-48 -left-48 rounded-full" />
      <div className="blob w-96 h-96 bg-teal-400 top-1/2 -right-48 rounded-full" />
      <div className="blob w-96 h-96 bg-cyan-400 -bottom-48 left-1/2 rounded-full" /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-emerald-600 dark:text-emerald-400">
                Hello,
              </span>
              <br />
              <span className="text-slate-800 dark:text-white">
                I'm Dehinbo Boluwatife Adebowale
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-slate-600 dark:text-slate-300 mb-8">
              Graphic Designer
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 text-lg max-w-xl mx-auto lg:mx-0">
              Professional in any form of printing services and Stationeries.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link
                to="/contact"
                className="group px-8 py-4 bg-emerald-600 hover:bg-emerald-700 
                         text-white rounded-full transition-all duration-300
                         flex items-center justify-center space-x-2"
              >
                <span>Let's Connect</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <div className="flex justify-center space-x-4">
                {[
                  { icon: Github, href: "https://github.com" },
                  { icon: Linkedin, href: "https://linkedin.com" },
                  { icon: Mail, href: "mailto:boludehinbo123@gmail.com" },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-4 card rounded-full hover:scale-110 transition-transform"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <social.icon className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 floating">
            <div className="organic-border overflow-hidden max-w-md mx-auto">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
