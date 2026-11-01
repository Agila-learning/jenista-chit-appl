import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#F8F1E5] via-[#FFFDF7] to-[#F8F1E5] text-slate-600 py-12 border-t border-amber-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="/assets/Chit logo.jpg.jpeg" alt="Jenista Chits Logo" className="h-12 w-12 object-contain rounded-lg shadow-2xs" />
              <span className="font-extrabold text-xl text-[#064E3B] tracking-tight">Jenista Chits</span>
            </div>
            <p className="text-sm leading-relaxed text-slate-600">
              Professional, transparent, and digitally managed chit fund services ensuring your wealth grows securely.
            </p>
          </div>

          <div>
            <h4 className="text-[#064E3B] font-bold mb-4 uppercase tracking-wider text-sm">Plans</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/fixed-plans" className="hover:text-[#064E3B] font-medium transition-colors">Fixed Plans</Link></li>
              <li><Link to="/auction-plans" className="hover:text-[#064E3B] font-medium transition-colors">Auction Plans</Link></li>
              <li><Link to="/how-it-works" className="hover:text-[#064E3B] font-medium transition-colors">How It Works</Link></li>
              <li><Link to="/eligibility" className="hover:text-[#064E3B] font-medium transition-colors">Eligibility</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#064E3B] font-bold mb-4 uppercase tracking-wider text-sm">Quick Portals</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/login" className="hover:text-[#064E3B] font-medium transition-colors">Member & Staff Login</Link></li>
              <li><a href="#track-chit" className="hover:text-[#064E3B] font-medium transition-colors">Track Chit Status</a></li>
              <li><a href="#plans" className="hover:text-[#064E3B] font-medium transition-colors">Chit Plans Comparison</a></li>
              <li><Link to="/register" className="hover:text-[#064E3B] font-medium transition-colors">New Member Registration</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#064E3B] font-bold mb-4 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-3.5 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#064E3B] flex-shrink-0 mt-1" />
                <div className="space-y-2">
                  <div>
                    <span className="block font-semibold text-slate-900 text-xs uppercase tracking-wide">Head Office</span>
                    <p className="text-slate-600 leading-relaxed">
                      D.No. 4/342/4, Mani Road,<br />
                      Pudukkottai, Thoothukudi - 628 103.
                    </p>
                  </div>
                  <div>
                    <span className="block font-semibold text-slate-900 text-xs uppercase tracking-wide">Branch Office</span>
                    <p className="text-slate-600 leading-relaxed">Hosur</p>
                  </div>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#064E3B] flex-shrink-0" />
                <div className="flex flex-wrap gap-x-1.5 text-slate-600 font-medium">
                  <a href="tel:+917094295556" className="hover:text-[#064E3B] transition-colors">+91 70942 95556</a>,
                  <a href="tel:+917094045556" className="hover:text-[#064E3B] transition-colors">70940 45556</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#064E3B] flex-shrink-0" />
                <a href="mailto:jenistachits@gmail.com" className="hover:text-[#064E3B] font-medium transition-colors text-slate-600">
                  jenistachits@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="w-4 h-4 text-[#064E3B] flex-shrink-0 flex items-center justify-center font-bold text-[10px] tracking-tight border border-[#064E3B]/40 rounded-sm">CIN</span>
                <span className="text-slate-600 font-mono text-xs tracking-wide">U67190TZ2020PTC033361</span>
              </li>
            </ul>
          </div>

        </div>
        
        <div className="pt-8 border-t border-amber-200/80 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Jenista Chits Pvt. Ltd. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0 font-medium">
            <Link to="/privacy" className="hover:text-[#064E3B] transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-[#064E3B] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
