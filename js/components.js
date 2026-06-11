window.globalComponents = {
  topBar: `
<div class="bg-navy-dark text-white text-xs py-2 px-4 border-b border-gray-800">
  <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1.5 sm:space-y-0">
    <div class="w-full sm:w-auto text-center sm:text-left mb-1.5 sm:mb-0">
      <span class="inline-block h-2 w-2 rounded-full bg-green-accent animate-pulse mr-1.5 align-baseline"></span>
      <span class="text-gray-300 font-semibold uppercase tracking-wider text-[11px] leading-relaxed">Active Extermination Dispatch &bull; Huntington Park, CA 90255</span>
    </div>
    <div class="flex items-center">
      <a href="tel:5555555555" class="inline-flex items-center text-white hover:text-orange font-semibold tracking-wide transition-colors text-sm sm:text-base">
        <svg class="h-4 w-4 sm:h-5 sm:w-5 mr-2 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1.3 1.3 0 01-.321 1.093l-1.305 1.305a11.934 11.934 0 005.184 5.184l1.305-1.305a1.3 1.3 0 011.093-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        <span class="text-orange font-bold hover:text-white">(555) 555-5555</span>
      </a>
    </div>
  </div>
</div>
  `,

  header: `
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="flex justify-between items-center h-20">
    <!-- Logo -->
    <div class="flex-shrink-0 flex items-center">
      <a href="/" class="relative w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center group">
        <svg class="absolute inset-0 w-full h-full text-navy transition-colors duration-300 group-hover:text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <svg class="absolute inset-0 w-7 h-7 sm:w-8 sm:h-8 m-auto text-orange transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3 3 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M17.47 9c1.93-.2 3.53-1.9 3.53-3.9"/><path d="M6 14H2"/><path d="M22 14h-4"/><path d="M17.5 19c2-2.5 3.5-5.5 3.5-9"/><path d="M3 10c0 3.5 1.5 6.5 3.5 9"/>
        </svg>
      </a>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex space-x-8 text-sm font-medium items-center">
      <a href="/" class="nav-link py-2 text-navy hover:text-orange transition-all duration-300">Home</a>
      
      <!-- Services Dropdown -->
      <div class="relative group">
        <button class="nav-link py-2 text-navy hover:text-orange transition-all duration-300 flex items-center">
          Services
          <svg class="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <div class="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
          <div class="py-1" role="menu" aria-orientation="vertical">
            <a href="/residential-control" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange">Residential Control</a>
            <a href="/commercial-control" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-orange">Commercial Control</a>
          </div>
        </div>
      </div>

      <a href="/about" class="nav-link py-2 text-navy hover:text-orange transition-all duration-300">About Us</a>
      <a href="/contact" class="nav-link py-2 text-navy hover:text-orange transition-all duration-300">Contact</a>
      
      <!-- CTA Button -->
      <a href="tel:5555555555" class="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-orange hover:bg-orange-dark transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
        <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1.3 1.3 0 01-.321 1.093l-1.305 1.305a11.934 11.934 0 005.184 5.184l1.305-1.305a1.3 1.3 0 011.093-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        (555) 555-5555
      </a>
    </nav>

    <!-- Mobile Menu Button -->
    <div class="flex items-center md:hidden">
      <button id="mobile-menu-btn" type="button" class="inline-flex items-center justify-center p-2 rounded-lg text-navy hover:text-orange hover:bg-gray-50 focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </button>
    </div>
  </div>
</div>

<!-- Mobile Navigation Drawer -->
<div id="mobile-menu" class="hidden md:hidden border-t border-gray-100 bg-white">
  <div class="px-3 pt-2 pb-4 space-y-1">
    <a href="/" class="nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-navy hover:bg-gray-50 hover:text-orange transition-colors">Home</a>
    
    <div class="space-y-1">
      <div class="px-3 py-2.5 text-base font-medium text-navy">Services</div>
      <div class="pl-6 space-y-1">
        <a href="/residential-control" class="block px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-orange transition-colors">Residential Control</a>
        <a href="/commercial-control" class="block px-3 py-2 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 hover:text-orange transition-colors">Commercial Control</a>
      </div>
    </div>

    <a href="/about" class="nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-navy hover:bg-gray-50 hover:text-orange transition-colors">About Us</a>
    <a href="/contact" class="nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-navy hover:bg-gray-50 hover:text-orange transition-colors">Contact</a>
    <div class="mt-4 px-3">
      <a href="tel:5555555555" class="w-full inline-flex items-center justify-center px-4 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-orange hover:bg-orange-dark shadow-md">
        <svg class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1.3 1.3 0 01-.321 1.093l-1.305 1.305a11.934 11.934 0 005.184 5.184l1.305-1.305a1.3 1.3 0 011.093-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        (555) 555-5555
      </a>
    </div>
  </div>
</div>
  `,

  footer: `
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 md:pb-0">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
    <!-- Brand Info -->
    <div class="space-y-4">
      <div class="relative w-16 h-16 flex items-center justify-center group">
        <svg class="absolute inset-0 w-full h-full text-white transition-colors duration-300 group-hover:text-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
        <svg class="absolute inset-0 w-8 h-8 m-auto text-orange transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m8 2 1.88 1.88"/><path d="M14.12 3.88 16 2"/><path d="M9 7.13v-1a3 3 0 1 1 6 0v1"/><path d="M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6"/><path d="M12 20v-9"/><path d="M6.53 9C4.6 8.8 3 7.1 3 5"/><path d="M17.47 9c1.93-.2 3.53-1.9 3.53-3.9"/><path d="M6 14H2"/><path d="M22 14h-4"/><path d="M17.5 19c2-2.5 3.5-5.5 3.5-9"/><path d="M3 10c0 3.5 1.5 6.5 3.5 9"/>
        </svg>
      </div>
      <p class="text-xs leading-relaxed">
        Reliable, rank-and-rent local resource connecting homeowners with certified spider control and pest management experts in Huntington Park, CA.
      </p>
    </div>

    <!-- Services Links -->
    <div>
      <h4 class="text-white font-semibold text-sm mb-4">Our Services</h4>
      <ul class="space-y-2.5 text-xs">
        <li><a href="/residential-control" class="hover:text-orange transition-colors">Residential Control</a></li>
        <li><a href="/commercial-control" class="hover:text-orange transition-colors">Commercial Spider Control</a></li>
      </ul>
    </div>

    <!-- Quick Links -->
    <div>
      <h4 class="text-white font-semibold text-sm mb-4">Quick Links</h4>
      <ul class="space-y-2.5 text-xs">
        <li><a href="/" class="hover:text-orange transition-colors">Home</a></li>
        <li><a href="/about" class="hover:text-orange transition-colors">About Us</a></li>
        <li><a href="/contact" class="hover:text-orange transition-colors">Contact Us</a></li>
      </ul>
    </div>

    <!-- Contact Info -->
    <div class="space-y-3">
      <h4 class="text-white font-semibold text-sm mb-4">Contact Details</h4>
      <p class="text-xs">Location: Huntington Park, CA 90255</p>
      <a href="tel:5555555555" class="inline-flex items-center text-sm font-semibold text-orange hover:text-white transition-colors">
        <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1.3 1.3 0 01-.321 1.093l-1.305 1.305a11.934 11.934 0 005.184 5.184l1.305-1.305a1.3 1.3 0 011.093-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        (555) 555-5555
      </a>
    </div>
  </div>

  <div class="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
    <p>&copy; 2026 Huntington Park Spider Control. All rights reserved. Connecting you with certified local contractors.</p>
    <div class="space-x-4">
      <a href="/terms-of-service" class="hover:text-white transition-colors">Terms of Service</a>
      <a href="/privacy-policy" class="hover:text-white transition-colors">Privacy Policy</a>
    </div>
  </div>
</div>

<!-- Mobile Sticky Phone Widget -->
<div class="fixed bottom-4 inset-x-4 z-[90] md:hidden">
  <div class="bg-navy rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.4)] p-3.5 flex items-center justify-between border border-gray-700">
    <div class="flex flex-col pl-1">
      <span class="text-orange font-bold text-[11px] tracking-wider mb-0.5">SPIDER EMERGENCY?</span>
      <span class="text-white font-semibold text-[15px] leading-tight">Technicians standing by</span>
    </div>
    <a href="tel:5555555555" class="bg-orange hover:bg-orange-dark text-white font-bold py-2.5 px-4 rounded-lg flex items-center shadow-lg active:scale-95 transition-transform text-sm">
      <svg class="h-4 w-4 mr-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1.3 1.3 0 01-.321 1.093l-1.305 1.305a11.934 11.934 0 005.184 5.184l1.305-1.305a1.3 1.3 0 011.093-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
      </svg>
      Call Now
    </a>
  </div>
</div>
  `
};
