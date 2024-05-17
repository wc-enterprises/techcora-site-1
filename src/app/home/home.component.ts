import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';
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
  @ViewChild('aboutUsSection', { static: true }) aboutUsSection!: ElementRef;
  @ViewChild('contactSection', { static: true }) contactSection!: ElementRef;
  @ViewChild('heroSection', { static: true }) heroSection!: ElementRef;

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

  constructor(private renderer: Renderer2) {}

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
      paragraph1: 'Web development',
      paragraph2:
        'Building innovative, user-friendly websites for your digital success.',
    },
    {
      icon: '/assets/appicon.svg',
      paragraph1: 'App development',
      paragraph2:
        'Developing innovative apps to revolutionize your digital experience.',
    },
    {
      icon: '/assets/aiicon.svg',
      paragraph1: 'AI/ML applications',
      paragraph2:
        'Innovative AI/ML application development for cutting-edge technological solutions.        ',
    },
    {
      icon: '/assets/uiicon.svg',
      paragraph1: 'UI/UX design',
      paragraph2:
        'Building intuitive apps with stellar design for an unmatched user experience.        ',
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
      paragraph2: 'info@techcoracorp.com'
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
    

    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: '',
    }; // You can use Angular HttpClient to send the form data to your server for email handling // Example: this.http.post('/api/send-email', this.formData).subscribe(response => {...});
  }

  validateForm(): boolean {
    let isValid = true; // Validation for name (only alphabets)

    if (!/^[a-zA-Z]+$/.test(this.formData.name)) {
      this.alert.name = 'Enter a valid username (only alphabets).';
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
