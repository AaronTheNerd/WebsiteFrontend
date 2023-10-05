import { Component } from "@angular/core";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faStackOverflow } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent {
  twitterIcon = faTwitter;
  stackOverflowIcon = faStackOverflow;
  linkedInIcon = faLinkedin;
  githubIcon = faGithub;
  emailIcon = faEnvelope;
}
