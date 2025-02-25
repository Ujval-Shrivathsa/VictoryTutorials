import React, { useState, useRef } from 'react';
import { Brain, Rocket, Users, Star, ChevronRight, Sparkles, Phone, MapPin, GraduationCap, ClipboardCheck } from 'lucide-react';
import Logo from './images/Favicon.png';
import emailjs from '@emailjs/browser';

function App() {
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
          <img src={Logo} className="w-8 h-8" alt="Victory Tutorials Logo" />
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
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-purple-500/20 rounded-full text-purple-300 font-semibold mb-4">
              🎓 Admissions Open
            </div>
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transform Your Learning Journey with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Victory Tutorials</span>
            </h1>
            <p className="text-xl text-gray-300">
              Unlock your potential with personalized tutoring that combines traditional wisdom with cutting-edge teaching methods.
            </p>
            <a href="#contact" className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
              Start Learning Today
              <ChevronRight className="w-5 h-5" />
            </a>
          </div>
          <div className="relative">
            <img 
              src="https://degrees.snu.edu/hs-fs/hubfs/AdobeStock_518657595.jpeg"
              alt="Teaching"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-4 -right-4 bg-purple-600 p-4 rounded-xl">
              <Sparkles className="w-8 h-8" />
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section id="courses" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Our Courses</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
              <GraduationCap className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Primary & Middle School</h3>
              <p className="text-gray-300 mb-4">Class 1 to 9 (State & CBSE Syllabus)</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-purple-400" />
                  All subjects covered
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-purple-400" />
                  Comprehensive study material
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-purple-400" />
                  Regular assessments
                </li>
              </ul>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
              <GraduationCap className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Class 10 Special</h3>
              <p className="text-gray-300 mb-4">State & CBSE Syllabus</p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-purple-400" />
                  Focused board exam preparation
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-purple-400" />
                  Mock tests and evaluations
                </li>
                <li className="flex items-center gap-2">
                  <ClipboardCheck className="w-5 h-5 text-purple-400" />
                  Special doubt clearing sessions
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Features */}
        <section id="about" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">Salient Features</h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
              <Brain className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Experienced Faculty</h3>
              <p className="text-gray-300">Expert teachers with years of experience in both State and CBSE curricula.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
              <Rocket className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Result Oriented</h3>
              <p className="text-gray-300">Concept-based learning approach with regular tests and evaluations.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
              <Users className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Small Batch Size</h3>
              <p className="text-gray-300">Individual attention for every student with limited batch sizes.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="container mx-auto px-6 py-20">
          <h2 className="text-3xl font-bold text-center mb-12">What Students Say</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"Naina's teaching methods are revolutionary. She makes complex concepts easy to understand and her personalized approach helped me excel in my exams."</p>
              <p className="font-semibold">- Rahul K</p>
            </div>
            <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg">
              <div className="flex gap-2 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 mb-4">"The way Naina incorporates modern technology into her teaching is amazing. Learning has become so much more engaging and fun!"</p>
              <p className="font-semibold">- Pavan L</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="container mx-auto px-6 py-20">
          <div className="bg-white/10 p-12 rounded-3xl backdrop-blur-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Start Your Learning Journey</h2>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="font-semibold">Call Us</p>
                  <a href="tel:+918951074097" className="text-gray-300 hover:text-purple-300 transition-colors">+91 8951074097</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin className="w-6 h-6 text-purple-400" />
                <div>
                  <p className="font-semibold">Visit Us</p>
                  <p className="text-gray-300">I Floor, RR complex, Bogadi, Mysuru</p>
                </div>
              </div>
            </div>

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input 
                  type="text" 
                  name="from_name"
                  placeholder="Name" 
                  required
                  className="bg-white/5 border border-purple-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email" 
                  required
                  className="bg-white/5 border border-purple-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
                />
              </div>
              <textarea 
                name="message"
                placeholder="Message" 
                required
                rows={4} 
                className="w-full bg-white/5 border border-purple-500/30 rounded-lg px-4 py-3 focus:outline-none focus:border-purple-500"
              ></textarea>
              {submitStatus.type && (
                <div className={`p-4 rounded-lg ${
                  submitStatus.type === 'success' ? 'bg-green-500/20 text-green-200' : 'bg-red-500/20 text-red-200'
                }`}>
                  {submitStatus.message}
                </div>
              )}
              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-500 to-pink-500 py-4 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
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

export default App;