import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  pictureIG:any;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'forward-arrow',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/forward-arrow.svg'));

    iconRegistry.addSvgIcon(
      'fb',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/facebook-logo.svg'));

    iconRegistry.addSvgIcon(
      'ig',
      sanitizer.bypassSecurityTrustResourceUrl('assets/images/instagram-logo.svg'));
  }

  ngOnInit() {
    this.pictureIG = '.src/assets/images/instagram-logo.png';
  }
}


