import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { ContactService } from "src/app/shared/services/contact.service";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private toastr: ToastrService,
    private contactServ: ContactService,
    private fb: FormBuilder
  ) {
    this.contactForm = this.fb.group({
      email: [
        "",
        Validators.compose([
          Validators.pattern(
            "^[_A-Za-z0-9-]+(\\.[_A-Za-z0-9-]{0,10})*@[A-Za-z0-9]+(\\.[A-Za-z0-9]{0,10})*(\\.[A-Za-z]{0,5})$"
          ),
          Validators.required,
        ]),
      ],
      name: ["", Validators.required],
      emailHost: ["contact@hatemattia.tn", Validators.required],
      message: ["", Validators.required],
      subject: ["", Validators.required],
    });
  }

  ngOnInit() {}
  x;
  sendMail() {
    this.contactServ.sendMail(this.contactForm.value).subscribe((res) => {
      this.showSuccess();
      this.contactForm.setValue({
        email: "",
        name: "",
        emailHost: "contact@hatemattia.tn",
        message: "",
        subject: "",
      });
    });
  }

  showSuccess() {
    this.contactServ.showSuccess("message envoyé ", ":)");
  }
}
