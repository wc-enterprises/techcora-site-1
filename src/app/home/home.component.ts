import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { doc, Firestore, setDoc } from '@angular/fire/firestore';
import { gsap } from 'gsap';
interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface Alert {
  name: string;
  email: string;
  phone: string;
  message: string;
}
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  private heroObserver!: IntersectionObserver;
  private servicesObserver!: IntersectionObserver;
  private aboutUsObserver!: IntersectionObserver;
  private contactObserver!: IntersectionObserver;
  
  juneCountdown: string = '';
  decemberCountdown: string = '';
  private countdownInterval: any;

  private updateCountdown() {
    const now = new Date();
    const juneTarget = new Date(2025, 5, 30, 23, 59, 59); // June 30, 2025
    const decTarget = new Date(2025, 11, 31, 23, 59, 59); // December 31, 2025

    this.juneCountdown = this.calculateTimeRemaining(now, juneTarget);
    this.decemberCountdown = this.calculateTimeRemaining(now, decTarget);
  }

  private calculateTimeRemaining(now: Date, target: Date): string {
    const diff = target.getTime() - now.getTime();
    
    if (diff <= 0) {
      return 'Deadline reached';
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }
  @ViewChild('aboutUsSection', { static: true }) aboutUsSection!: ElementRef;
  @ViewChild('contactSection', { static: true }) contactSection!: ElementRef;
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef;
  @ViewChild('growthSection', { static: true }) growthSection!: ElementRef;

  @ViewChild('heroHeadline', { static: true }) heroHeadline!: ElementRef;
  @ViewChild('heroSubHeadline', { static: true }) heroSubHeadline!: ElementRef;
  @ViewChild('heroDescription', { static: true }) heroDescription!: ElementRef;

  @ViewChild('ourServicesHeadline', { static: true })
  ourServicesHeadline!: ElementRef;
  @ViewChild('ourServicesSubHeadline', { static: true })
  ourServicesSubHeadline!: ElementRef;
  @ViewChild('ourServicesGrid', { static: true })
  ourServicesGrid!: ElementRef;
  @ViewChild('aboutUsContainer', { static: true })
  aboutUsContainer!: ElementRef;
  @ViewChild('aboutusHeadline', { static: true }) aboutusHeadline!: ElementRef;
  @ViewChild('aboutusContent', { static: true }) aboutusContent!: ElementRef;
  @ViewChild('AboutusImg', { static: true }) AboutusImg!: ElementRef;
  @ViewChild('AboutusImgCont', { static: true }) AboutusImgCont!: ElementRef;
  @ViewChild('contactContainer', { static: true })
  contactContainer!: ElementRef;
  @ViewChild('contactHead', { static: true }) contactHead!: ElementRef;
  @ViewChild('contactSubHead', { static: true }) contactSubHead!: ElementRef;
  @ViewChild('contactForm', { static: true }) contactForm!: ElementRef;
  @ViewChild('contactInfo', { static: true }) contactInfo!: ElementRef;

  animateHeroText() {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.from(this.heroHeadline.nativeElement, {
      opacity: 0,
      y: -30,
      duration: 1.3,
      ease: 'power3.inOut',
    });
    tl.from(this.heroSubHeadline.nativeElement, {
      opacity: 0,
      y: -30,
      duration: 1,
      ease: 'power3.inOut',
    });
    tl.from(this.heroDescription.nativeElement, {
      opacity: 0,
      x: -30,
      duration: 1,
      ease: 'power4.inOut',
    });

    return tl;
  }

  // @HostListener('window:scroll', ['$event'])
  // onScroll(event: Event): void {
  //   const windowHeight = window.innerHeight;
  //   const scrollPosition = window.scrollY;
  //   const heroSectionHeight = this.heroHeadline.nativeElement.offsetHeight;
  //   const ourServicesSectionHeight =
  //     this.ourServicesSection.nativeElement.offsetHeight;
  //   const aboutUsSectionHeight = this.aboutUsSection.nativeElement.offsetHeight;
  //   const contactSectionTop = this.contactSection.nativeElement.offsetTop;
  //   const aboutUsSectionTop = this.aboutUsSection.nativeElement.offsetTop;
  //   const ourServicesSectionTop =
  //     this.ourServicesSection.nativeElement.offsetTop;

  //   if (
  //     scrollPosition >
  //     ourServicesSectionTop + ourServicesSectionHeight - windowHeight
  //   ) {
  //     if (!this.aboutUsAnimationPlayed) {
  //       this.animateAboutUs().play();
  //       this.aboutUsAnimationPlayed = true;
  //     }
  //   }

  //   if (
  //     scrollPosition >
  //     aboutUsSectionTop + aboutUsSectionHeight - windowHeight
  //   ) {
  //     if (!this.contactAnimationPlayed) {
  //       this.animateContact().play();
  //       this.contactAnimationPlayed = true;
  //     }
  //   }
  // }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    const windowHeight = window.innerHeight;
    const scrollPosition = window.scrollY;
    const heroSectionHeight = this.heroHeadline.nativeElement.offsetHeight;
    const ourServicesSectionTop =
      this.ourServicesSection.nativeElement.offsetTop;
    const aboutUsSectionTop = this.aboutUsSection.nativeElement.offsetTop;
    const contactSectionTop = this.contactSection.nativeElement.offsetTop;

    if (
      scrollPosition >
      ourServicesSectionTop + heroSectionHeight - windowHeight
    ) {
      if (!this.ourServicesAnimationPlayed) {
        this.animateOurServices().play();
        this.ourServicesAnimationPlayed = true;
      }
    }
    // Condition for About Us Section
    if (scrollPosition > aboutUsSectionTop - windowHeight) {
      if (!this.aboutUsAnimationPlayed) {
        this.animateAboutUs().play();
        this.aboutUsAnimationPlayed = true;
      }
    }

    // Condition for Contact Section
    if (scrollPosition > contactSectionTop - windowHeight) {
      if (!this.contactAnimationPlayed) {
        this.animateContact().play();
        this.contactAnimationPlayed = true;
      }
    }
  }
  private contactAnimationPlayed = false;

  animateContact() {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.from(this.contactContainer.nativeElement, {
      opacity: 0,
      y: -60,
      duration: 1,
      ease: 'power3.inOut',
    });
    tl.from(this.contactHead.nativeElement, {
      opacity: 0,
      y: -60,
      duration: 1,
      ease: 'power3.inOut',
    });
    tl.from(this.contactSubHead.nativeElement, {
      opacity: 0,
      y: -60,
      duration: 1,
      ease: 'power3.inOut',
    });
    tl.from(this.contactForm.nativeElement, {
      opacity: 0,
      y: -60,
      duration: 1,
      ease: 'power3.inOut',
    });
    tl.from(this.contactInfo.nativeElement, {
      opacity: 0,
      x: 60,
      duration: 1,
      ease: 'power3.inOut',
    });

    return tl;
  }

  private aboutUsAnimationPlayed = false;

  animateAboutUs() {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.from(this.aboutUsContainer.nativeElement, {
      opacity: 0,
      y: -60,
      duration: 1,
      ease: 'power3.inOut',
    });

    tl.from(this.aboutusHeadline.nativeElement, {
      opacity: 0,
      y: -60,
      duration: 1,
      ease: 'power3.inOut',
    });
    tl.from(this.AboutusImgCont.nativeElement, {
      opacity: 0,
      y: -60,
      duration: 1,
      ease: 'power3.inOut',
    });
    tl.from(this.aboutusContent.nativeElement, {
      opacity: 0,
      y: -60,
      duration: 1,
      ease: 'power3.inOut',
    });
    tl.from(this.AboutusImg.nativeElement, {
      opacity: 0,
      x: -50,
      duration: 1,
      ease: 'power4.Out',
    });

    return tl;
  }
  private ourServicesAnimationPlayed = false;

  animateOurServices() {
    const tl = gsap.timeline({ defaults: { duration: 1 } });

    tl.from(this.ourServicesHeadline.nativeElement, {
      opacity: 0,
      y: -60,
      duration: 1,
      ease: 'power3.inOut',
    });
    tl.from(this.ourServicesSubHeadline.nativeElement, {
      opacity: 0,
      y: -60,
      duration: 1,
      ease: 'power3.inOut',
    });
    tl.from(this.ourServicesGrid.nativeElement, {
      opacity: 0,
      y: -60,
      duration: 1,
      ease: 'power3.inOut',
    });

    return tl;
  }

  ngOnInit() {
    // Initialize Intersection Observers for each container
    this.initIntersectionObservers();

    // Start observing the containers
    this.heroObserver.observe(this.heroSection.nativeElement);
    
    // Initialize countdown timers
    this.updateCountdown();
    this.countdownInterval = setInterval(() => this.updateCountdown(), 1000);
  }

  ngOnDestroy() {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }

  private initIntersectionObservers() {
    // Define options for the Intersection Observer
    const options = {
      threshold: 0.5, // Adjust as needed, represents the percentage of the target element that must be visible to trigger the callback
    };

    // Create Intersection Observer instances for each container
    this.heroObserver = new IntersectionObserver(
      (entries, observer) => this.handleIntersection(entries, observer, 'hero'),
      options
    );

    this.servicesObserver = new IntersectionObserver(
      (entries, observer) =>
        this.handleIntersection(entries, observer, 'services'),
      options
    );

    this.aboutUsObserver = new IntersectionObserver(
      (entries, observer) =>
        this.handleIntersection(entries, observer, 'aboutUs'),
      options
    );

    this.contactObserver = new IntersectionObserver(
      (entries, observer) =>
        this.handleIntersection(entries, observer, 'contact'),
      options
    );
  }

  private handleIntersection(
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
    container: string
  ) {
    entries.forEach((entry) => {
      // Check if the container is fully visible
      if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
        // Trigger GSAP animations for the corresponding container
        this.triggerAnimations(container);

        // Stop observing once animations are triggered
        observer.unobserve(entry.target);
      }
    });
  }

  private triggerAnimations(container: string) {
    // Implement your GSAP animations for each container here
    switch (container) {
      case 'hero':
        this.animateHeroText().play();
        break;
      case 'services':
        this.animateOurServices().play();
        break;
      case 'aboutUs':
        this.animateAboutUs().play();
        break;
      case 'contact':
        this.animateContact().play();
        break;
      // Add more cases for additional containers if needed
    }
  }
  // ngOnInit() {
  //   this.animateHeroText().play();
  //   this.animateOurServices().play();
  //   this.animateAboutUs().play();
  //   this.animateContact().play();
  // }
  @ViewChild('ourServicesSection')
  ourServicesSection!: ElementRef;

  constructor(private firestore: Firestore) {}

  addLead(lead: any) {
    const id = Math.floor(
      100000000000 + Math.random() * 900000000000
    ).toString();
    const leadsRef = doc(this.firestore, 'leads', id);
    setDoc(leadsRef, { id, ...lead });
  }

  navbarHeight: number = 80;

  scrollToOurServices(): void {
    const element = this.ourServicesSection.nativeElement;
    if (element) {
      window.scrollTo({
        top: element.offsetTop - this.navbarHeight,
        behavior: 'smooth',
      });
    }
  }

  gridData = [
    {
      icon: '/assets/webicon.svg',
      paragraph1: 'Software',
      paragraph2:
        'Developing cutting-edge software solutions across web, mobile, and enterprise applications with a focus on scalability and innovation.',
    },
    {
      icon: '/assets/robotics-icon.svg', 
      paragraph1: 'Robotics',
      paragraph2:
        'Building next-generation robotics systems for automation, manufacturing, and advanced industrial applications.',
    },
    {
      icon: '/assets/rocket-icon.svg',
      paragraph1: 'Rockets',
      paragraph2:
        'Pioneering space technology through advanced propulsion systems and launch vehicle development for India\'s space ambitions.',
    },
    {
      icon: '/assets/energy-icon.svg',
      paragraph1: 'Energy',
      paragraph2:
        'Innovating sustainable energy solutions through smart grid technology, renewable systems, and energy storage solutions.',
    },
  ];
  infoData = [
    {
      icon: '/assets/contact-icon.svg',
      paragraph1: 'Call & talk to us',
      paragraph2: '+91 9884341528',
    },
    {
      icon: '/assets/gmail-icon.svg',
      paragraph1: 'G-mail support',
      paragraph2: 'info@techcoracorp.com',
    },
  ];
  formData: FormData = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  alert: Alert = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  submitForm() {
    // Reset previous validation messages
    this.alert = {
      name: '',
      email: '',
      phone: '',
      message: '',
    }; // Add your form validation logic here

    if (!this.validateForm()) {
      return;
    } // If validation passes, you can send the data to the server or perform any other actions

    console.log('Form submitted:', this.formData); // Clear the form fields after successful submission
    this.addLead(this.formData);
    window.alert('Form submitted successfully');

    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: '',
    }; // You can use Angular HttpClient to send the form data to your server for email handling // Example: this.http.post('/api/send-email', this.formData).subscribe(response => {...});
  }

  validateForm(): boolean {
    let isValid = true; // Validation for name (only alphabets)

    if (!/^[a-zA-Z\s.]+$/.test(this.formData.name)) {
      this.alert.name =
        'Enter a valid username (only alphabets, dot(.) and space).';
      isValid = false;
    } // Validation for email (alphabets, numbers, @, and ends with gmail.com)

    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(this.formData.email)) {
      this.alert.email = 'Enter a valid Gmail account email address.';
      isValid = false;
    } // Validation for phone (only numbers)

    if (!/^\d+$/.test(this.formData.phone)) {
      this.alert.phone = 'Enter a valid phone number (only numbers).';
      isValid = false;
    } // Validation for message (minimum one line)

    if (this.formData.message.trim().length < 1) {
      this.alert.message = 'Enter a message.';
      isValid = false;
    }

    return isValid;
  }

  isFieldInvalid(field: keyof Alert): boolean {
    return this.alert[field] !== '';
  }
}
