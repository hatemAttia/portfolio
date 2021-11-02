import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError, retry } from "rxjs/operators";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  path = " https://back-portfolio.herokuapp.com";

  constructor(private toastr: ToastrService, private http: HttpClient) {}

  /**
   * Option http
   */
  private createRequestOptions() {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
    });
    return headers;
  }

  /**
   * traitement Erreur
   * @param erreur
   */
  traitementErreur(erreur: HttpErrorResponse) {
    if (erreur.error instanceof ErrorEvent) {
      console.log("Une erreur s est produite", erreur.error.message);
    } else
      console.error(
        "code renvoyé par le backen " +
          erreur.status +
          +"le corps était : " +
          JSON.stringify(erreur.error)
      );
    return throwError(
      "quelque chose est arrivé ; Veuillez reessayer plus tard"
    );
  }

  /**
   * Send Mail
   * @param data
   */
  sendMail(data) {
    const options = this.createRequestOptions();
    return this.http
      .post(this.path + "/mail", JSON.stringify(data), { headers: options })
      .pipe(retry(2), catchError(this.traitementErreur));
  }

  showSuccess(message, title) {
    this.toastr.success(message, title);
  }

  showError(message, title) {
    this.toastr.error(message, title);
  }

  showInfo(message, title) {
    this.toastr.info(message, title);
  }

  showWarning(message, title) {
    this.toastr.warning(message, title);
  }
}
