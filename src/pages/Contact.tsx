import { Phone, Mail, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-6">
          <span className="bg-gradient-to-r from-indigo-600 to-pink-600 text-transparent bg-clip-text">
            Get in Touch
          </span>
        </h1>
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          Let's discuss how we can work together to bring your ideas to life
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="glass rounded-2xl p-8">
          <div className="space-y-6">
            <div className="flex items-center p-4 glass-hover rounded-xl">
              <Phone className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-4" />
              <div>
                <h3 className="font-medium dark:text-white">Phone</h3>
                <p className="text-gray-600 dark:text-gray-300">+234 (810) 237 6362</p>
              </div>
            </div>

            <div className="flex items-center p-4 glass-hover rounded-xl">
              <Mail className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-4" />
              <div>
                <h3 className="font-medium dark:text-white">Email</h3>
                <p className="text-gray-600 dark:text-gray-300">boludehinbo123@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center p-4 glass-hover rounded-xl">
              <MapPin className="w-6 h-6 text-indigo-600 dark:text-indigo-400 mr-4" />
              <div>
                <h3 className="font-medium dark:text-white">Location</h3>
                <p className="text-gray-600 dark:text-gray-300">Akeju Street, Somolu, Lagos</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold mb-4 dark:text-white">Connect</h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com"
                className="p-3 glass-hover rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </a>
              <a
                href="https://linkedin.com"
                className="p-3 glass-hover rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </a>
              <a
                href="https://twitter.com"
                className="p-3 glass-hover rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="w-5 h-5 text-gray-600 dark:text-gray-300" />
              </a>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl p-8">
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-xl glass-hover border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-xl glass-hover border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-xl glass-hover border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:text-white"
                placeholder="Your message"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-pink-600 text-white hover:opacity-90 transition-opacity"
            >
              Send Message
              <Send className="ml-2 h-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;