import {
  Component,
  ElementRef,
  HostListener,
  Renderer2,
  ViewChild,
} from '@angular/core';

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
  @ViewChild('ourServicesSection') ourServicesSection!: ElementRef;

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
      icon: '/assets/uiicon.svg',
      paragraph1: 'UI/UX design',
      paragraph2:
        'Innovative AI/ML application development for cutting-edge technological solutions.        ',
    },
    {
      icon: '/assets/aiicon.svg',
      paragraph1: 'AI/ML applications',
      paragraph2:
        'Building intuitive apps with stellar design for an unmatched user experience.        ',
    },
  ];
  infoData = [
    {
      icon: '/assets/contact-icon.svg',
      paragraph1: 'Call & talk to us',
      paragraph2: '+91 9876543210',
      paragraph3: '+91 9800543210',
    },
    {
      icon: '/assets/gmail-icon.svg',
      paragraph1: 'G-mail support',
      paragraph2: 'techcora@gmail.com',
      paragraph3: 'techcora@gmail.com',
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
    };

    // Add your form validation logic here
    if (!this.validateForm()) {
      return;
    }

    // If validation passes, you can send the data to the server or perform any other actions
    console.log('Form submitted:', this.formData);

    // Clear the form fields after successful submission
    this.formData = {
      name: '',
      email: '',
      phone: '',
      message: '',
    };

    // You can use Angular HttpClient to send the form data to your server for email handling
    // Example: this.http.post('/api/send-email', this.formData).subscribe(response => {...});
  }

  validateForm(): boolean {
    let isValid = true;

    // Validation for name (only alphabets)
    if (!/^[a-zA-Z]+$/.test(this.formData.name)) {
      this.alert.name = 'Enter a valid username (only alphabets).';
      isValid = false;
    }

    // Validation for email (alphabets, numbers, @, and ends with gmail.com)
    if (!/^[a-zA-Z0-9._%+-]+@gmail\.com$/.test(this.formData.email)) {
      this.alert.email = 'Enter a valid Gmail account email address.';
      isValid = false;
    }

    // Validation for phone (only numbers)
    if (!/^\d+$/.test(this.formData.phone)) {
      this.alert.phone = 'Enter a valid phone number (only numbers).';
      isValid = false;
    }

    // Validation for message (minimum one line)
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
