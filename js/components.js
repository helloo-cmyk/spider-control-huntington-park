window.globalComponents = {
  topBar: `
<div class="bg-navy-dark text-white text-xs py-2 px-4 border-b border-gray-800">
  <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center space-y-1.5 sm:space-y-0">
    <div class="flex items-center space-x-2">
      <span class="inline-block h-2 w-2 rounded-full bg-green-accent animate-pulse"></span>
      <span class="text-gray-300 font-semibold uppercase tracking-wider text-[11px]">24/7 Active Extermination Dispatch &bull; Huntington Park, CA 90255</span>
    </div>
    <div class="flex items-center">
      <a href="tel:5555555555" class="inline-flex items-center text-white hover:text-orange font-semibold tracking-wide transition-colors text-[11px]">
        <svg class="h-3.5 w-3.5 mr-1.5 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1.3 1.3 0 01-.321 1.093l-1.305 1.305a11.934 11.934 0 005.184 5.184l1.305-1.305a1.3 1.3 0 011.093-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        Emergency Helpline: <span class="ml-1 text-orange font-bold underline underline-offset-2 hover:text-white">(555) 555-5555</span>
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
      <a href="/" class="flex items-center space-x-2">
        <div class="p-2 bg-orange/10 rounded-lg text-orange">
          <svg class="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <circle cx="12" cy="12" r="3" fill="currentColor"></circle>
            <path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.5 5.5l4.5 4.5M14 14l4.5 4.5M18.5 5.5l-4.5 4.5M10 14l-4.5 4.5"></path>
          </svg>
        </div>
        <div class="flex flex-col">
          <span class="font-heading font-bold text-lg text-navy leading-none tracking-tight">Huntington Park</span>
          <span class="text-[10px] font-semibold uppercase tracking-widest text-orange leading-none mt-0.5">Spider Control</span>
        </div>
      </a>
    </div>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex space-x-8 text-sm font-medium items-center">
      <a href="/" class="nav-link py-2 text-navy hover:text-orange transition-all duration-300">Home</a>
      <a href="/services" class="nav-link py-2 text-navy hover:text-orange transition-all duration-300">Services</a>
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
    <a href="/services" class="nav-link block px-3 py-2.5 rounded-lg text-base font-medium text-navy hover:bg-gray-50 hover:text-orange transition-colors">Services</a>
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
<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <div class="grid grid-cols-1 md:grid-cols-4 gap-12">
    <!-- Brand Info -->
    <div class="space-y-4">
      <div class="flex items-center space-x-2 text-white">
        <div class="p-1.5 bg-orange/10 rounded-md text-orange">
          <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="12" cy="12" r="3" fill="currentColor"></circle>
            <path d="M12 3v6M12 15v6M3 12h6M15 12h6M5.5 5.5l4.5 4.5M14 14l4.5 4.5M18.5 5.5l-4.5 4.5M10 14l-4.5 4.5"></path>
          </svg>
        </div>
        <span class="font-heading font-semibold text-base text-white">Huntington Park Spider Control</span>
      </div>
      <p class="text-xs leading-relaxed">
        Reliable, rank-and-rent local resource connecting homeowners with certified spider control and pest management experts in Huntington Park, CA.
      </p>
    </div>

    <!-- Services Links -->
    <div>
      <h4 class="text-white font-semibold text-sm mb-4">Our Services</h4>
      <ul class="space-y-2.5 text-xs">
        <li><a href="/services" class="hover:text-orange transition-colors">Residential Control</a></li>
        <li><a href="/services" class="hover:text-orange transition-colors">Commercial Spider Control</a></li>
        <li><a href="/services" class="hover:text-orange transition-colors">Black Widow Removal</a></li>
        <li><a href="/services" class="hover:text-orange transition-colors">Brown Recluse Exclusion</a></li>
        <li><a href="/services" class="hover:text-orange transition-colors">Web & Egg Sac Removal</a></li>
      </ul>
    </div>

    <!-- Quick Links -->
    <div>
      <h4 class="text-white font-semibold text-sm mb-4">Quick Links</h4>
      <ul class="space-y-2.5 text-xs">
        <li><a href="/" class="hover:text-orange transition-colors">Home</a></li>
        <li><a href="/services" class="hover:text-orange transition-colors">Services</a></li>
        <li><a href="/about" class="hover:text-orange transition-colors">About Us</a></li>
        <li><a href="/contact" class="hover:text-orange transition-colors">Contact Us</a></li>
      </ul>
    </div>

    <!-- Contact Info -->
    <div class="space-y-3">
      <h4 class="text-white font-semibold text-sm mb-4">Contact Details</h4>
      <p class="text-xs">Location: Huntington Park, CA 90255</p>
      <p class="text-xs">Available: 24 Hours / 7 Days</p>
      <a href="tel:5555555555" class="inline-flex items-center text-sm font-semibold text-orange hover:text-white transition-colors">
        <svg class="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1.3 1.3 0 01-.321 1.093l-1.305 1.305a11.934 11.934 0 005.184 5.184l1.305-1.305a1.3 1.3 0 011.093-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
        </svg>
        (555) 555-5555
      </a>
    </div>
  </div>

  <div class="mt-12 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
    <p>&copy; 2026 Huntington Park Spider Control. All rights reserved. Connecting you with certified local contractors.</p>
  </div>
</div>
  `
};
