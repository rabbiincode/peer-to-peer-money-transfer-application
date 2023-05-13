import { ErrorHandler } from '@angular/core';

export class GlobalErrorHandlerComponent implements ErrorHandler {
  handleError(error: any): void {
    //console.log(error)
  }
}