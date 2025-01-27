import React, { useState, useRef } from 'react';
import { Brain, Rocket, Users, Star, ChevronRight, Sparkles } from 'lucide-react';
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
          <a href="#testimonials" className="hover:text-purple-300 transition-colors">Testimonials</a>
          <a href="#contact" className="hover:text-purple-300 transition-colors">Contact</a>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="container mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Transform Your Learning Journey with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400"> Victory Tutorials</span>
            </h1>
            <p className="text-xl text-gray-300">
              Unlock your potential with personalized tutoring that combines traditional wisdom with cutting-edge teaching methods.
            </p>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity">
              Start Learning Today
              <ChevronRight className="w-5 h-5" />
            </button>
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

        {/* Features */}
        <section id='about' className="container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
              <Brain className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Personalized Learning</h3>
              <p className="text-gray-300">Customized teaching approaches tailored to your unique learning style and pace.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
              <Rocket className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Advanced Methods</h3>
              <p className="text-gray-300">Integration of modern technology and proven teaching techniques for optimal results.</p>
            </div>
            <div className="bg-white/10 p-8 rounded-2xl backdrop-blur-lg">
              <Users className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Small Groups</h3>
              <p className="text-gray-300">Focus on individual attention with small group sizes for better interaction.</p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section id='testimonials' className="container mx-auto px-6 py-20">
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
        <section id='contact' className="container mx-auto px-6 py-20">
          <div className="bg-white/10 p-12 rounded-3xl backdrop-blur-lg max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Start Your Learning Journey</h2>
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