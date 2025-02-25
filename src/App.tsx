import React, { useState, useRef } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Brain, Rocket, Users, Star, ChevronRight, Sparkles, Phone, MapPin, GraduationCap, ClipboardCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';

function HomePage() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({
    type: null,
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      await emailjs.sendForm(
        'service_9a2h3nq',
        'template_54we8yw',
        form.current,
        'ypvaQ9e-D55RaPeBt'
      );
      
      setSubmitStatus({
        type: 'success',
        message: 'Thank you for contacting us! We will get back to you soon.'
      });
      form.current.reset();
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-900 to-indigo-900 text-white">
      {/* Hero Section */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Brain className="w-8 h-8" />
          <span className="text-xl font-bold">Victory Tutorials</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="hover:text-purple-300 transition-colors">About</a>
          <a href="#courses" className="hover:text-purple-300 transition-colors">Courses</a>
          <a href="#testimonials" className="hover:text-purple-300 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
        </div>
      </nav>

      <main>
        <section className="container mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold mb-8">Transform Your Learning Journey</h1>
          <p className="text-xl mb-12 text-gray-300">Expert-led tutorials in programming, mathematics, and sciences</p>
          <div className="flex justify-center space-x-4">
            <Link to="/courses" className="bg-purple-500 px-8 py-3 rounded-full hover:bg-purple-600 transition-colors flex items-center">
              Get Started <ChevronRight className="ml-2" />
            </Link>
            <a href="#contact" className="border border-purple-500 px-8 py-3 rounded-full hover:bg-purple-500/10 transition-colors">
              Contact Us
            </a>
          </div>
        </section>

        <section id="about" className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Why Choose Victory Tutorials?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 p-6 rounded-lg">
              <Brain className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
              <p className="text-gray-300">Learn from industry professionals with years of teaching experience</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <Rocket className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Accelerated Learning</h3>
              <p className="text-gray-300">Structured curriculum designed for rapid skill acquisition</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <Users className="w-12 h-12 text-purple-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Community Support</h3>
              <p className="text-gray-300">Join a vibrant community of learners and mentors</p>
            </div>
          </div>
        </section>

        <section id="courses" className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Courses</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/5 rounded-lg overflow-hidden">
              <div className="p-6">
                <GraduationCap className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Advanced Mathematics</h3>
                <p className="text-gray-300 mb-4">Master complex mathematical concepts with practical applications</p>
                <Link to="/courses/math" className="text-purple-400 hover:text-purple-300 flex items-center">
                  Learn More <ChevronRight className="ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg overflow-hidden">
              <div className="p-6">
                <Sparkles className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Programming Fundamentals</h3>
                <p className="text-gray-300 mb-4">Build a strong foundation in coding with hands-on projects</p>
                <Link to="/courses/programming" className="text-purple-400 hover:text-purple-300 flex items-center">
                  Learn More <ChevronRight className="ml-1" />
                </Link>
              </div>
            </div>
            <div className="bg-white/5 rounded-lg overflow-hidden">
              <div className="p-6">
                <ClipboardCheck className="w-12 h-12 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Science Tutorials</h3>
                <p className="text-gray-300 mb-4">Explore scientific concepts through interactive lessons</p>
                <Link to="/courses/science" className="text-purple-400 hover:text-purple-300 flex items-center">
                  Learn More <ChevronRight className="ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">What Our Students Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-6 rounded-lg">
              <Star className="w-6 h-6 text-yellow-400 mb-4" />
              <p className="text-gray-300 mb-4">"The quality of instruction and support is outstanding. I've learned more in months than I did in years of self-study."</p>
              <p className="font-semibold">- Sarah Johnson</p>
            </div>
            <div className="bg-white/5 p-6 rounded-lg">
              <Star className="w-6 h-6 text-yellow-400 mb-4" />
              <p className="text-gray-300 mb-4">"Victory Tutorials helped me transition into a new career in tech. The structured approach and mentorship made all the difference."</p>
              <p className="font-semibold">- Michael Chen</p>
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold mb-12 text-center">Get in Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-purple-400" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-purple-400" />
                <span>123 Learning Street, Education City</span>
              </div>
            </div>
            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-purple-500/30 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Your Email"
                  required
                  className="w-full p-3 rounded-lg bg-white/10 border border-purple-500/30 focus:border-purple-500 focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  required
                  rows={4}
                  className="w-full p-3 rounded-lg bg-white/10 border border-purple-500/30 focus:border-purple-500 focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-purple-500 py-3 rounded-lg hover:bg-purple-600 transition-colors disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
              {submitStatus.type && (
                <div className={`p-4 rounded-lg ${submitStatus.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'}`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      <footer className="container mx-auto px-6 py-8 text-center text-gray-400">
        <p>© 2024 Victory Tutorials. All rights reserved.</p>
      </footer>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;